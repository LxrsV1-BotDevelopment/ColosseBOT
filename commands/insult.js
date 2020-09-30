const fetch = require("node-fetch");

module.exports = {
	name: 'insult',
	aka: 'evilinsult',
	description: 'Sends a random evil insult.',
	usage: '//insult',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json")
			.then(result => result.json()).then(body => {
				if(!body) return message.channel.send("Sorry, I couldn't get the insult. Try again later.");
				return message.channel.send(body.insult);
			}).catch(error => {
				console.log(error.stack);
				return message.channel.send("Sorry, I couldn't get the insult. Try again later.");
		});
  },
};
