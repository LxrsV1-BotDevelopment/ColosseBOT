const Discord = require("discord.js");
const { colorWhite } = require("../config.json");
const math = require("mathjs");

module.exports = {
	name: 'sqrt',
	description: 'Square Root Calculator',
	usage: '//sqrt <Expression>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const expression = args.join(" ");
    var result = "N/A";
		message.delete();

		const sqrtCalcEmbed = new Discord.MessageEmbed()
		.setTitle("Square Root Calculator")
		.setColor(colorWhite)

    try{
      result = math.sqrt(expression);
    } catch (error) {
      sqrtCalcEmbed.addField("Error:", "```Sorry I couldn't calculate that. :(```")
    } finally {
      sqrtCalcEmbed.addField("Expression", `\`\`\`${expression}\`\`\``)
      sqrtCalcEmbed.addField("Result", `\`\`\`${result}\`\`\``);

      message.channel.send({embed: sqrtCalcEmbed});
    }
	},
};
