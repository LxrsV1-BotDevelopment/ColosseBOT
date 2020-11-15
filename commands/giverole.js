const Discord = require("discord.js");
const { devGuild, primaryLogs, colorGreen } = require("../config.json");
const embeds = require("../modules/embeds.js");

module.exports = {
	name: "giverole",
	description: "Gives role to specified user.",
	usage: "//giverole <@user> <RoleName>",
	args: true,
	argsCount: 1,
	guildOnly: true,
	permsCheck: true,
	neededPerms: ["MANAGE_GUILD"],
	execute(client, message, args) {
		const user = message.mentions.members.first() || message.guild.member(args[0]);
		if (!user) return embeds.roleNoMember(message);

		let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name === args.slice(1).join(" "));
		if(!role) return embeds.roleNotFound(message);

		if (user.roles.highest.position > message.guild.me.roles.highest.position || role.position > message.guild.me.roles.highest.position) {
			return embeds.roleGiveImpossibleBot(message);
		}

		user.roles.add(role.id).then(() => {
			const giveRoleSuccessEmbed = new Discord.MessageEmbed()
	    .setAuthor("⋙ ColosseBOT || GiveRole Successful ⋘", "", "https://colossebot.app")
	    .setColor(colorGreen)
	    .setDescription(`**${user.user.tag} Has Been Given ${role.name} Role!**`);

	    message.channel.send({embed: giveRoleSuccessEmbed}).then(m => {
	      setTimeout(() => {m.delete()}, 7000);
	    });

			const giveRoleReport = new Discord.MessageEmbed()
			.setAuthor("⋙ ColosseBOT || GiveRole Report ⋘", "", "https://colossebot.app")
			.setColor(colorGreen)
			.addField("Role Assigned To:", user.user.tag)
			.addField("Moderator:", message.author.tag)
			.addField("Role:", role.name);

			client.guilds.resolve(devGuild).channels.resolve(primaryLogs).send({embed: giveRoleReport});
			message.delete();
		}).catch(error => {
				return embeds.unknownError(client, message, module.exports.name, error);
		});
	},
};
