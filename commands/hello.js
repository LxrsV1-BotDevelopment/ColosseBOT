const Discord = require("discord.js");
const fs = require("fs");
const helloBank = JSON.parse(fs.readFileSync("./wordbanks/hello.json", "utf8"));

module.exports = {
	name: 'hello',
	description: 'Returns a random greeting in random language.',
	usage: '//hello',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const index = Math.floor(Math.random() * (helloBank.helloreplies.length));
    message.channel.send(helloBank.helloreplies[index]);
	},
};
