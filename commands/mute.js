const Discord = require("discord.js");
const { staffRoles, guildID, infractionsChannel, modLogsChannel, botThumbnail, colorRed, colorOrange } = require("../config.json");

module.exports = {
	name: 'mute',
	description: 'Mutes specified user till unmuted!',
	usage: '//mute <@user> <Reason>',
	args: true,
	argsCount: 2,
	guildOnly: true,
	directOnly: false,
	cooldown: 3,
	roleCheck: true,
	allowedRoles: ["VERIFIED STAFF", "SENIOR STAFF", "MANAGERS", "OWNERS"],
	disabled: false,
	execute(client, message, args) {
		let muterole = message.guild.roles.cache.find(r => r.name === "MUTED");
		const mutee = message.mentions.members.first();
		if (!mutee) return message.channel.send(`Couldn't find user to mute!\nPlease try again, ${message.author}!`);

		if (mutee.roles.cache.some(role => staffRoles.includes(role.name))){
			message.channel.send(`Don't try to mute your comrades, ${message.author}!\nThis action was recorded to system!`).then(m => {
				setTimeout(() => {m.delete()}, 5 * 1000);
				setTimeout(() => {message.delete()}, 5 * 1000);
			});

			let infractionReport = new Discord.MessageEmbed()
			.setTitle("ColosseBOT Infraction Report")
			.setDescription("Automatic server protection was trigered.")
			.setColor(colorRed)
			.setThumbnail(botThumbnail)
			.addField("User: ", message.author.username)
			.addField("Reason: ", "Tried to mute a comrade.")
			.addField("Message: ", message.content)
			.setFooter("ColosseBOT", botThumbnail);
			client.guilds.resolve(guildID).channels.resolve(infractionsChannel).send({embed: infractionReport});
			return;
		}

		const reason = args.slice(1).join(" ");
		message.delete();

		let muteSuccessEmbed = new Discord.MessageEmbed()
		.setColor(colorOrange)
		.setTitle(`${mutee.user.username} has been muted for ${reason}.`);
		message.channel.send({embed: muteSuccessEmbed});

		let muteReport = new Discord.MessageEmbed()
		.setTitle("ColosseBOT Mod-Logs")
		.setDescription("Member mute report.")
		.setColor(colorOrange)
		.setThumbnail(botThumbnail)
		.addField("Banned Person: ", mutee.user.username, true)
		.addField("Moderator: ", message.author.username, true)
		.addField("Reason: ", reason)
		.setFooter("ColosseBOT", botThumbnail);
		client.guilds.resolve(guildID).channels.resolve(modLogsChannel).send({embed: muteReport});

		mutee.roles.add(muterole.id);
	},
};
