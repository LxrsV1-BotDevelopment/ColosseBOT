const Discord = require("discord.js");
const { colorYellow, colorOrange, colorRed, colorBlack, botWebsite } = require("../../config.js");

module.exports.warnUser = function(client, message) {
  const warnUserEmbed = new Discord.MessageEmbed()
  .setAuthor(`⋙ ${client.user.username} || AntiLang ⋘`, "", botWebsite)
  .setColor(colorYellow)
  .setDescription(`**${message.author.tag}** has been warned for bad language!`);

  message.channel.send(warnUserEmbed);
  message.delete();
};

module.exports.warnUserNF = function(client, guildData, message, activeWarns) {
  const warnUserNFEmbed = new Discord.MessageEmbed()
  .setAuthor(`⋙ ${client.user.username} || AntiLang ⋘`, "", botWebsite)
  .setColor(colorYellow)
  .setDescription(`**${message.author.tag}** has been warned for bad language!`)
  .setFooter(`This is warning ${activeWarns} out of 3 in ${guildData.activeHours} hours!`);

  message.channel.send(warnUserNFEmbed);
  message.delete();
};

module.exports.warnUserF = function(client, guildData, message) {
  if(guildData.antiLangLevel == 2) {
    var action = "mute";
  } else if(guildData.antiLangLevel == 3) {
    var action = "kick";
  } else {
    var action = "ban";
  }

  const warnUserFEmbed = new Discord.MessageEmbed()
  .setAuthor(`⋙ ${client.user.username} || AntiLang ⋘`, "", botWebsite)
  .setColor(colorYellow)
  .setDescription(`**${message.author.tag}** has been warned for bad language!`)
  .setFooter(`This is your final warning! Next infraction will ${action} you!`);

  message.channel.send(warnUserFEmbed);
  message.delete();
};

module.exports.muteUser = function(client, message) {
  const muteUserEmbed = new Discord.MessageEmbed()
  .setAuthor(`⋙ ${client.user.username} || AntiLang ⋘`, "", botWebsite)
  .setColor(colorOrange)
  .setDescription(`**${message.author.tag}** has been muted for bad language!`);

  message.channel.send(muteUserEmbed);
  message.delete();
};

module.exports.kickUser = function(client, message) {
  const kickUserEmbed = new Discord.MessageEmbed()
  .setAuthor(`⋙ ${client.user.username} || AntiLang ⋘`, "", botWebsite)
  .setColor(colorRed)
  .setDescription(`**${message.author.tag}** has been kicked for bad language!`);

  message.channel.send(kickUserEmbed);
  message.delete();
};

module.exports.banUser = function(client, message) {
  const banUserEmbed = new Discord.MessageEmbed()
  .setAuthor(`⋙ ${client.user.username} || AntiLang ⋘`, "", botWebsite)
  .setColor(colorBlack)
  .setDescription(`**${message.author.tag}** has been banned for bad language!`);

  message.channel.send(banUserEmbed);
  message.delete();
};
