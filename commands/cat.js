const discord = require("discord.js");
const { get } = require("snekfetch");

module.exports = {
	name: 'cat',
	description: 'Sends a random cat image.',
	usage: '//cat',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
    try {
			get('https://aws.random.cat/meow').then(result => {
				return message.channel.send({files: [{attachment: result.body.file, name: `cat.${result.body.file.split('.')[2]}`}]});
			});
		} catch(err) {
			return console.log(err.stack);
		  }  
    }
  }
