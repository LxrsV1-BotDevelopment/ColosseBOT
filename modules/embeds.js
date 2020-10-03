const Discord = require("discord.js");
const { colorWhite } = require("../config.json");

module.exports.testEmbed = function(message) {
    const testEmbed = new Discord.MessageEmbed()
      .setTitle("Test")
      .setColor(colorWhite)
      .setDescription("TEST TEST TEST TEST TEST TEST")
      .addField("Hi", "This is test")
      .setFooter(`Requested by ${message.author.username}`);

      message.channel.send({embed: testEmbed});
};
