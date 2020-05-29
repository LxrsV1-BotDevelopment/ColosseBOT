const Discord = require("discord.js");
const { staffRoles, guildID, infractionsChannel, modLogsChannel, botThumbnail, colorWhite, colorOrange } = require("../config.json");

module.exports = {
	name: 'unmute',
	description: 'Unmutes specified user!',
	usage: '//unmute <@user>',
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
		if (!mutee) return message.channel.send(`Couldn't find user to unmute!\nPlease try again, ${message.author}!`);
		if (!mutee.roles.cache.some(role => ["MUTED"].includes(role.name))) return message.channel.send(`Specified user is not muted!\nPlease try again, ${message.author}!`);
		const reason = args.slice(1).join(" ");
		message.delete();

		let unmuteSuccessEmbed = new Discord.MessageEmbed()
		.setColor(colorWhite)
		.setTitle(`${mutee.user.username} has been unmuted.`);
		message.channel.send({embed: unmuteSuccessEmbed});

		let unmuteReport = new Discord.MessageEmbed()
		.setTitle("ColosseBOT Mod-Logs")
		.setDescription("Member unmute report.")
		.setColor(colorOrange)
		.setThumbnail(botThumbnail)
		.addField("Unmuted Person: ", mutee.user.username, true)
		.addField("Moderator: ", message.author.username, true)
		.addField("Reason: ", reason)
		.setFooter("ColosseBOT", botThumbnail);
		client.guilds.resolve(guildID).channels.resolve(modLogsChannel).send({embed: unmuteReport});

		mutee.roles.remove(muterole.id);
	},
};
