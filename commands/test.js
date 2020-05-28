module.exports = {
	name: 'test',
	description: 'Ping!',
	usage: '//test <args1>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		message.channel.send(args[0]);
	},
};

//Template for command.
