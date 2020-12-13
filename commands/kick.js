const Discord = require("discord.js");
const embeds = require("../modules/embeds.js");

module.exports = {
	name: 'kick',
	description: 'Kicks specified user for specified reason.',
	usage: '//kick <@user> <Reason>',
	args: true,
	argsCount: 2,
	guildOnly: true,
	permsCheck: true,
	neededPerms: "KICK_MEMBERS",
	execute(client, message, args) {
		const kickee = message.mentions.members.first() || message.guild.member(args[0]);
		if (!kickee) return embeds.kickNoMember(message);
		const reason = args.slice(1).join(" ");

		if (kickee.roles.highest.position > message.member.roles.highest.position) {
			embeds.kickHigherMember(client, message);
			return embeds.kickInfraction(client, message);
		}
		if (kickee.roles.highest.position > message.guild.me.roles.highest.position || kickee.kickable != true || kickee.hasPermission("ADMINISTRATOR")) {
			return embeds.kickImpossibleBot(message);
		} else {
			kickee.kick().catch(error => {
				return embeds.unknownError(client, message, module.exports.name, error);
			});

			embeds.kickSuccess(message, kickee, reason);
			embeds.kickReport(client, message, kickee, reason);
		}
	},
};
