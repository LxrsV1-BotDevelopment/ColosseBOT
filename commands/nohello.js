const Discord = require("discord.js");
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'nohello',
	description: 'Returns link to nohello.com site.',
	usage: '//nohello',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const nohelloEmbed = new Discord.MessageEmbed()
		.setColor(colorWhite)
		.addField("Read about NoHello", "https://www.nohello.com");

		return message.channel.send({embed: nohelloEmbed});
	},
};
