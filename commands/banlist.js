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
		message.channel.send("=====Banned Users List=====");
		message.guild.fetchBans().then(banned => {
			if(banned.size < 1) {
				const noBansEmbed = new Discord.MessageEmbed()
				.setColor(colorBlack)
				.setTitle("There are no banned users in the guild.")
				return message.channel.send({embed: noBansEmbed});
			} else {
				let list = banned.map(user => user.tag).join('\n');
				if (list.length > 1950) list = `${list.slice(0, 1948)}...`;

				message.channel.send(`**${banned.size} users are banned:**\n${list}`);
			}
		});
	},
};
