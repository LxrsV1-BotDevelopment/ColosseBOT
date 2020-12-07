const Discord = require("discord.js");
const { colorDarkRed, colorGreen } = require("../config.json");

module.exports = {
	name: "banlist",
	description: "Get list of banned users.",
	usage: "//banlist",
	guildOnly: true,
	permsCheck: true,
	neededPerms: "MANAGE_GUILD",
	execute(client, message, args) {
		message.guild.fetchBans().then(bans => {
			if (bans.size < 1) {
				 message.delete();
				 const noBansEmbed = new Discord.MessageEmbed()
				 .setAuthor("⋙ ColosseBOT || No Bans ⋘", "", "https://colossebot.app")
				 .setColor(colorDarkRed)
				 .setDescription("I'm sorry, but there are no banned users in this guild!");

				return message.channel.send(noBansEmbed).then(m => {
		      setTimeout(() => {m.delete()}, 7000);
		    });
			} else {
					var bansToSend = [""]; i = 0;
					const bansArray = bans.array();
					const bansList = bansArray.map(ban => `${ban.user.tag} - ${ban.user.id}`).join("\n");
					const bansSplitted = bansList.split("\n");

					bansSplitted.forEach(banInfo => {
						banInfo += "\n";
						if (bansToSend[i].length + banInfo.length < 1024) {
							bansToSend[i] += banInfo;
						} else {
							i++;
							bansToSend[i] = banInfo;
						}
					});

					let messageQueue = []; j = 1;
					bansToSend.forEach(messageString => {
						const bansListEmbed = new Discord.MessageEmbed()
						.setAuthor("⋙ ColosseBOT || Bans List ⋘", "", "https://colossebot.app")
						.setColor(colorGreen)
						.setDescription(`${bans.size} users are banned in this guild!`)
						.addField("Bans:", messageString)
						.setFooter(`[Page ${j}]`);

						messageQueue.push(message.channel.send(bansListEmbed));
						j++;
					});
					return Promise.all(messageQueue);
		  	}
		});
	},
};
