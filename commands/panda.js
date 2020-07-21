const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'panda',
	description: 'Sends a random panda image.',
	usage: '//panda',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
    fetch("https://some-random-api.ml/img/panda")
    .then(result => result.json()).then(body => {
      if(!body) return message.channel.send("Sorry, I couldn't get the image. Try again later.");

			const pandaEmbed = new Discord.MessageEmbed()
      .setTitle("Panda")
      .setColor(colorWhite)
      .setImage(body.link);

      return message.channel.send({embed: pandaEmbed});
    })
  },
};
