const Discord = require("discord.js");
const { colorDarkRed, colorGreen, colorLightBrown, colorLightRed, colorBlack, devGuild, primaryLogs, botThumbnail, unsplashThumbnail } = require("../config.json");

module.exports.unknownError = function(client, message, commandName, error) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    console.log(error);
    message.delete();

    const unknownErrorEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ColosseBOT || ${commandN} Error ⋘`, "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("An unknown error occured while running command.\nDeveloper has been informed, sorry for the inconvenience.");

    message.channel.send({embed: unknownErrorEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });

    const unknownErrorDevEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ColosseBOT || ${commandN} Error ⋘`, "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("An error occured while running command.")
    .addField("Guild: ", message.guild.id)
    .addField("Channel: ", message.channel.id)
    .addField("Error: ", `\`\`\`${error}\`\`\``);

    return client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send({embed: unknownErrorDevEmbed});
}

module.exports.noCommand = function(message, commandName) {
    message.delete();

    const noCommandEmbed = new Discord.MessageEmbed()
      .setAuthor("⋙ ColosseBOT || No Command ⋘", "", "https://colossebot.app")
      .setColor(colorDarkRed)
      .setDescription(`There is no command with name ${commandName}!`);

      return message.channel.send({embed: noCommandEmbed}).then(m => {
        setTimeout(() => {m.delete()}, 7000);
      });
};

module.exports.disabledCommand = function(message) {
    message.delete();

    const disabledCommandEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Disabled Command ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Sorry, but this command is currently disabled!");

    return message.channel.send({embed: disabledCommandEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.ownerCommand = function(message) {
    message.delete();

    const ownerOnlyEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Owner Command ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("This command is intended only for bot owner.");

    return message.channel.send({embed: ownerOnlyEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.guildOnly = function(message) {
    message.delete();

    const guildOnlyEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Guild Only Command ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I can\'t execute this command inside DMs!");

    return message.channel.send({embed: guildOnlyEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.directOnly = function(message) {
    message.delete();

    const directOnlyEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || DM Only Command ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I can\'t execute this command inside guilds!");

    return message.channel.send({embed: directOnlyEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.noPerms = function(message) {
    message.delete();

    const noPermsEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Insufficent Permissions ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`You don\'t have required permissions, ${message.author.username}!\nCheck \`//perms\` for more info.`);

    return message.channel.send({embed: noPermsEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.noArgsProvided = function(message, command) {
    message.delete();

    const noArgsProvidedEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || No Arguments ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`You didn't provide any arguments, ${message.author.username}!\nThe proper usage would be: \`${command.usage}\``);

    return message.channel.send({embed: noArgsProvidedEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.notEnoughArgs = function(message, command) {
    message.delete();

    const notEnoughArgsEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Not Enough Arguments ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`You didn't provide enough arguments, ${message.author.username}!\nThe proper usage would be:\n\`${command.usage}\``);

    return message.channel.send({embed: notEnoughArgsEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.cooldownActive = function(message, timeLeft) {
    message.delete();

    const cooldownActiveEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Command Cooldown ⋘", "", "https://colossebot.app")
    .setColor(colorLightBrown)
    .setDescription(`${message.author.username}, please wait ${timeLeft.toFixed(1)} seconds before reusing this command.\nThis message will disappear when the cooldown is over.`);

    return message.channel.send({embed: cooldownActiveEmbed}).then(m => {
      m.react("⌛");
      setTimeout(() => {m.delete()}, timeLeft * 1000);
    });
}

module.exports.banNoMember = function(message) {
    message.delete();

    const banNoMemberEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Member Not Found ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Couldn't find user to ban!\nPlease try again, ${message.author.username}!`);

    return message.channel.send({embed: banNoMemberEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.banHigherMember = function(client, message) {
    message.delete();

    const banHigherMemberEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Infraction Protect ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Don't try to ban members higher than you, ${message.author.username}!\nThis action was recorded to system!`);

    return message.channel.send({embed: banHigherMemberEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.banInfraction = function(client, message) {
    const banInfractionEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Infraction Report ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Automatic server protection was trigered.")
    .addField("Trigered By:", message.author.tag)
    .addField("Reason:", "Tried to ban higher standing member.")
    .addField("Message:", message.content);

    return client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send({embed: banInfractionEmbed});
}

module.exports.banImpossibleBot = function(message) {
    message.delete();

    const banImpossibleBotEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Ban Impossible ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Ban was not possible, that may have been because:\n• Insufficent Bot Permissions;\n• Bannable Member Is Higher In Role Hierarchy Than Bot;\n• Bannable Member Is Guild Owner or Administrator.");

    return message.channel.send({embed: banImpossibleBotEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 13000);
    });
}

module.exports.banSuccess = function(message, banee, reason) {
    message.delete();

    const banSuccessEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Ban Successful ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`**${banee.user.tag} was banned from this guild!\nReason:** \`${reason}\``);

    return message.channel.send({embed: banSuccessEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.banReport = function(client, message, banee, reason) {
    const banReportEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Ban Report ⋘", "", "https://colossebot.app")
    .setColor(colorBlack)
    .addField("Banned Membed:", banee.user.tag)
    .addField("Banned Member ID:", banee.user.id)
    .addField("Moderator:", message.author.tag)
    .addField("Reason:", reason);

    return client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send({embed: banReportEmbed});
}

module.exports.falseChoice = function(message, usage) {
    message.delete();

    const falseChoiceEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Input Error ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Sorry, I couldn't understand your input.\nYour input should look like this:\n\`${usage}\``);

    return message.channel.send({embed: falseChoiceEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.regexOnly01 = function(message) {
    message.delete();

    const regexOnly01Embed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Input Error ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("The input can only contain ones and zeros.");

    return message.channel.send({embed: regexOnly01Embed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.incorrectBinary = function(message) {
    message.delete();

    const incorrectBinaryEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Input Error ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Incorrect binary input. Binary numbers are 8 digits long.");

    return message.channel.send({embed: incorrectBinaryEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.binaryAscii = function(message, input, result) {
    message.delete();

    const binaryAsciiEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Binary Decode ⋘", "", "https://colossebot.app")
    .setColor(colorGreen)
    .addField("Input:", input)
    .addField("Result:", result);

    return message.channel.send({embed: binaryAsciiEmbed});
}

module.exports.regexOnlyLetters = function(message) {
    message.delete();

    const regexOnlyLettersEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Input Error ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Input can only contain letters and numbers.");

    return message.channel.send({embed: regexOnlyLettersEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.asciiBinary = function(message, input, result) {
    message.delete();

    const asciiBinaryEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Binary Encode ⋘", "", "https://colossebot.app")
    .setColor(colorGreen)
    .addField("Input:", input)
    .addField("Result:", result);

    return message.channel.send({embed: asciiBinaryEmbed});
}

module.exports.notHexColor = function(message) {
    message.delete();

    const notHexColorEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Not HEX Color ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Sorry, but I don't understand this color format.\nI only accept colors in HEX format.");

    return message.channel.send({embed: notHexColorEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.aCantBeZero = function(message) {
    message.delete();

    const aCantBeZeroEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || A ≠ 0 ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Coefficient A cannot be zero.");

    return message.channel.send({embed: aCantBeZeroEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.inputOnlyNumbers = function(message) {
    message.delete();

    const inputOnlyNumbersEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Input Error ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Input can only contain numbers.");

    return message.channel.send({embed: inputOnlyNumbersEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.emojiSpeak = function(message, input, result) {
    message.delete();

    const emojiSpeakEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || EmojiSpeak ⋘", "", "https://colossebot.app")
    .setColor(colorGreen)
    .addField("Input:", input)
    .addField("Result:", result);

    return message.channel.send({embed: emojiSpeakEmbed});
}

module.exports.flipText = function(message, input, result) {
    message.delete();

    const splitString = result.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");

    const flipTextEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || FlipText ⋘", "", "https://colossebot.app")
    .setColor(colorGreen)
    .addField("Input:", input)
    .addField("Result:", joinArray);

    return message.channel.send({embed: flipTextEmbed});

}

module.exports.roleNoMember = function(message) {
    message.delete();

    const roleNoMemberEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Member Not Found ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Couldn't find user!\nPlease try again, ${message.author.username}!`);

    return message.channel.send({embed: roleNoMemberEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.roleNotFound = function(message) {
    message.delete();

    const roleNotFoundEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Role Not Found ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Couldn't find role!\nPlease try again, ${message.author.username}!`);

    return message.channel.send({embed: roleNotFoundEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.roleGiveImpossibleBot = function(message) {
    message.delete();

    const roleGiveImpossibleBotEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || GiveRole Impossible ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Giving role to this user isn't possible, that may be because:\n• Insufficent Bot Permissions;\n• Mentioned Member Is Higher In Role Hierarchy Than Bot;\n• Mentioned Role Is Higher In Role Hierarchy Than Bot.");

    return message.channel.send({embed: roleGiveImpossibleBotEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 13000);
    });
}

module.exports.guessDiceWin = function(message, diceGuess, diceValue) {
    const guessDiceWinEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Guess Dice ⋘", "", "https://colossebot.app")
    .setColor(colorGreen)
    .setDescription(`You picked ${diceGuess} and I rolled ${diceValue}. You won!`);

    return message.channel.send({embed: guessDiceWinEmbed});
}

module.exports.guessDiceLose = function(message, diceGuess, diceValue) {
    const guessDiceLoseEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Guess Dice ⋘", "", "https://colossebot.app")
    .setColor(colorLightRed)
    .setDescription(`You picked ${diceGuess}, but I rolled ${diceValue}. You lost!`);

    return message.channel.send({embed: guessDiceLoseEmbed});
}

module.exports.guessDice1to6 = function(message) {
    const guessDiceLoseEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Input Error ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Min Dice Value: 1 / Max Dice Value: 6");

    return message.channel.send({embed: guessDiceLoseEmbed});
}

module.exports.notHex = function(message) {
    message.delete();

    const notHexEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Not HEX ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Sorry, but this is not HEX string.\nI can't decode this.");

    return message.channel.send({embed: notHexEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.noImage = function(message) {
    message.delete();

    const noImageEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || No Image ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Couldn't find a photo, please try again ${message.author.username}!`)

    return message.channel.send({embed: noImageEmbed}).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.unsplashImage = function(message, body) {
    const unsplashImageEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Image ⋘", "", "https://colossebot.app")
    .setColor(colorGreen)
    .setDescription(`Photo by [${body.user.name}](${body.user.links.html}) on [Unsplash](https://unsplash.com/?utm_source=ColosseBOT&utm_medium=referral)`)
    .setImage(body.urls.raw + ".png")
    .setFooter("Provided by Unsplash.com", unsplashThumbnail);

    return message.channel.send({embed: unsplashImageEmbed});
}
