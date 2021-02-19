const Discord = require("discord.js");
const { colorGreen, eightBallThumbnail, botWebsite } = require("../files/config.js");

module.exports.eightBall = function(client, message, question, reply) {
  const ballEmbed = new Discord.MessageEmbed()
  .setAuthor(`⋙ ${client.user.username} || 8Ball ⋘`, "", botWebsite)
  .setColor(colorGreen)
  .addField("Question:", question)
  .addField("Answer:", reply)
  .setFooter("Provided by ColosseBOT", eightBallThumbnail);

  return message.channel.send(ballEmbed);
};
