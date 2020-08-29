const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
	name: 'ascii',
	aka: 'asciiart',
	description: 'Sends a ascii art for specified text.',
	usage: '//ascii <Text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
				const input = args.join(" ");
				if (input.length > 10) return message.channel.send("The input text cannot exceed 10 characters.");
				const text = encodeURI(input);

				fetch(`http://artii.herokuapp.com/make?text=${text}`)
					.then(result => result.text()).then(body => {
							if(!body) return message.channel.send("Sorry, I couldn't get the ascii art. Try again later.");

							message.channel.send(`\`\`\`${body}\`\`\``);
					}).catch(error => {
				console.log(error.stack);
				return message.channel.send("Sorry, I couldn't get the image. Try again later.");
			});
  },
};
