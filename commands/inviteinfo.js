const Discord = require("discord.js");
const { colorGreen, colorDarkRed } = require("../config.json");

module.exports = {
	name: "inviteinfo",
	description: "Get info about invite code or URL.",
	usage: "//inviteinfo <Invite Code/URL>",
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		const inviteCode = args[0];
		client.fetchInvite(inviteCode)
			.then(invite => {
				var inviteGuild = invite.guild; if (inviteGuild == "undefined") inviteGuild = "Missing Info";
				var invitee = invite.inviter.username; if (invitee == "undefined") invitee = "Missing Info";
				var presenceCount = invite.presenceCount; memberCount = invite.memberCount;
				var activeAndJoinedCount = `${memberCount} members, ${presenceCount} currently online.`;
				if (presenceCount == "undefined" || memberCount == "undefined") activeAndJoinedCount = "Missing Info";

					const inviteInfoEmbed = new Discord.MessageEmbed()
					.setAuthor("⋙ ColosseBOT || Invite Info ⋘", "", "https://colossebot.app")
					.setColor(colorGreen)
					.addField("Invite Code:", invite.code)
					.addField("Guild/Server Name:", inviteGuild)
					.addField("Invited By:", invitee)
					.addField("Members:", activeAndJoinedCount);

					return message.channel.send(inviteInfoEmbed);

			}).catch(error => {
					const inviteInfoErrorEmbed = new Discord.MessageEmbed()
					.setAuthor("⋙ ColosseBOT || Invite Not Found ⋘", "", "https://colossebot.app")
					.setColor(colorDarkRed)
					.setDescription("Couldn't find guild from invite! Please try again!")

					return message.channel.send(inviteInfoErrorEmbed);
			});
	},
};
