const Discord = require("discord.js");
const { guildID, modLogsChannel, botThumbnail, colorWhite } = require("../config.json");

module.exports = {
	name: 'purge',
	description: 'Purges specified amount of messages. (Min: 2, Max: 100)',
	usage: '//purge <2-100> <Reason>',
	args: true,
	argsCount: 2,
	guildOnly: true,
	directOnly: false,
	roleCheck: true,
	allowedRoles: ["MANAGERS", "OWNERS"],
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		var embedTestVar = true;
		const amount = args[0];
		const amountCheck = /^\d+$/.test(amount);
		if (amount < 2 || amount > 100) return message.channel.send("Min Messages: 2 / Max Messages: 100!");
		if (amountCheck == false) return message.channel.send("Amount must be a number!");
		const reason = args.slice(1).join(" ");

		message.channel.bulkDelete(amount).catch(error => {
			if(error) {
				console.log(error.stack);
				message.channel.send("There was an error trying to execute that command!\nMost probably some of the messages are more than 14 days old.");
				return embedTestVar = false;
			}
		});
		const purgeEmbed = new Discord.MessageEmbed()
		.setTitle("ColosseBOT Mod-Logs")
		.setDescription("Channel purge report.")
		.setColor(colorWhite)
		.setThumbnail(botThumbnail)
		.addField("Messages Purged:", amount, true)
		.addField("Moderator:", message.author.username, true)
		.addField("Reason:", reason)
		.setFooter("ColosseBOT", botThumbnail);
		
		console.log(embedTestVar);
		//if(embedTestVar == true) return client.guilds.resolve(guildID).channels.resolve(modLogsChannel).send({embed: purgeEmbed});
	},
};
