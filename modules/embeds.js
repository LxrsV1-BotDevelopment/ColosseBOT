const Discord = require("discord.js");
const { colorDarkRed, colorLightBrown, colorBlack, devGuild, primaryLogs, botThumbnail } = require("../config.json");

module.exports.unknownError = function(client, message, commandName, error) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    console.log(error);
    message.delete();

    const unknownErrorEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || ${commandN} Error ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`An unknown error occured while running command.\nDeveloper has been informed, sorry for the inconvenience.`)
    .setFooter("Error Code: 0x", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: unknownErrorEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });

    const unknownErrorDevEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || ${commandN} Error ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`An error occured while running command.`)
    .addField("Guild: ", message.guild.id)
    .addField("Channel: ", message.channel.id)
    .addField("Error: ", `\`\`\`${error}\`\`\``)
    .setFooter("Error Code: 0x", botThumbnail)
    .setTimestamp();

    client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send({embed: unknownErrorDevEmbed});
}

module.exports.noCommand = function(message, commandName) {
    message.delete();

    const noCommandEmbed = new Discord.MessageEmbed()
      .setTitle(`⋙ ColosseBOT || Error ⋘`)
      .setURL("https://colossebot.app")
      .setColor(colorDarkRed)
      .setDescription(`There is no command with name ${commandName}!`)
      .setFooter("Error Code: 1", botThumbnail)
      .setTimestamp();

      message.channel.send({embed: noCommandEmbed}).then(m => {
        setTimeout(() => {m.delete()}, 7000);
      });
};

module.exports.disabledCommand = function(message) {
    message.delete();

    const disabledCommandEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || Error ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Sorry, but this command is currently disabled!")
    .setFooter("Error Code: 2", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: disabledCommandEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.ownerCommand = function(message) {
    message.delete();

    const ownerOnlyEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || Error ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("This command is intended only for bot owner.")
    .setFooter("Error Code: 3", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: ownerOnlyEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.guildOnly = function(message) {
    message.delete();

    const guildOnlyEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || Error ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I can\'t execute this command inside DMs!")
    .setFooter("Error Code: 4", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: guildOnlyEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.directOnly = function(message) {
    message.delete();

    const directOnlyEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || Error ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I can\'t execute this command inside guilds!")
    .setFooter("Error Code: 5", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: directOnlyEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.noPerms = function(message) {
    message.delete();

    const noPermsEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || Error ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`You don\'t have required permissions, ${message.author.username}!\nCheck \`//perms\` for more info.`)
    .setFooter("Error Code: 6", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: noPermsEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.noArgsProvided = function(message, command) {
    message.delete();

    const noArgsProvidedEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || Error ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`You didn't provide any arguments, ${message.author.username}!\nThe proper usage would be: \`${command.usage}\``)
    .setFooter("Error Code: 7", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: noArgsProvidedEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.notEnoughArgs = function(message, command) {
    message.delete();

    const notEnoughArgsEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || Error ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`You didn't provide enough arguments, ${message.author.username}!\nThe proper usage would be: \`${command.usage}\``)
    .setFooter("Error Code: 8", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: notEnoughArgsEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.cooldownActive = function(message, timeLeft) {
    message.delete();

    const cooldownActiveEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || Command Cooldown ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorLightBrown)
    .setDescription(`${message.author.username}, please wait ${timeLeft.toFixed(1)} seconds before reusing this command.\nThis message will disappear when the cooldown is over.`);

    message.channel.send({embed: cooldownActiveEmbed}).then(m => {
      m.react("⌛");
      setTimeout(() => {m.delete()}, timeLeft * 1000);
    });
}

module.exports.banNoMember = function(message) {
    message.delete();

    const banNoMemberEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || Member Not Found ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Couldn't find user to ban!\nPlease try again, ${message.author.username}!`)
    .setFooter("Error Code: 9", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: banNoMemberEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.banHigherMember = function(client, message) {
    message.delete();

    const banHigherMemberEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || Infraction Protect ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Don't try to ban members higher than you, ${message.author.username}!\nThis action was recorded to system!`)
    .setFooter("ColosseBOT", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: banHigherMemberEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.banInfraction = function(client, message) {
    const banInfractionEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || Infraction Report ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Automatic server protection was trigered.")
    .addField("Trigered By:", message.author.username)
    .addField("Reason:", "Tried to ban higher standing member.")
    .addField("Message:", message.content)
    .setFooter("ColosseBOT", botThumbnail)
    .setTimestamp();

    client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send({embed: banInfractionEmbed});
}

module.exports.banImpossibleBot = function(message) {
    message.delete();

    const banImpossibleBotEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || Ban Impossible ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Ban is not possible, that may be because:\n• Insufficent Bot Permissions;\n• Bannable Member Is Higher In Role Hierarchy Than Bot;\n• Bannable Member Is Guild Owner or Administrator.`)
    .setFooter("Error Code: 10", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: banImpossibleBotEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 13000);
    });
}

module.exports.banSuccess = function(message, banee, reason) {
    message.delete();

    const banSuccessEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || Ban Successful ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`**${banee.user.tag} was banned from this guild!\nReason:** \`${reason}\``)
    .setFooter("ColosseBOT", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: banSuccessEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.banReport = function(client, message, banee, reason) {
    const banReportEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || Ban Report ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorBlack)
    .setDescription("GuildMember ban report.")
    .addField("Banned Membed:", banee.user.tag, true)
    .addField("Banned Member ID:", banee.user.id, true)
    .addField("\u200B", "\u200B", true)
    .addField("Moderator:", message.author.tag, true)
    .addField("Reason:", reason, true)
    .addField("\u200B", "\u200B", true)
    .setFooter("ColosseBOT", botThumbnail)
    .setTimestamp();

    client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send({embed: banReportEmbed});
}