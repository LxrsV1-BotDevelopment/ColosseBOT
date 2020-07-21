const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'cat',
	description: 'Sends a random cat image.',
	usage: '//cat',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		fetch("https://some-random-api.ml/img/cat")
        .then(result => result.json()).then(body => {
            if(!body) return message.channel.send("Sorry, I couldn't get the image. Try again later.");
            let catEmbed = new Discord.MessageEmbed()
						.setTitle("Cat")
            .setColor(colorWhite)
            .setImage(body.link)

            message.channel.send({embed: catEmbed});
        })
  },
};
