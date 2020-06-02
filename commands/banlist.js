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
		message.guild.fetchBans().then(bans => {
			if(bans.size < 1) {
				return message.channel.send(`There are no banned users in the guild.`);
			} else {
				bans.forEach(user => {
					message.channel.send(user.tag + " " + user.id);
				});
			}
		});
	},
};
