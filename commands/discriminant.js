const Discord = require("discord.js");
const { colorWhite } = require("../config.json");
const math = require("mathjs");

module.exports = {
	name: 'discriminant',
	description: 'Calculates discriminant for quadratic equation',
	usage: '//discriminant <A = Any Number Except 0> <B = Any Number> <C = Any Number>',
	args: true,
	argsCount: 3,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
			const a = args[0], b = args[1], c = args[2];
			var result = "N/A";
			message.delete();

			const aCheck = /^[\-\d]+$/.test(a);
			const bCheck = /^[\-\d]+$/.test(b);
			const cCheck = /^[\-\d]+$/.test(c);

			if(a == 0) return message.channel.send("Coefficient A cannot be 0!");
			if(aCheck == true && bCheck == true && cCheck == true) {
					args[0] = parseInt(args[0], 10);
					args[1] = parseInt(args[1], 10);
					args[2] = parseInt(args[2], 10);

					const b2 = math.evaluate(`${b} * ${b}`);
					const ac = math.evaluate(`4 * ${a} * ${c}`);

					const dCalcEmbed = new Discord.MessageEmbed()
					.setTitle("Discriminant Calculator")
					.setDescription("If result is negative there are no roots.\nIf result is 0 there is one root.\nIf result is positive there are two roots.")
					.setColor(colorWhite)

					try{
						result = math.evaluate(b2 - ac);
					} catch (error) {
						console.log(error);
						dCalcEmbed.addField("Error:", "```Sorry I couldn't calculate that. :(```")
					} finally {
						dCalcEmbed.addField("Formula", "```b^2 - 4ac```")
						dCalcEmbed.addField("Result", `\`\`\`${result}\`\`\``);

						message.channel.send({embed: dCalcEmbed});
					}
			} else {
					return message.channel.send("Coefficients must be numbers!");
			}
	},
};
