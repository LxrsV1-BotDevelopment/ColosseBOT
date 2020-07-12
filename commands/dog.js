const discord = require("discord.js");
const { get } = require("snekfetch");

module.exports = {
	name: 'dog',
	description: 'Sends a random dog image.',
	usage: '//dog',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
    try {
			get('https://random.dog/woof').then(result => {
				const link = decodeURIComponent(result.body);
				return message.channel.send({files: [{attachment: `https://random.dog/${link}`, name: `dog.${link.split('.')[1]}`}]});
			});
		} catch(err) {
			return console.log(err.stack);
		  }  
    }
  }
