const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'llama',
	description: 'Sends a random llama image.',
	usage: '//llama',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
    fetch("https://apis.duncte123.me/llama")
    .then(result => result.json()).then(body => {
      if(!body) return message.channel.send("Sorry, I couldn't get the image. Try again later.");

			const llamaEmbed = new Discord.MessageEmbed()
      .setTitle("Llama")
      .setColor(colorWhite)
      .setImage(body.data.file);

      return message.channel.send({embed: llamaEmbed});
    })
  },
};
