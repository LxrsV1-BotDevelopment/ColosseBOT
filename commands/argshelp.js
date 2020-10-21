const Discord = require('discord.js');
const { colorGreen } = require("../config.json");

module.exports = {
	name: 'argshelp',
	description: 'Displays info about the arguments for commands.',
	usage: '//argshelp',
	execute(client, message, args) {
			const argsInfoEmbed = new Discord.MessageEmbed()
					.setTitle("ColosseBOT ⋙ argsHelp")
					.setURL("https://colossebot.app")
					.setColor(colorGreen)
					.setDescription("This will explain how to use arguments in commands.")
					.addField("Mandatory Arguments:", "Mandatory arguments are required to run the command.\nThese will always be marked with angle brackets.\nExample of command:\n\`//test <Argument1> <Argument2>\`")
					.addField("Non-Mandatory Arguments:", "Mandatory arguments are not required to run the command,\nso you can even leave them out, if you wish.\nThese will always be marked with square brackets.\nExample of command:\n\`//test [Argument1] [Argument2]\`");

			return message.channel.send({embed: argsInfoEmbed});
	},
};