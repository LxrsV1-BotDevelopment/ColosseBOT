const Discord = require("discord.js");
const embeds = require("../modules/embeds.js");

module.exports = {
	name: 'ban',
	description: 'Bans specified user for specified reason.',
	usage: '//ban <@User> <Reason>',
	args: true,
	argsCount: 2,
	guildOnly: true,
	cooldown: 3,
	permsCheck: true,
	neededPerms: 'BAN_MEMBERS',
	execute(client, message, args) {
		const banee = message.mentions.members.first() || message.guild.member(args[0]);
		if (!banee) return embeds.banNoMember(message);
		const reason = args.slice(1).join(" ");

		if (banee.roles.highest.position > message.member.roles.highest.position) {
			embeds.banHigherMember(client, message);
			return embeds.banInfraction(client, message);
		}
		if (banee.roles.highest.position > message.guild.me.roles.highest.position || banee.bannable != true || banee.hasPermission('ADMINISTRATOR')) {
			return embeds.banImpossibleBot(message);
		} else {
			banee.ban({days: 7, reason: reason}).catch(error => {
				return embeds.unknownError(client, message, module.exports.name, error);
			});

			embeds.banSuccess(message, banee, reason);
			embeds.banReport(client, message, banee, reason);
		}
	},
};
