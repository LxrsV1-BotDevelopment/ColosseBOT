const Discord = require("discord.js");
const successEmbeds = require("../modules/embeds/successEmbeds.js");
const ballBank = require("../modules/wordbanks/8ball.json");

module.exports = {
	name: "8ball",
	description: "Returns a random 8ball response to question.",
	usage: "//8ball <Question>",
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		const question = args.join(" ");
		const index = Math.floor(Math.random() * (ballBank.ballreplies.length));
		const reply = ballBank.ballreplies[index];
		return successEmbeds.eightBall(client, message, question, reply);
	},
};
