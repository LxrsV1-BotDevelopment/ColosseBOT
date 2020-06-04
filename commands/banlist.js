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
          bans.forEach(user => {
            message.channel.send(user.tag + " " + user.id);
          })
      })
	},
};
