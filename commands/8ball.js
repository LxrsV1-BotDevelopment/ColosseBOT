const Discord = require("discord.js");
const ballBank = require("../wordbanks/8ball.json");
const { colorGreen } = require("../config.json");

module.exports = {
	name: "8ball",
	description: "Returns a random 8ball response to question.",
	usage: "//8ball <Question>",
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		const question = args.join(" ");
		const index = Math.floor(Math.random() * (ballBank.ballreplies.length));

		const ballEmbed = new Discord.MessageEmbed()
		.setTitle("ColosseBOT ⋙ 8 Ball")
		.setURL("https://colossebot.app")
		.setColor(colorGreen)
    .addField("Question:", question)
    .addField("Answer:", ballBank.ballreplies[index])
		.setFooter(`Answer Nr.${index} • Asked by ${message.author.tag}`, message.author.displayAvatarURL());

    return message.channel.send({embed: ballEmbed});
	},
};
