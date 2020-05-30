const Discord = require("discord.js");
const { staffRoles, guildID, modLogsChannel, botThumbnail, colorWhite} = require("../config.json");

module.exports = {
	name: 'giverole',
	description: 'Gives role to specified user.',
	usage: '//giverole <RoleName>',
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
		if (!user) return message.channel.send(`Couldn't find user to give role!\nPlease try again, ${message.author}!`);

		const role = args.slice(1).join(" ");
		let roleFind = message.guild.roles.cache.find(r => r.name === role);
		if(!roleFind) return message.channel.send(`Couldn't find role like that!\nPlease try again, ${message.author}!`);

		user.roles.add(roleFind.id).then(() => {
			message.delete();
			message.channel.send(`${user.user.username} Has Been Given ${role} Role!`);

			let giveRoleReport = new Discord.MessageEmbed()
			.setTitle("ColosseBOT Mod-Logs")
			.setDescription("GiveRole report.")
			.setColor(colorWhite)
			.setThumbnail(botThumbnail)
			.addField("Role Assigned To: ", user.username, true)
			.addField("Moderator: ", message.author.username, true)
			.addField("Role: ", role)
			.setFooter("ColosseBOT", botThumbnail);
			client.guilds.resolve(guildID).channels.resolve(modLogsChannel).send({embed: giveRoleReport});
		});
	},
};
