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
		.setTitle("⋙ ColosseBOT || ASCII Emoji ⋘")
		.setURL("https://colossebot.app")
		.setColor(colorGreen)
		.setDescription(emojiBank.emojireplies[index])
		.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

		message.channel.send({embed: asciiEmojiEmbed});
	},
};
