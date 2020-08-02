const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
	name: 'pi',
	description: 'Returns specified number of pi.',
	usage: '//pi <Number>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const userNumber = parseInt(args[0], 10);
		if(userNumber > 50000000000000 || userNumber < 0) return message.channel.send("Min Number: 0 / Max Number 50000000000000");
		const link = `https://api.pi.delivery/v1/pi?start=${userNumber}&numberOfDigits=1`;

		fetch(link)
		.then(result => result.json()).then(body => {
			if(!body) return message.channel.send("Sorry I couldn't get the number. Try again later.");

			if(userNumber.endsWith("1")) var suffix = "st";
			if(userNumber.endsWith("2")) var suffix = "nd";
			if(userNumber.endsWith("3")) var suffix = "rd";
			if(userNumber.endsWith("4") || userNumber.endsWith("5") || userNumber.endsWith("6") || userNumber.endsWith("7") || userNumber.endsWith("8") || userNumber.endsWith("9") || userNumber.endsWith("0") || userNumber.endsWith("11") || userNumber.endsWith("12") || userNumber.endsWith("13")) var suffix = "th";

			message.channel.send(`The ${userNumber}${suffix} number of PI is ${body.content}`);
		})
	},
};
