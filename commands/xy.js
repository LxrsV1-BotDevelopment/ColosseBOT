const Discord = require("discord.js");
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'xy',
	aka: 'xyproblem',
	description: 'Returns website of about XY problem.',
	usage: '//xy',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const xyEmbed = new Discord.MessageEmbed()
		.setColor(colorWhite)
		.addField("Read about XY Problem", "http://www.xyproblem.info");

		return message.channel.send({embed: xyEmbed});
	},
};
