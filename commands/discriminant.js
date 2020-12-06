const Discord = require("discord.js");
const math = require("mathjs");
const embeds = require("../modules/embeds.js");
const { colorGreen, colorDarkRed } = require("../config.json");

module.exports = {
	name: "discriminant",
	description: "Calculates discriminant for quadratic equation",
	usage: "//discriminant <a = Any Number Except 0> <b = Any Number> <c = Any Number>",
	args: true,
	argsCount: 3,
	execute(client, message, args) {
			const a = parseInt(args[0], 10), b = parseInt(args[1], 10), c = parseInt(args[2], 10);
			const aCheck = /^[\-\d]+$/.test(a);
			const bCheck = /^[\-\d]+$/.test(b);
			const cCheck = /^[\-\d]+$/.test(c);

			if(a == 0) return embeds.aCantBeZero(message);
			if(aCheck != true || bCheck != true || cCheck != true) return embeds.inputOnlyNumbers(message);

			const b2 = math.evaluate(`${b} * ${b}`);
			const ac = math.evaluate(`4 * ${a} * ${c}`);

			try{
				result = math.evaluate(b2 - ac);

				const dCalcEmbed = new Discord.MessageEmbed()
				.setAuthor("⋙ ColosseBOT || Discriminant ⋘", "", "https://colossebot.app")
				.setColor(colorGreen)
				.addField("Expression:", "b^2 - 4ac")
				.addField("Result:", `${result}`);

				return message.channel.send(dCalcEmbed);
			} catch (error) {
				const dCalcErrorEmbed = new Discord.MessageEmbed()
				.setAuthor("⋙ ColosseBOT || Discriminant Error ⋘", "", "https://colossebot.app")
				.setColor(colorDarkRed)
				.setDescription("Sorry I couldn't calculate that.");

				return message.channel.send(dCalcErrorEmbed);
		}
	},
};
