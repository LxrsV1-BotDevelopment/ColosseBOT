const Discord = require("discord.js");
const { colorWhite } = require("../config.json");

module.exports = {
	name: '10poll',
	description: 'Sends a vote with 10 emojis with specified question.',
	usage: '//10poll <question>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const question = args.join(" ");

		const voteEmbed = new Discord.MessageEmbed()
		.setTitle("Please vote on the question below with the provided emojis.")
		.setColor(colorWhite)
		.setDescription(question)
		.addField("Author:", message.author.username);
		message.channel.send({embed: voteEmbed}).then(embedMessage => {
				embedMessage.react('1️⃣').then(() => embedMessage.react('2️⃣')).then(() => embedMessage.react('3️⃣')).then(() => embedMessage.react('4️⃣')).then(() => embedMessage.react('5️⃣')).then(() => embedMessage.react('6️⃣')).then(() => embedMessage.react('7️⃣')).then(() => embedMessage.react('8️⃣')).then(() => embedMessage.react('9️⃣')).then(() => embedMessage.react('🔟'))
		});
	},
};
