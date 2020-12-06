const Discord = require("discord.js");
const { colorGreen } = require("../config.json");

module.exports = {
	name: "10poll",
	description: "Sends a poll with 1️⃣-🔟 images as vote options.",
	usage: "//10poll <question>",
	args: true,
	argsCount: 1,
	guildOnly: true,
	execute(client, message, args) {
		const question = args.join(" ");

		const voteEmbed = new Discord.MessageEmbed()
		.setAuthor("⋙ ColosseBOT || 10Poll ⋘", "", "https://colossebot.app")
		.setColor(colorGreen)
		.setDescription("Using provided reactions, please vote on the question below.")
		.addField("Question:", question)
		.setFooter(`Asked by ${message.author.tag}`, message.author.displayAvatarURL());

		return message.channel.send(voteEmbed).then(embedMessage => {
				embedMessage.react("1️⃣").then(() => embedMessage.react("2️⃣")).then(() => embedMessage.react("3️⃣")).then(() => embedMessage.react("4️⃣")).then(() => embedMessage.react("5️⃣")).then(() => embedMessage.react("6️⃣")).then(() => embedMessage.react("7️⃣")).then(() => embedMessage.react("8️⃣")).then(() => embedMessage.react("9️⃣")).then(() => embedMessage.react("🔟"))
		});
	},
};
