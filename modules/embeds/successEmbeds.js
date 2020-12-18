const Discord = require("discord.js");
const { colorGreen, eightBallThumbnail } = require("../etc/config.json");

module.exports.eightBall = function(message, question, reply) {
  const ballEmbed = new Discord.MessageEmbed()
  .setAuthor("⋙ ColosseBOT || 8Ball ⋘", "" ,"https://colossebot.app")
  .setColor(colorGreen)
  .addField("Question:", question)
  .addField("Answer:", reply)
  .setFooter("Provided by ColosseBOT", eightBallThumbnail);

  return message.channel.send(ballEmbed);
}
