const Discord = require("discord.js");
const fs = require("fs");
const emojiBank = JSON.parse(fs.readFileSync("./wordbanks/emoji.json", "utf8"));

module.exports = {
	name: 'emoji',
	description: 'Returns a random ASCII emoji.',
	usage: '//emoji',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const index = Math.floor(Math.random() * (emojiBank.emojireplies.length));
    message.channel.send(emojiBank.emojireplies[index]);
	},
};
