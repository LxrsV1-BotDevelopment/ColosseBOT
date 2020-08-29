module.exports = {
	name: 'google',
	description: 'Returns link to google search results about specified topic.',
	usage: '//google <searchTerm>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ");
		const searchTerm = encodeURI(input);

		return message.channel.send(`https://www.google.com/search?q=${searchTerm}`);
	},
};
