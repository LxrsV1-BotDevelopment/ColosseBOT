const Discord = require("discord.js");
const { staffRoles, guildID, infractionsChannel, modLogsChannel, botThumbnail, colorRed } = require("../config.json");

module.exports = {
	name: 'kick',
	description: 'Kicks specified user for specified reason.',
	usage: '//kick <@user> <Reason>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	roleCheck: true,
	allowedRoles: ["VERIFIED STAFF", "SENIOR STAFF", "MANAGERS", "OWNERS"],
	disabled: false,
	execute(client, message, args) {
		const kickee = message.mentions.members.first();
		if (!kickee) return message.channel.send(`Couldn't find user to kick!\nPlease try again, ${message.author}!`);

		if (kickee.roles.cache.some(role => staffRoles.includes(role.name))){
			message.channel.send(`Don't try to kick your comrades, ${message.author}!\nThis action was recorded to system!`).then(m => {
				setTimeout(() => {m.delete()}, 5 * 1000);
				setTimeout(() => {message.delete()}, 5 * 1000);
			});

			let infractionReport = new Discord.MessageEmbed()
			.setTitle("ColosseBOT Infraction Report")
			.setDescription("Automatic server protection was trigered.")
			.setColor(colorRed)
			.setThumbnail(botThumbnail)
			.addField("User: ", message.author.username)
			.addField("Reason: ", "Tried to kick a comrade.")
			.addField("Message: ", message.content)
			.setFooter("ColosseBOT", botThumbnail);
			client.guilds.resolve(guildID).channels.resolve(infractionsChannel).send({embed: infractionReport});
			return;
		}

		const reason = args.slice(1).join(" ");
		message.delete();

		let kickSuccessEmbed = new Discord.MessageEmbed()
		.setColor(colorRed)
		.setTitle(`${kickee.user.username} has been kicked for ${reason}.`);
		message.channel.send({embed: kickSuccessEmbed});

		let kickReport = new Discord.MessageEmbed()
		.setTitle("ColosseBOT Mod-Logs")
		.setDescription("Member kick report.")
		.setColor(colorRed)
		.setThumbnail(botThumbnail)
		.addField("Kicked Person: ", kickee.user.username, true)
		.addField("Moderator: ", message.author.username, true)
		.addField("Reason: ", reason)
		.setFooter("ColosseBOT", botThumbnail);
		client.guilds.resolve(guildID).channels.resolve(modLogsChannel).send({embed: kickReport});
		kickee.kick();
	},
};
