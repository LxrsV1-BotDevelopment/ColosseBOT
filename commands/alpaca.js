const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'alpaca',
	description: 'Sends a random alpaca image.',
	usage: '//alpaca',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
    fetch("https://apis.duncte123.me/alpaca")
    .then(result => result.json()).then(body => {
      if(!body) return message.channel.send("Sorry, I couldn't get the image. Try again later.");

			const alpacaEmbed = new Discord.MessageEmbed()
      .setTitle("Alpaca")
      .setColor(colorWhite)
      .setImage(body.data.file);

      return message.channel.send({embed: alpacaEmbed});
    })
  },
};
