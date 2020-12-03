const Discord = require("discord.js");
const helloBank = require("../wordbanks/hello.json");
const { colorGreen } = require("../config.json");

module.exports = {
	name: 'hello',
	description: 'Returns a greeting in random language.',
	usage: '//hello',
	execute(client, message, args) {
		const index = Math.floor(Math.random() * (helloBank.helloreplies.length));

		const helloEmbed = new Discord.MessageEmbed()
		.setAuthor("⋙ ColosseBOT || Hello ⋘", "", "https://colossebot.app")
		.setColor(colorGreen)
		.setDescription(helloBank.helloreplies[index]);

		return message.channel.send({embed: helloEmbed});
	},
};
