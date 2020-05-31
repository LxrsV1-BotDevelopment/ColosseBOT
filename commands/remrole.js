const Discord = require("discord.js");
const { staffRoles, guildID, modLogsChannel, botThumbnail, colorWhite} = require("../config.json");

module.exports = {
	name: 'remrole',
	description: 'Removes role from specified user.',
	usage: '//remrole <@user> <RoleName>',
	args: true,
	argsCount: 1,
	guildOnly: true,
	directOnly: false,
	cooldown: 3,
	roleCheck: true,
	allowedRoles: ["MANAGERS", "OWNERS"],
	disabled: false,
	execute(client, message, args) {
		const user = message.mentions.members.first();
		if (!user) return message.channel.send(`Couldn't find user to remove role!\nPlease try again, ${message.author}!`);

		const role = args.slice(1).join(" ");
		let roleFind = message.guild.roles.cache.find(r => r.name === role);
		if(!roleFind) return message.channel.send(`Couldn't find role like that!\nPlease try again, ${message.author}!`);

		user.roles.remove(roleFind.id).then(() => {
			message.delete();
			message.channel.send(`${role} Role Has Been Removed From ${user.user.username}!`);

			let remRoleReport = new Discord.MessageEmbed()
			.setTitle("ColosseBOT Mod-Logs")
			.setDescription("RemRole report.")
			.setColor(colorWhite)
			.setThumbnail(botThumbnail)
			.addField("Role Removed From: ", user.user.username, true)
			.addField("Moderator: ", message.author.username, true)
			.addField("Role: ", role)
			.setFooter("ColosseBOT", botThumbnail);
			client.guilds.resolve(guildID).channels.resolve(modLogsChannel).send({embed: remRoleReport});
		});
	},
};
