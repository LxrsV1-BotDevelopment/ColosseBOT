const Discord = require("discord.js");
const ballBank = require("../wordbanks/8ball.json");
const { colorGreen, eightBallThumbnail } = require("../config.json");

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
		.setAuthor("⋙ ColosseBOT || 8Ball ⋘", "" ,"https://colossebot.app")
		.setColor(colorGreen)
    .addField("Question:", question)
    .addField("Answer:", ballBank.ballreplies[index])
		.setFooter("Provided by ColosseBOT", eightBallThumbnail);

    return message.channel.send({embed: ballEmbed});
	},
};
