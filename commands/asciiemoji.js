const Discord = require("discord.js");
const emojiBank = require("../wordbanks/emoji.json");
const { colorGreen } = require("../config.json");

module.exports = {
	name: 'asciiemoji',
	description: 'Returns a random ASCII emoji.',
	usage: '//asciiemoji',
	execute(client, message, args) {
		const index = Math.floor(Math.random() * (emojiBank.emojireplies.length));

		const asciiEmojiEmbed = new Discord.MessageEmbed()
		.setAuthor("⋙ ColosseBOT || ASCII Emoji ⋘", "", "https://colossebot.app")
		.setColor(colorGreen)
		.setDescription(emojiBank.emojireplies[index]);

		return message.channel.send(asciiEmojiEmbed);
	},
};
