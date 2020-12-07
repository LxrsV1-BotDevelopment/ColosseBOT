const Discord = require("discord.js");
const fs = require("fs");
const embeds = require("./modules/embeds.js");
const { version } = require("./package.json");
const { prefix, ownerID } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log(`\nColosseBOT - The Ultimate Discord Bot\nBot Is Ready! - Version: ${version}`);
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aka && cmd.aka.includes(commandName));
    if (!command) return embeds.noCommand(message, commandName);

    if(command.disabled) return embeds.disabledCommand(message);
    if (command.ownerOnly && message.author.id != ownerID) return embeds.ownerCommand(message);
    if (command.guildOnly && message.channel.type !== "text") return embeds.guildOnly(message);
    if (command.directOnly && message.channel.type !== "dm") return embeds.directOnly(message);
    if (command.permsCheck && !message.member.hasPermission(command.neededPerms, { checkAdmin: true, checkOwner: true })) return embeds.noPerms(message, commandName);
    if (command.args) {
        if (!args.length && command.argsCount >= 1) return embeds.noArgsProvided(message, command);
        if (args.length < command.argsCount) return embeds.notEnoughArgs(message, command);
    }

    if (!cooldowns.has(command.name)) cooldowns.set(command.name, new Discord.Collection());
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return embeds.cooldownActive(message, timeLeft)
        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(client, message, args);
    } catch (error) {
        return embeds.unknownError(client, message, commandName, error)
    }
});

client.login(process.env.DISCORD_TOKEN);
