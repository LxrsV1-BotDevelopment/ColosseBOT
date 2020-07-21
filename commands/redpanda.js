const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'redpanda',
	description: 'Sends a random red panda image.',
	usage: '//redpanda',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
    fetch("https://some-random-api.ml/img/red_panda")
    .then(result => result.json()).then(body => {
      if(!body) return message.channel.send("Sorry, I couldn't get the image. Try again later.");

			const redPandaEmbed = new Discord.MessageEmbed()
      .setTitle("Red Panda")
      .setColor(colorWhite)
      .setImage(body.link);

      return message.channel.send({embed: redPandaEmbed});
    })
  },
};
