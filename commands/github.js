const Discord = require("discord.js");
const { colorGreen, botThumbnail } = require("../config.json");

module.exports = {
	name: 'github',
	description: 'Gives link to github repository',
	usage: '//github',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const githubEmbed = new Discord.MessageEmbed()
		.setTitle("ColosseBOT GitHub Repository Link")
		.setDescription("Link to Colosse PE Bot Github Repository:\n\nhttps://github.com/EEHoveckis/ColosseBOT\n\n===========================\nCopyright © 2020 EEHoveckis#2408\nMIT License")
		.setColor(colorGreen)
		.setThumbnail(botThumbnail)

		message.channel.send({embed: githubEmbed});
	},
};
