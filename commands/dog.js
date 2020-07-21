const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'dog',
	description: 'Sends a random dog image.',
	usage: '//dog',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(result => result.json()).then(body => {
      if(!body) return message.channel.send("Sorry, I couldn't get the image. Try again later.");
      const dogEmbed = new Discord.MessageEmbed()
      .setTitle("Dog")
      .setColor(colorWhite)
      .setImage(body.message);

      return message.channel.send({embed: dogEmbed});
    })
  },
};
