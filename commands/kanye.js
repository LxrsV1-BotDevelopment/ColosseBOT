const fetch = require("node-fetch");

module.exports = {
	name: 'kanye',
	aka: ['kanyewest', 'kanyequote'],
	description: 'Sends a random Kanye West quote.',
	usage: '//kanye',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		fetch("https://api.kanye.rest/")
			.then(result => result.json()).then(body => {
				if(!body) return message.channel.send("Sorry, I couldn't get the quote. Try again later.");
				return message.channel.send(body.quote);
			}).catch(error => {
				console.log(error.stack);
				return message.channel.send("Sorry, I couldn't get the quote. Try again later.");
		});
  },
};
