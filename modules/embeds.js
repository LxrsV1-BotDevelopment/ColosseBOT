const Discord = require("discord.js");
const { colorDarkRed, colorLightBrown, mainGuild, errorLogsChannel } = require("../config.json");

module.exports.unknownError = function(client, message, commandName, error) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    message.delete();

    const unknownErrorEmbed = new Discord.MessageEmbed()
    .setTitle(`${commandN} ⋙ Error`)
    .setColor(colorDarkRed)
    .setDescription(`An unknown error occured while running command.\nDeveloper has been informed, sorry for the inconvenience.`)
    .setFooter("Error Code: 0x");

    message.channel.send({embed: unknownErrorEmbed});

    const unknownErrorDevEmbed = new Discord.MessageEmbed()
    .setTitle(`${commandN} ⋙ Error`)
    .setColor(colorDarkRed)
    .setDescription(`An error occured while running command.`)
    .addField("Guild: ", message.guild.id)
    .addField("Channel: ", message.channel.id)
    .addField("Error: ", `\`\`\`${error}\`\`\``)
    .setFooter("Error Code: 0x");

    client.guilds.resolve(mainGuild).channels.resolve(errorLogsChannel).send({embed: unknownErrorDevEmbed});
}

module.exports.noCommand = function(message, commandName) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    message.delete();

    const noCommandEmbed = new Discord.MessageEmbed()
      .setTitle(`${commandN} ⋙ Error`)
      .setColor(colorDarkRed)
      .setDescription("There is no command with this name!")
      .setFooter("Error Code: 1");

      message.channel.send({embed: noCommandEmbed});
};

module.exports.disabledCommand = function(message, commandName) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    message.delete();

    const disabledCommandEmbed = new Discord.MessageEmbed()
    .setTitle(`${commandN} ⋙ Error`)
    .setColor(colorDarkRed)
    .setDescription("Sorry, but this command is currently disabled!")
    .setFooter("Error Code: 2");

    message.channel.send({embed: disabledCommandEmbed});
}

module.exports.ownerCommand = function(message, commandName) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    message.delete();

    const ownerOnlyEmbed = new Discord.MessageEmbed()
    .setTitle(`${commandN} ⋙ Error`)
    .setColor(colorDarkRed)
    .setDescription("This command is intended only for bot owner.")
    .setFooter("Error Code: 3");

    message.channel.send({embed: ownerOnlyEmbed});
}

module.exports.guildOnly = function(message, commandName) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    message.delete();

    const guildOnlyEmbed = new Discord.MessageEmbed()
    .setTitle(`${commandN} ⋙ Error`)
    .setColor(colorDarkRed)
    .setDescription("I can\'t execute this command inside DMs!")
    .setFooter("Error Code: 4");

    message.channel.send({embed: guildOnlyEmbed});
}

module.exports.directOnly = function(message, commandName) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    message.delete();

    const directOnlyEmbed = new Discord.MessageEmbed()
    .setTitle(`${commandN} ⋙ Error`)
    .setColor(colorDarkRed)
    .setDescription("I can\'t execute this command inside guilds!")
    .setFooter("Error Code: 5");

    message.channel.send({embed: directOnlyEmbed});
}

module.exports.noPerms = function(message, commandName) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    message.delete();

    const noPermsEmbed = new Discord.MessageEmbed()
    .setTitle(`${commandN} ⋙ Error`)
    .setColor(colorDarkRed)
    .setDescription("You don\'t have required permissions!\nCheck \`//perms\` for more info.")
    .setFooter("Error Code: 6");

    message.channel.send({embed: noPermsEmbed});
}

module.exports.noArgsProvided = function(message, commandName, command) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    message.delete();

    const noArgsProvidedEmbed = new Discord.MessageEmbed()
    .setTitle(`${commandN} ⋙ Error`)
    .setColor(colorDarkRed)
    .setDescription(`You didn't provide any arguments, ${message.author.username}!\nThe proper usage would be: \`${command.usage}\``)
    .setFooter("Error Code: 7");

    message.channel.send({embed: noArgsProvidedEmbed});
}

module.exports.notEnoughArgs = function(message, commandName, command) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    message.delete();

    const notEnoughArgsEmbed = new Discord.MessageEmbed()
    .setTitle(`${commandN} ⋙ Error`)
    .setColor(colorDarkRed)
    .setDescription(`You didn't provide enough arguments, ${message.author.username}!\nThe proper usage would be: \`${command.usage}\``)
    .setFooter("Error Code: 8");

    message.channel.send({embed: notEnoughArgsEmbed});
}

module.exports.cooldownActive = function(message, commandName, timeLeft) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    message.delete();

    const cooldownActiveEmbed = new Discord.MessageEmbed()
    .setTitle(`${commandN} ⋙ Cooldown`)
    .setColor(colorLightBrown)
    .setDescription(`${message.author.username} please wait ${timeLeft.toFixed(1)} seconds before reusing this command.`);

    message.channel.send({embed: cooldownActiveEmbed});
}
