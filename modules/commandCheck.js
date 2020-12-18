const Discord = require("discord.js");
const errorEmbeds = require("./embeds/errorEmbeds.js");
const { prefix, maintenance, ownerID } = require("./etc/config.json");

module.exports.cChecker = function(client, message) {
    const cooldowns = new Discord.Collection();

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aka && cmd.aka.includes(commandName));
    if(!command) return errorEmbeds.noCommand(client, message, commandName);

    if(maintenance) return errorEmbeds.maintenanceActive(message);
    if(command.disabled) return errorEmbeds.disabledCommand(message);
    if(command.ownerOnly && message.author.id != ownerID) return errorEmbeds.ownerOnly(message);
    if(command.guildOnly && message.channel.type !== "text") return errorEmbeds.guildOnly(message);
    if(command.directOnly && message.channel.type !== "dm") return errorEmbeds.directOnly(message);
    if(command.guildOwnerOnly && message.author.id != message.guild.ownerID) return errorEmbeds.guildOwnerOnly(message);
    if(command.permsCheck && !message.member.hasPermission(command.neededPerms, { checkAdmin: true, checkOwner: true })) return errorEmbeds.noPerms(message, commandName);
    if(command.args) {
        if(!args.length && command.argsCount >= 1) return errorEmbeds.noArgsProvided(message, command);
        if(args.length < command.argsCount) return errorEmbeds.notEnoughArgs(message, command);
    }

    if(!cooldowns.has(command.name)) cooldowns.set(command.name, new Discord.Collection());
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown) * 1000;

    if(timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if(now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return errorEmbeds.cooldownActive(message, timeLeft)
        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(client, message, args);
    } catch (error) {
        return errorEmbeds.unknownError(client, message, commandName, error)
    }
}
