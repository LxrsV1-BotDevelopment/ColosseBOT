const Discord = require("discord.js");
const { colorWhite, botThumbnail } = require("../config.json");

module.exports = {
	name: 'inviteinfo',
	description: 'Get info about invite code or URL.',
	usage: '//inviteinfo <Code/URL>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const inviteCode = args[0];
		var timestamp = "N/A"
		client.fetchInvite(inviteCode)
			.then(invite => {
				if(invite.createdAt != null) timestamp = invite.createdAt;
					const inviteInfoEmbed = new Discord.MessageEmbed()
					.setColor(colorWhite)
					.setTitle("Invite Info | Success")
					.setThumbnail(botThumbnail)
					.addField("Inviter", `\`\`\`${invite.inviter.username}\`\`\``, true)
					.addField("Guild", `\`\`\`${invite.guild}\`\`\``, true)
					.addField("Member Count", `\`\`\`${invite.presenceCount}/${invite.memberCount}\`\`\``)
					.addField("Time Created", `\`\`\`${timestamp}\`\`\``);

					message.channel.send({embed: inviteInfoEmbed});

			}).catch (error => {
					const inviteInfoErrorEmbed = new Discord.MessageEmbed()
					.setColor(colorWhite)
					.setTitle("Invite Info | Error")
					.setDescription("\`\`\`An error occurred while running the command.\`\`\`")
					.setThumbnail(botThumbnail)
					.addField("Error", "\`\`\`Couldn't get guild info from provided Code/URL\`\`\`")
					.setFooter("Error Code: 20");

					message.channel.send({embed: inviteInfoErrorEmbed});
			});
	},
};
