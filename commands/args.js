const Discord = require('discord.js');
const { botThumbnail, colorWhite } = require("../config.json");

module.exports = {
	name: 'args',
	description: 'Displays info about the arguments for commands.',
	usage: '//args',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 10,
	disabled: false,
	execute(client, message, args) {
			let argsInfoEmbed = new Discord.MessageEmbed()
					.setTitle("ColosseBOT ArgsInfo")
					.setDescription("This will explain how to use arguments in commands.")
					.setColor(colorWhite)
					.setThumbnail(botThumbnail)
					.addField("**Mandatory Arguments:**", "_//commandName <args1> <args2>_")
					.addField("**Non-Mandatory Arguments:**", "_//commandName [args1] [args2]_")
					.setFooter("ColosseBOT", botThumbnail);

			message.channel.send({embed: argsInfoEmbed});
	},
};
