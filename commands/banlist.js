const Discord = require("discord.js");
const { colorBlack, colorDarkRed, botThumbnail } = require("../config.json");

module.exports = {
	name: 'banlist',
	description: 'Get list of banned users.',
	usage: '//banlist',
	guildOnly: true,
	permsCheck: true,
	neededPerms: "MANAGE_MEMBERS",
	execute(client, message, args) {
		message.guild.fetchBans().then(bans => {
			if(bans.size < 1) {
				 const noBansEmbed = new Discord.MessageEmbed()
				 .setTitle("⋙ ColosseBOT || No Bans ⋘")
				 .setURL("https://colossebot.app")
				 .setColor(colorDarkRed)
				 .setDescription("There are no banned users in this guild!")
				 .setFooter("Error Code: 15", botThumbnail)
				 .setTimestamp();

				return message.channel.send({embed: noBansEmbed});
			} else {
					const bansArray = bans.array();
					let bansList = `${bans.size} users are banned in this guild:\n`;

					for (i = 0; i < bans.size; i++) {
						bansList += `${bansArray[i].user.tag} - ${bansArray[i].user.id}\n`
					}

					const bansListEmbed = new Discord.MessageEmbed()
					.setTitle("⋙ ColosseBOT || Bans List ⋘")
					.setURL("https://colossebot.app")
					.setColor(colorBlack)
					.setDescription(bansList)
					.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
					.setTimestamp();

					message.channel.send({embed: bansListEmbed});
					}
			});
	},
};
