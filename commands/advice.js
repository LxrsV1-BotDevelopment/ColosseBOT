const fetch = require("node-fetch");

module.exports = {
	name: 'advice',
	aka: 'adviceslip',
	description: 'Sends a random advice slip.',
	usage: '//advice',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		fetch("https://api.adviceslip.com/advice")
			.then(result => result.json()).then(body => {
				if(!body) return message.channel.send("Sorry, I couldn't get the advice. Try again later.");
				return message.channel.send(body.slip.advice);
			}).catch(error => {
				console.log(error.stack);
				return message.channel.send("Sorry, I couldn't get the advice. Try again later.");
		});
  },
};
