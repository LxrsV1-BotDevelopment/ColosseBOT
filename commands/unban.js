const Discord = require("discord.js");
const { guildID, modLogsChannel, botThumbnail, colorLightRed } = require("../config.json");

module.exports = {
	name: 'unban',
	description: 'Unbans specified user for specified reason.',
	usage: '//unban <@user> <Reason>',
	args: true,
	argsCount: 2,
	guildOnly: true,
	directOnly: false,
	roleCheck: true,
	allowedRoles: ["SENIOR STAFF", "MANAGERS", "OWNERS"],
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const userID = args[0];
		const reason = args.slice(1).join(" ");

		message.guild.members.unban(userID)
			.then(user =>
				let unbanReport = new Discord.MessageEmbed()
				.setTitle("ColosseBOT Mod-Logs")
				.setDescription("Member unban report.")
				.setColor(colorLightRed)
				.setThumbnail(botThumbnail)
				.addField("Unbanned Person: ", user.username, true)
				.addField("Moderator: ", message.author.username, true)
				.addField("Reason: ", reason)
				.setFooter("ColosseBOT", botThumbnail)
				client.guilds.resolve(guildID).channels.resolve(modLogsChannel).send({embed: unbanReport})
			);
	},
};
