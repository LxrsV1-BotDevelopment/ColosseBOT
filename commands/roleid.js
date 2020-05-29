module.exports = {
	name: 'roleid',
	description: 'Returns ID of specified role!',
	usage: '//roleid <@role>',
	args: true,
	argsCount: 1,
	guildOnly: true,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const role = message.mentions.roles.first();
		if (!role) return message.channel.send(`Couldn't find role!\nPlease try again, ${message.author}!`);
		const id = role.id;

		message.channel.send(`ID of specified role is ${id}.`);
	},
};
