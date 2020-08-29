const Discord = require("discord.js");
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'tryandsee',
	description: 'Returns link to tryandsee.com site.',
	usage: '//tryandsee',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const tryandseeEmbed = new Discord.MessageEmbed()
		.setColor(colorWhite)
		.addField("Try it and see!", "https://tryitands.ee/")

		return message.channel.send({embed: tryandseeEmbed});
	},
};
