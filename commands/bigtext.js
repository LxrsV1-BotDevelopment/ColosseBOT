module.exports = {
	name: 'bigtext',
	description: 'Convert text to uppercase.',
	usage: '//bigtext <text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const newText = args.join(" ").toUpperCase();
		message.channel.send(newText);
	},
};
