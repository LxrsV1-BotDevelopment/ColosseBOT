module.exports = {
	name: 'smalltext',
	description: 'Convert text to lowercase.',
	usage: '//smalltext <text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const newText = args.join(" ").toLowerCase();
		message.channel.send(newText);
	},
};
