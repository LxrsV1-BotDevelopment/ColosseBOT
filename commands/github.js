const Discord = require("discord.js");
const { colorGreen, botThumbnail } = require("../config.json");

module.exports = {
	name: 'github',
	description: 'Gives link to github repository',
	usage: '//github',
	execute(client, message, args) {
		const githubEmbed = new Discord.MessageEmbed()
		.setTitle("⋙ ColosseBOT || Github ⋘")
		.setURL("https://colossebot.app")
		.setColor(colorGreen)
		.setDescription("Link to ColosseBOT Github Repository:\nhttps://github.com/EEHoveckis/ColosseBOT");

		return message.channel.send({embed: githubEmbed});
	},
};
