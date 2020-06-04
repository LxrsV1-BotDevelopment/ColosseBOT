const Discord = require("discord.js");
const { colorBlack } = require("../config.json");

module.exports = {
	name: 'banlist',
	description: 'Get list of banned users.',
	usage: '//banlist',
	args: false,
	argsCount: 0,
	guildOnly: true,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		message.guild.fetchBans().then(bans => {
			if(bans.size < 1) {
				const noBansEmbed = new Discord.MessageEmbed()
				.setColor(colorBlack)
				.setTitle("There are no banned users in the guild!")
				return message.channel.send({embed: noBansEmbed});
			} else {
				message.channel.send("=====Banned Users List=====");
				message.channel.send(`${bans.size} users are banned:`);
				const bansArray = bans.array();
				for (var i = 0; i < bansArray.length; i++) {
					message.channel.send(`${bansArray[i].user.username} - ${bansArray[i].user.id}`);
				}
			}
		});
	},
};
