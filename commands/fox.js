const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'fox',
	description: 'Sends a random fox image.',
	usage: '//fox',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
    fetch("https://some-random-api.ml/img/fox")
    .then(result => result.json()).then(body => {
      if(!body) return message.channel.send("Sorry, I couldn't get the image. Try again later.");

			const foxEmbed = new Discord.MessageEmbed()
      .setTitle("Fox")
      .setColor(colorWhite)
      .setImage(body.link);

      return message.channel.send({embed: foxEmbed});
    })
  },
};
