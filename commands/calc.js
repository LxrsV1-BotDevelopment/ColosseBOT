const Discord = require("discord.js");
const { colorWhite } = require("../config.json");
const math = require("mathjs");

module.exports = {
	name: 'calc',
	description: 'Basic Math Functions Calculator',
	usage: '//calc <Expression>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const expression = args.join(" ");
    var result = "N/A"
		message.delete();

		const calcEmbed = new Discord.MessageEmbed()
		.setTitle("Basic Calculator")
		.setColor(colorWhite)

    try{
      result = math.evaluate(expression);
    } catch (error) {
      calcEmbed.addField("Error:", "```Sorry I couldn't calculate that. :(```")
    } finally {
			calcEmbed.addField("Expression:", `\`\`\`${expression}\`\`\``)
			calcEmbed.addField("Result:", `\`\`\`${result}\`\`\``);
			
      message.channel.send({embed: calcEmbed});
    }
	},
};
