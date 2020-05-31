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
		const bannedusers = message.guild.fetchBans();
		if (bannedusers.length < 1) return message.channel.send(`There are no banned users in the guild.`);
	},
};

//Template for command.
