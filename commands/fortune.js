const fetch = require("node-fetch");

module.exports = {
	name: 'fortune',
	aka: 'fortunecookie',
	description: 'Returns fortune from fortune cookie.',
	usage: '//fortune',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const number = Math.floor(Math.random() * 544);

		fetch(`http://fortunecookieapi.herokuapp.com/v1/fortunes?skip=${number}&limit=1`)
		.then(result => result.json()).then(body => {
			if(!body) return message.channel.send("Sorry I couldn't get the fortune. Try again later.");

			return message.channel.send(body[0].message);
		}).catch(error => {
			console.log(error.stack);
			return message.channel.send("Sorry, I couldn't get the fortune. Try again later.");
		});
	},
};
