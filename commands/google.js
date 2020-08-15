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
		const searchTerm = args.join(" ").replace(/\u0020/g, "+");

		return message.channel.send(`https://www.google.com/search?q=${searchTerm}`);
	},
};
