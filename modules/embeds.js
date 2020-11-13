const Discord = require("discord.js");
const { colorDarkRed, colorGreen, colorLightBrown, colorBlack, devGuild, primaryLogs, botThumbnail } = require("../config.json");

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
    .setDescription(`You didn't provide enough arguments, ${message.author.username}!\nThe proper usage would be:\n\`${command.usage}\``)
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
    .setFooter("Error Code: 13", botThumbnail)
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
    .addField("Trigered By:", message.author.tag)
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
    .setFooter("Error Code: 14", botThumbnail)
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
    .addField("Banned Membed:", banee.user.tag)
    .addField("Banned Member ID:", banee.user.id)
    .addField("Moderator:", message.author.tag)
    .addField("Reason:", reason)
    .setFooter("ColosseBOT", botThumbnail);

    client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send({embed: banReportEmbed});
}

module.exports.falseChoice = function(message, usage) {
    message.delete();

    const falseChoiceEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || Incorrect Choice ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Sorry, I couldn't understand your input.\nYour input should look like this:\n\`${usage}\``)
    .setFooter("Error Code: 16", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: falseChoiceEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.regexOnly01 = function(message) {
    message.delete();

    const regexOnly01Embed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || Incorrect Format ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("The input can only contain ones and zeros.")
    .setFooter("Error Code: 17", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: regexOnly01Embed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.incorrectBinary = function(message) {
    message.delete();

    const incorrectBinaryEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || Incorrect Format ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Incorrect binary input. Binary numbers are 8 digits long.")
    .setFooter("Error Code: 18", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: incorrectBinaryEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.binaryAscii = function(message, input, result) {
    message.delete();

    const binaryAsciiEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || Binary Decode ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorGreen)
    .addField("Input:", input)
    .addField("Result:", result)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

    message.channel.send({embed: binaryAsciiEmbed});
}

module.exports.regexOnlyLetters = function(message) {
    message.delete();

    const regexOnlyLettersEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || Incorrect Format ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Input can only contain letters and numbers.")
    .setFooter("Error Code: 19", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: regexOnlyLettersEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.asciiBinary = function(message, input, result) {
    message.delete();

    const asciiBinaryEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || Binary Encode ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorGreen)
    .addField("Input:", input)
    .addField("Result:", result)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

    message.channel.send({embed: asciiBinaryEmbed});
}

module.exports.notHexColor = function(message) {
    message.delete();

    const notHexColorEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || Not HEX Color ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Sorry, but I don't understand this color format.\nI only accept colors in HEX format.")
    .setFooter("Error Code: 23", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: notHexColorEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.aCantBeZero = function(message) {
    message.delete();

    const aCantBeZeroEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || A ≠ 0 ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Coefficient A cannot be zero.")
    .setFooter("Error Code: 24", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: aCantBeZeroEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.inputOnlyNumbers = function(message) {
    message.delete();

    const inputOnlyNumbersEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || Incorrect Format ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Input can only contain numbers.")
    .setFooter("Error Code: 25", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: inputOnlyNumbersEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.emojiSpeak = function(message, input, result) {
    message.delete();

    const emojiSpeakEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || EmojiSpeak ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorGreen)
    .addField("Input:", input)
    .addField("Result:", result)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

    message.channel.send({embed: emojiSpeakEmbed});
}

module.exports.flipText = function(message, input, result) {
    message.delete();

    const splitString = result.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");

    const flipTextEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || FlipText ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorGreen)
    .addField("Input:", input)
    .addField("Result:", joinArray)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

    message.channel.send({embed: flipTextEmbed});

}

module.exports.roleNoMember = function(message) {
    message.delete();

    const roleNoMemberEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || Member Not Found ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Couldn't find user!\nPlease try again, ${message.author.username}!`)
    .setFooter("Error Code: 29", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: roleNoMemberEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.roleNotFound = function(message) {
    message.delete();

    const roleNotFoundEmbed = new Discord.MessageEmbed()
    .setTitle("⋙ ColosseBOT || Role Not Found ⋘")
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Couldn't find role!\nPlease try again, ${message.author.username}!`)
    .setFooter("Error Code: 30", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: roleNotFoundEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.roleGiveImpossibleBot = function(message) {
    message.delete();

    const roleGiveImpossibleBotEmbed = new Discord.MessageEmbed()
    .setTitle(`⋙ ColosseBOT || GiveRole Impossible ⋘`)
    .setURL("https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Giving role to this user isn't possible, that may be because:\n• Insufficent Bot Permissions;\n• Mentioned Member Is Higher In Role Hierarchy Than Bot;\n• Mentioned Role Is Higher In Role Hierarchy Than Bot.`)
    .setFooter("Error Code: 31", botThumbnail)
    .setTimestamp();

    message.channel.send({embed: roleGiveImpossibleBotEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 13000);
    });
}
