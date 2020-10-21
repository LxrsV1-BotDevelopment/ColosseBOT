const Discord = require("discord.js");
const { prefix, ownerID } = require("./config.json");
const embeds = require("./modules/embeds.js");
const fs = require("fs");

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

console.log("\n _______  _______  ___      _______  _______  _______  _______  _______  _______  _______ \n|   ____||       ||   |    |       ||       ||       ||       ||  _    ||       ||       |\n|  |     |   _   ||   |    |   _   ||  _____||  _____||    ___|| |_|   ||   _   ||_     _|\n|  |     |  | |  ||   |    |  | |  || |_____ | |_____ |   |___ |      _||  | |  |  |   |  \n|  |     |  |_|  ||   |___ |  |_|  ||_____  ||_____  ||    ___||  _  |_ |  |_|  |  |   |  \n|  |____ |       ||       ||       | _____| | _____| ||   |___ | |_|   ||       |  |   |  \n|_______||_______||_______||_______||_______||_______||_______||_______||_______|  |___|  \n\t\t\t  =The Ultimate Human Assistant Chatbot=\n\t\t\t\t      Starting Up...")

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log("\t\t\t      Bot Is Ready! - Version: 0.0.1");
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aka && cmd.aka.includes(commandName));
    if (!command) return embeds.noCommand(message, commandName);

    if(command.disabled) return embeds.disabledCommand(message, commandName);
    if (command.ownerOnly && message.author.id != ownerID) return embeds.ownerCommand(message, commandName);
    if (command.guildOnly && message.channel.type !== "text") return embeds.guildOnly(message, commandName);
    if (command.directOnly && message.channel.type !== "dm") return embeds.directOnly(message, commandName);
    if (command.permsCheck && !message.member.hasPermission(command.neededPerms, { checkAdmin: true, checkOwner: true })) return embeds.noPerms(message, commandName);
    if (command.args) {
        if (!args.length && command.argsCount >= 1) return embeds.noArgsProvided(message, commandName, command);
        if (args.length < command.argsCount) return embeds.notEnoughArgs(message, commandName, command);
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
        console.log(error);
        return embeds.unknownError(client, message, commandName, error)
    }
});

client.login(process.env.DISCORD_TOKEN);
