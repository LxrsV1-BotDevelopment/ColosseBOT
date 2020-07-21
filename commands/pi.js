const Discord = require("discord.js");
const fs = require("fs");
const piBank = JSON.parse(fs.readFileSync("./wordbanks/pi.json", "utf8"));

module.exports = {
	name: 'pi',
	description: 'Returns specified number of pi.',
	usage: '//pi <number>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const piNumber = piBank.piNumber;
		const userNumber = args[0];
		if(userNumber > 1000000 || userNumber < 1) return message.channel.send("Min Number: 1 / Max Number 1000000");

		if(userNumber.endsWith("1")) var suffix = "st";
		if(userNumber.endsWith("2")) var suffix = "nd";
		if(userNumber.endsWith("3")) var suffix = "rd";
		if(userNumber.endsWith("4") || userNumber.endsWith("5") || userNumber.endsWith("6") || userNumber.endsWith("7") || userNumber.endsWith("8") || userNumber.endsWith("9") || userNumber.endsWith("0") || userNumber.endsWith("11") || userNumber.endsWith("12") || userNumber.endsWith("13")) var suffix = "th";

		const returnNumber = piNumber.substring(userNumber-1,userNumber);
		message.channel.send(`The ${userNumber}${suffix} number of PI is ${returnNumber}`);
	},
};
