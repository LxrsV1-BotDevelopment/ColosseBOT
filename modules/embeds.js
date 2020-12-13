const Discord = require("discord.js");
const { colorDarkRed, colorGreen, colorLightBrown, colorBlack, devGuild, primaryLogs, unsplashThumbnail } = require("../config.json");

module.exports.unknownError = function(client, message, commandName, error) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    console.log(error);
    message.delete();

    const unknownErrorEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ColosseBOT || ${commandN} Error ⋘`, "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("An unknown error occured while running command.\nDeveloper has been informed.\nI'm sorry for the inconvenience.");

    message.channel.send(unknownErrorEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });

    if(message.channel.type == "text"){
      const unknownErrorGuildEmbed = new Discord.MessageEmbed()
      .setAuthor(`⋙ ColosseBOT || ${commandN} Error ⋘`, "", "https://colossebot.app")
      .setColor(colorDarkRed)
      .setDescription("An error occured while running command.")
      .addField("Guild: ", message.guild.id)
      .addField("Channel: ", message.channel.id)
      .addField("Error: ", error);

      return client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send(unknownErrorGuildEmbed);
  } else {
      const unknownErrorDmEmbed = new Discord.MessageEmbed()
      .setAuthor(`⋙ ColosseBOT || ${commandN} Error ⋘`, "", "https://colossebot.app")
      .setColor(colorDarkRed)
      .setDescription("An error occured while running command.")
      .addField("Author Name: ", message.author.username)
      .addField("Channel: ", message.author.id)
      .addField("Error: ", error);

      return client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send(unknownErrorDmEmbed);
  }
}

module.exports.noCommand = function(message, commandName) {
    message.delete();

    const noCommandEmbed = new Discord.MessageEmbed()
      .setAuthor("⋙ ColosseBOT || No Command ⋘", "", "https://colossebot.app")
      .setColor(colorDarkRed)
      .setDescription(`There is no command with name ${commandName}!\nCheck __**//help**__ for more information.`);

      return message.channel.send(noCommandEmbed).then(m => {
        setTimeout(() => {m.delete()}, 7000);
      });
};

module.exports.disabledCommand = function(message) {
    message.delete();

    const disabledCommandEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Disabled Command ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but this command is currently disabled!");

    return message.channel.send(disabledCommandEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.ownerCommand = function(message) {
    message.delete();

    const ownerOnlyEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Owner Command ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but this command is intended only for bot owner.");

    return message.channel.send(ownerOnlyEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.guildOnly = function(message) {
    message.delete();

    const guildOnlyEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Guild Only Command ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but I can't execute this command inside DMs!");

    return message.channel.send(guildOnlyEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.directOnly = function(message) {
    message.delete();

    const directOnlyEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || DM Only Command ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but I can't execute this command inside guilds!");

    return message.channel.send(directOnlyEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.noPerms = function(message) {
    message.delete();

    const noPermsEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Insufficent Permissions ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`I'm sorry, but you don't have required permissions, ${message.author.username}!\nPlease check __**//perms**__ for more information.`);

    return message.channel.send(noPermsEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.noArgsProvided = function(message, command) {
    message.delete();

    const noArgsProvidedEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || No Arguments ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`I'm sorry, but you didn't provide any arguments!\nThe proper usage would be:\n__**${command.usage}**__`);

    return message.channel.send(noArgsProvidedEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.notEnoughArgs = function(message, command) {
    message.delete();

    const notEnoughArgsEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Not Enough Arguments ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`I'm sorry, but you didn't provide enough arguments!\nThe proper usage would be:\n__**${command.usage}**__`);

    return message.channel.send(notEnoughArgsEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.cooldownActive = function(message, timeLeft) {
    message.delete();

    const cooldownActiveEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Command Cooldown ⋘", "", "https://colossebot.app")
    .setColor(colorLightBrown)
    .setDescription(`${message.author.username}, please wait ${timeLeft.toFixed(1)} seconds before reusing this command.\nThis message will disappear when the cooldown is over.`);

    return message.channel.send(cooldownActiveEmbed).then(m => {
      m.react("⌛");
      setTimeout(() => {m.delete()}, timeLeft * 1000);
    });
}

module.exports.banNoMember = function(message) {
    message.delete();

    const banNoMemberEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Member Not Found ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`I'm sorry, but I couldn't find the user!\nPlease try again, ${message.author.username}!`);

    return message.channel.send(banNoMemberEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.banHigherMember = function(client, message) {
    message.delete();

    const banHigherMemberEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Infraction Protect ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Don't try to ban members higher than you, ${message.author.username}!\nThis action was recorded to system!`);

    return message.channel.send(banHigherMemberEmbed).then(m => {
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

    return client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send(banInfractionEmbed);
}

module.exports.banImpossibleBot = function(message) {
    message.delete();

    const banImpossibleBotEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Ban Impossible ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Ban was not possible, that may have been because:\n• Insufficent Bot Permissions;\n• Bannable Member Is Higher In Role Hierarchy Than Bot;\n• Bannable Member Is Guild Owner or Administrator.");

    return message.channel.send(banImpossibleBotEmbed).then(m => {
      setTimeout(() => {m.delete()}, 13000);
    });
}

module.exports.banSuccess = function(message, banee, reason) {
    message.delete();

    const banSuccessEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Ban Successful ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`**${banee.user.tag} was banned from this guild!\nReason:** \`${reason}\``);

    return message.channel.send(banSuccessEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.banReport = function(client, message, banee, reason) {
    const banReportEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Ban Report ⋘", "", "https://colossebot.app")
    .setColor(colorBlack)
    .addField("Banned Member:", banee.user.tag)
    .addField("Banned Member ID:", banee.user.id)
    .addField("Moderator:", message.author.tag)
    .addField("Reason:", reason);

    return client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send(banReportEmbed);
}

module.exports.kickNoMember = function(message) {
    message.delete();

    const kickNoMemberEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Member Not Found ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`I'm sorry, but I couldn't find the user!\nPlease try again, ${message.author.username}!`);

    return message.channel.send(kickNoMemberEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.kickHigherMember = function(client, message) {
    message.delete();

    const kickHigherMemberEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Infraction Protect ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`Don't try to kick members higher than you, ${message.author.username}!\nThis action was recorded to system!`);

    return message.channel.send(kickHigherMemberEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.kickInfraction = function(client, message) {
    const kickInfractionEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Infraction Report ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Automatic server protection was trigered.")
    .addField("Trigered By:", message.author.tag)
    .addField("Reason:", "Tried to kick higher standing member.")
    .addField("Message:", message.content);

    return client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send(kickInfractionEmbed);
}

module.exports.kickImpossibleBot = function(message) {
    message.delete();

    const kickImpossibleBotEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Kick Impossible ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("Kick was not possible, that may have been because:\n• Insufficent Bot Permissions;\n• Kickable Member Is Higher In Role Hierarchy Than Bot;\n• Kickable Member Is Guild Owner or Administrator.");

    return message.channel.send(kickImpossibleBotEmbed).then(m => {
      setTimeout(() => {m.delete()}, 13000);
    });
}

module.exports.kickSuccess = function(message, kickee, reason) {
    message.delete();

    const kickSuccessEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Kick Successful ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`**${kickee.user.tag} was kicked from this guild!\nReason:** \`${reason}\``);

    return message.channel.send(kickSuccessEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.kickReport = function(client, message, kickee, reason) {
    const kickReportEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || kick Report ⋘", "", "https://colossebot.app")
    .setColor(colorBlack)
    .addField("Kicked Member:", kickee.user.tag)
    .addField("Kicked Member ID:", kickee.user.id)
    .addField("Moderator:", message.author.tag)
    .addField("Reason:", reason);

    return client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send(kickeeReportEmbed);
}

module.exports.falseChoice = function(message, usage) {
    message.delete();

    const falseChoiceEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Input Error ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`I'm sorry, but I couldn't understand your input.\nYour input should look like this:\n__**${usage}**__`);

    return message.channel.send(falseChoiceEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.regexOnly01 = function(message) {
    message.delete();

    const regexOnly01Embed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Input Error ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but I couldn't understand your input.\nThe input can only contain ones and zeros.");

    return message.channel.send(regexOnly01Embed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.incorrectBinary = function(message) {
    message.delete();

    const incorrectBinaryEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Input Error ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but the binary input is incorrect.\nBinary numbers are 8 digits long.");

    return message.channel.send(incorrectBinaryEmbed).then(m => {
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

    return message.channel.send(binaryAsciiEmbed);
}

module.exports.regexOnlyAllowedSymbols = function(message) {
    message.delete();

    const regexAllowedSymbolsEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Input Error ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but I couldn't understand your input.\nThe input can only contain letters, numbers and punctuation marks.");

    return message.channel.send(regexAllowedSymbolsEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.emojiSpeakTooLong = function(message) {
    message.delete();

    const emojiSpeakTooLongEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Input Too Long ⋘")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but the input cannot exceed 20 characters.");

    return message.channel.send(emojiSpeakTooLongEmbed).then(m => {
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

    return message.channel.send(asciiBinaryEmbed);
}

module.exports.notHexColor = function(message) {
    message.delete();

    const notHexColorEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Not HEX Color ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but I couldn't understand your input.\nI only understand colors in HEX format.");

    return message.channel.send(notHexColorEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.aCantBeZero = function(message) {
    message.delete();

    const aCantBeZeroEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || A ≠ 0 ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but coefficient \"A\" cannot be zero.");

    return message.channel.send(aCantBeZeroEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.inputOnlyNumbers = function(message) {
    message.delete();

    const inputOnlyNumbersEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Input Error ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but I couldn't understand your input.\nInput can only contain numbers.");

    return message.channel.send(inputOnlyNumbersEmbed).then(m => {
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

    return message.channel.send(emojiSpeakEmbed);
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

    return message.channel.send(flipTextEmbed);

}

module.exports.roleNoMember = function(message) {
    message.delete();

    const roleNoMemberEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Member Not Found ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`I'm sorry, but I couldn't find the user!\nPlease try again, ${message.author.username}!`);

    return message.channel.send(roleNoMemberEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.roleNotFound = function(message) {
    message.delete();

    const roleNotFoundEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Role Not Found ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`I'm sorry, but I couldn't find the role!\nPlease try again, ${message.author.username}!`);

    return message.channel.send(roleNotFoundEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.roleGiveImpossibleBot = function(message) {
    message.delete();

    const roleGiveImpossibleBotEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || GiveRole Impossible ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but giving role to this user isn't possible, that may be because:\n• Insufficent Bot Permissions;\n• Mentioned Member Is Higher In Role Hierarchy Than Bot;\n• Mentioned Role Is Higher In Role Hierarchy Than Bot.");

    return message.channel.send(roleGiveImpossibleBotEmbed).then(m => {
      setTimeout(() => {m.delete()}, 13000);
    });
}

module.exports.guessDiceWin = function(message, diceGuess, diceValue) {
    const guessDiceWinEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Guess Dice ⋘", "", "https://colossebot.app")
    .setColor(colorGreen)
    .setDescription(`You picked ${diceGuess} and I rolled ${diceValue}. You won!`);

    return message.channel.send(guessDiceWinEmbed);
}

module.exports.guessDiceLose = function(message, diceGuess, diceValue) {
    const guessDiceLoseEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Guess Dice ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`You picked ${diceGuess}, but I rolled ${diceValue}. You lost!`);

    return message.channel.send(guessDiceLoseEmbed);
}

module.exports.guessDice1to6 = function(message) {
    const guessDiceLoseEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Input Error ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but I couldn't understand your input.\nMin Dice Value: 1 / Max Dice Value: 6");

    return message.channel.send(guessDiceLoseEmbed);
}

module.exports.notHex = function(message) {
    message.delete();

    const notHexEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Not HEX ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but I couldn't decode this.\nThis is not a HEX string.");

    return message.channel.send(notHexEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
}

module.exports.noImage = function(message) {
    message.delete();

    const noImageEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || No Image ⋘", "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`I'm sorry, but I couldn't find a photo, please try again later!`)

    return message.channel.send(noImageEmbed).then(m => {
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

    return message.channel.send(unsplashImageEmbed);
}
