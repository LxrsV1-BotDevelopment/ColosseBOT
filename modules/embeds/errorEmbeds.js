const Discord = require("discord.js");
const { colorDarkRed, colorGreen, colorYellow, colorLightBrown, devGuild, primaryLogs } = require("../etc/config.json");

module.exports.unknownError = function(client, message, commandName, error) {
    const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);
    console.log(error);

    const unknownErrorEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ${client.user.username} || ${commandN} Error ⋘`, "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("An unknown error occured while running command.\nDeveloper has been informed.\nI'm sorry for the inconvenience.");

    message.channel.send(unknownErrorEmbed).then(m => {
      m.delete({timeout: 7000});
    });

    if(message.channel.type == "text") {
      const unknownErrorGuildEmbed = new Discord.MessageEmbed()
      .setAuthor(`⋙ ${client.user.username} || ${commandN} Error ⋘`, "", "https://colossebot.app")
      .setColor(colorDarkRed)
      .setDescription("An error occured while running command.")
      .addField("Guild: ", message.guild.id)
      .addField("Channel: ", message.channel.id)
      .addField("Error: ", error);

      client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send(unknownErrorGuildEmbed);
      return message.delete();
  } else {
      const unknownErrorDmEmbed = new Discord.MessageEmbed()
      .setAuthor(`⋙ ${client.user.username} || ${commandN} Error ⋘`, "", "https://colossebot.app")
      .setColor(colorDarkRed)
      .setDescription("An error occured while running command.")
      .addField("Author Name: ", message.author.tag)
      .addField("Channel: ", message.author.id)
      .addField("Error: ", error);

      return client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send(unknownErrorDmEmbed);
  }
}

module.exports.noCommand = function(client, message, commandName) {
    if(message.channel.type == "text") message.delete();

    const noCommandEmbed = new Discord.MessageEmbed()
      .setAuthor(`⋙ ${client.user.username} || No Command ⋘`, "", "https://colossebot.app")
      .setColor(colorDarkRed)
      .setDescription(`There is no command with name ${commandName}!\nCheck __**//help**__ for more information.`);

      return message.channel.send(noCommandEmbed).then(m => {
        m.delete({timeout: 7000});
      });
};

module.exports.maintenanceActive = function(message) {
    if(message.channel.type == "text") message.delete();

    const maintenanceActiveEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ${client.user.username} || Maintenance ⋘`, "", "https://colossebot.app")
    .setColor(colorYellow)
    .setDescription("Bot is currently down for maintenance!\nNo requests/commands are accepted right now!\nPlease try again later, sorry for inconvenience.");

    return message.channel.send(maintenanceActiveEmbed).then(m => {
      m.delete({timeout: 7000});
    });
}

module.exports.disabledCommand = function(message) {
    if(message.channel.type == "text") message.delete();

    const disabledCommandEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ${client.user.username} || Disabled Command ⋘`, "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but this command is currently disabled!");

    return message.channel.send(disabledCommandEmbed).then(m => {
      m.delete({timeout: 7000});
    });
}

module.exports.ownerOnly = function(message) {
    if(message.channel.type == "text") message.delete();

    const ownerOnlyEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ${client.user.username} || Owner Command ⋘`, "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but this command is intended only for bot owner.");

    return message.channel.send(ownerOnlyEmbed).then(m => {
      m.delete({timeout: 7000});
    });
}


module.exports.guildOnly = function(message) {
    const guildOnlyEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ColosseBOT || Guild Only Command ⋘`, "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but I can't execute this command inside DMs!");

    return message.channel.send(guildOnlyEmbed).then(m => {
      m.delete({timeout: 7000});
    });
}

module.exports.directOnly = function(message) {
    if(message.channel.type == "text") message.delete();

    const directOnlyEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ${client.user.username} || DM Only Command ⋘`, "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but I can't execute this command inside guilds!");

    return message.channel.send(directOnlyEmbed).then(m => {
      m.delete({timeout: 7000});
    });
}

module.exports.guildOwnerOnly = function(message) {
    if(message.channel.type == "text") message.delete();

    const guildOwnerOnlyEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ColosseBOT || Owner Command ⋘`, "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription("I'm sorry, but this command is intended only for guild owner.");

    return message.channel.send(guildOwnerOnlyEmbed).then(m => {
      m.delete({timeout: 7000});
    });
}

module.exports.noPerms = function(message) {
    if(message.channel.type == "text") message.delete();

    const noPermsEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ${client.user.username} || Insufficent Permissions ⋘`, "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`I'm sorry, but you don't have required permissions, ${message.author.username}!\nPlease check __**//perms**__ for more information.`);

    return message.channel.send(noPermsEmbed).then(m => {
      m.delete({timeout: 7000});
    });
}

module.exports.noArgsProvided = function(message, command) {
    if(message.channel.type == "text") message.delete();

    const noArgsProvidedEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ${client.user.username} || No Arguments ⋘`, "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`I'm sorry, but you didn't provide any arguments!\nThe proper usage would be:\n__**${command.usage}**__`);

    return message.channel.send(noArgsProvidedEmbed).then(m => {
      m.delete({timeout: 7000});
    });
}

module.exports.notEnoughArgs = function(message, command) {
    if(message.channel.type == "text") message.delete();

    const notEnoughArgsEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ${client.user.username} || Not Enough Arguments ⋘`, "", "https://colossebot.app")
    .setColor(colorDarkRed)
    .setDescription(`I'm sorry, but you didn't provide enough arguments!\nThe proper usage would be:\n__**${command.usage}**__`);

    return message.channel.send(notEnoughArgsEmbed).then(m => {
      m.delete({timeout: 7000});
    });
}

module.exports.cooldownActive = function(message, timeLeft) {
    if(message.channel.type == "text") message.delete();

    const cooldownActiveEmbed = new Discord.MessageEmbed()
    .setAuthor(`⋙ ${client.user.username} || Command Cooldown ⋘`, "", "https://colossebot.app")
    .setColor(colorLightBrown)
    .setDescription(`${message.author.username}, please wait ${timeLeft.toFixed(1)} seconds before reusing this command.\nThis message will disappear when the cooldown is over.`);

    return message.channel.send(cooldownActiveEmbed).then(m => {
      m.react("⌛");
      m.delete({timeout: timeleft * 1000});
    });
}
