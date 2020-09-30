const fetch = require("node-fetch");

module.exports = {
	name: 'taylor',
	aka: ['taylorswift', 'taylorquote'],
	description: 'Sends a random Taylor Swift quote.',
	usage: '//taylor',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		fetch("https://api.taylor.rest/")
			.then(result => result.json()).then(body => {
				if(!body) return message.channel.send("Sorry, I couldn't get the quote. Try again later.");
				return message.channel.send(body.quote);
			}).catch(error => {
				console.log(error.stack);
				return message.channel.send("Sorry, I couldn't get the quote. Try again later.");
		});
  },
};
