const Discord = require("discord.js");
const { colorGreen, colorDarkRed } = require("../config.json");

module.exports = {
	name: "help",
	description: "Returns help about commands.",
	usage: "//help [Command Name]",
	args: true,
	argsCount: 0,
	execute(client, message, args) {
		const { commands } = message.client;
		if (!args.length) {
			var commandsToSend = [""]; i = 0;
			const commandsList = commands.map(command => `__**${command.name}**__ - ${command.description}`).join("\n");
			const commandsSplitted = commandsList.split("\n");

			commandsSplitted.forEach(command => {
				command += "\n";
				if (commandsToSend[i].length + command.length < 512) {
					commandsToSend[i] += command;
			} else {
					i++;
					commandsToSend[i] = command;
				}
			});

			let messageQueue = []; j = 1;
			commandsToSend.forEach(messageString => {
				const helpEmbed = new Discord.MessageEmbed()
				.setAuthor("⋙ ColosseBOT || Help ⋘", "" ,"https://colossebot.app")
				.setColor(colorGreen)
				.setDescription("Here's a list of all my commands!")
				.addField("Commands:", messageString)
				.setFooter(`[Page ${j}]`);

				messageQueue.push(message.channel.send(helpEmbed));
				j++;
			});

			return Promise.all(messageQueue);
		} else {
			const commandName = args[0].toLowerCase();
			const command = commands.get(commandName) || commands.find(cmd => cmd.aka && cmd.aka.includes(commandName));
			if (!command) {
				message.delete();

				const noCommandEmbed = new Discord.MessageEmbed()
					.setAuthor("⋙ ColosseBOT || No Command ⋘", "", "https://colossebot.app")
					.setColor(colorDarkRed)
					.setDescription(`Sorry, but there is no command with name ${commandName}.`);

					return message.channel.send({embed: noCommandEmbed}).then(m => {
						setTimeout(() => {m.delete()}, 7000);
					});
			}
			const commandN = commandName.charAt(0).toUpperCase() + commandName.slice(1);

			const commandHelpEmbed = new Discord.MessageEmbed()
			.setAuthor(`⋙ ColosseBOT || ${commandN} Help ⋘`, "", "https://colossebot.app")
			.setColor(colorGreen)
			.setDescription(`Command Name: ${commandN}\nDescription: ${command.description}\nUsage: __**${command.usage}**__`);

			return message.channel.send(commandHelpEmbed);
		}
	},
};
