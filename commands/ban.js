const Discord = require("discord.js");
const { staffRoles, guildID, infractionsChannel, modLogsChannel, botThumbnail, colorRed } = require("../config.json");

module.exports = {
	name: 'ban',
	description: 'Bans specified user for specified reason.',
	usage: '//ban <@user> <Reason>',
	args: true,
	argsCount: 2,
	guildOnly: true,
	directOnly: false,
	cooldown: 3,
	roleCheck: true,
	allowedRoles: ["VERIFIED STAFF", "SENIOR STAFF", "MANAGERS", "OWNERS"],
	disabled: false,
	execute(client, message, args) {
		const banee = message.mentions.members.first();
		if (!banee) return message.channel.send(`Couldn't find user to ban!\nPlease try again, ${message.author}!`);

		if (banee.roles.cache.some(role => staffRoles.includes(role.name))){
			message.channel.send(`Don't try to ban your comrades, ${message.author}!\nThis action was recorded to system!`).then(m => {
				setTimeout(() => {m.delete()}, 5 * 1000);
				setTimeout(() => {message.delete()}, 5 * 1000);
			});

			let infractionReport = new Discord.MessageEmbed()
			.setTitle("ColosseBOT Infraction Report")
			.setDescription("Automatic server protection was trigered.")
			.setColor(colorRed)
			.setThumbnail(botThumbnail)
			.addField("User: ", message.author.username)
			.addField("Reason: ", "Tried to ban a comrade.")
			.addField("Message: ", message.content)
			.setFooter("ColosseBOT", botThumbnail);
			client.guilds.resolve(guildID).channels.resolve(infractionsChannel).send({embed: infractionReport});
			return;
		}

		const reason = args.slice(1).join(" ");
		message.delete();

		let banSuccessEmbed = new Discord.MessageEmbed()
		.setColor(colorRed)
		.setTitle(`${banee.user.username} has been banned for ${reason}.`);
		message.channel.send({embed: banSuccessEmbed});

		let banReport = new Discord.MessageEmbed()
		.setTitle("ColosseBOT Mod-Logs")
		.setDescription("Member ban report.")
		.setColor(colorRed)
		.setThumbnail(botThumbnail)
		.addField("Banned Person: ", banee.user.username, true)
		.addField("Moderator: ", message.author.username, true)
		.addField("Reason: ", reason)
		.setFooter("ColosseBOT", botThumbnail);
		client.guilds.resolve(guildID).channels.resolve(modLogsChannel).send({embed: banReport});
		banee.ban();
	},
};
