const Discord = require("discord.js");
const { guildID, modLogsChannel, botThumbnail, colorWhite } = require("../config.json");

module.exports = {
	name: 'purge',
	description: 'Purges specified amount of messages. (Min: 2, Max: 100)',
	usage: '//purge <2-100>',
	args: true,
	argsCount: 1,
	guildOnly: true,
	directOnly: false,
	roleCheck: true,
	allowedRoles: ["MANAGERS", "OWNERS"],
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const amount = args[0];
		if (amount < 2 || amount > 100) return message.channel.send("Min Messages: 2 / Max Messages: 100!");
		const reason = args.slice(1).join(" ");
		message.channel.bulkDelete(amount);

		const purgeEmbed = new Discord.MessageEmbed()
		.setTitle("ColosseBOT Mod-Logs")
		.setDescription("Channel purge report.")
		.setColor(colorWhite)
		.setThumbnail(botThumbnail)
		.addField("Messages Purged:", amount, true)
		.addField("Moderator:", message.author.username, true)
		.addField("Reason:", reason)
		.setFooter("ColosseBOT", botThumbnail);

		client.guilds.resolve(guildID).channels.resolve(modLogsChannel).send({embed: purgeEmbed});
	},
};
