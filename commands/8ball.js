const Discord = require("discord.js");
const { eightBall } = require("../modules/embeds/commandEmbeds.js");
const { ballreplies } = require("../modules/files/wordbanks/wordbanksEN.js");

module.exports = {
	name: "8ball",
	description: "Returns a random 8ball response to question.",
	usage: "//8ball <Question>",
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		const question = args.join(" ");
		const index = Math.floor(Math.random() * (ballreplies.length));
		const reply = ballreplies[index];
		return eightBall(client, message, question, reply);
	},
};
