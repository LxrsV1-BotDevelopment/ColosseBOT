module.exports = {
	name: 'userid',
	description: 'Returns ID of specified user!',
	usage: '//userid <@user>',
	args: true,
	argsCount: 1,
	guildOnly: true,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const member = message.mentions.members.first();
		if (!member) return message.channel.send(`Couldn't find user!\nPlease try again, ${message.author}!`);
		const id = member.id;

		message.channel.send(`ID of specified user is ${id}.`);
	},
};
