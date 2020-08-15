const Discord = require("discord.js");
const fs = require("fs");
const ballBank = JSON.parse(fs.readFileSync("./wordbanks/8ball.json", "utf8"));
const { colorBlack } = require("../config.json");

module.exports = {
	name: '8ball',
	description: 'Returns a random 8ball response to question.',
	usage: '//8ball <Question>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const question = args.join(' ');
		const index = Math.floor(Math.random() * (ballBank.ballreplies.length));

		const ballEmbed = new Discord.MessageEmbed()
    .setColor(colorBlack)
    .addField("Question", question)
    .addField("Answer", ballBank.ballreplies[index])
    .addField("Asked By:", message.author.username);

    message.channel.send({embed: ballEmbed});
	},
};
