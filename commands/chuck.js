const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
	name: 'chuck',
	aka: ['chuckjoke', 'chucknorris'],
	description: 'Sends a Chuck Norris joke.',
	usage: '//chuck',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
				fetch(`https://api.chucknorris.io/jokes/random`)
					.then(result => result.json()).then(body => {
							if(!body) return message.channel.send("Sorry, I couldn't get the joke. Try again later.");
							message.channel.send(body.value);
					}).catch(error => {
				console.log(error.stack);
				return message.channel.send("Sorry, I couldn't get the joke. Try again later.");
			});
  },
};
