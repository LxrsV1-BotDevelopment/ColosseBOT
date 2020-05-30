module.exports = {
	name: 'test2',
	description: 'Ping!',
	usage: '//test2 <args1>',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const chan = message.guild.systemChannel;
		console.log(chan);
	},
};

//Template for command.
