const Discord = require("discord.js");
const math = require("mathjs");
const { colorGreen, colorDarkRed } = require("../config.json");

module.exports = {
	name: "calc",
	description: "Basic Math Functions Calculator",
	usage: "//calc <Expression>",
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		const expression = args.join(" ");

    try {
      result = math.evaluate(expression);

			const calcEmbed = new Discord.MessageEmbed()
			.setAuthor("⋙ ColosseBOT || Calculator ⋘", "", "https://colossebot.app")
			.setColor(colorGreen)
			.addField("Expression:", `${expression}`)
			.addField("Result:", `${result}`);

			return message.channel.send(calcEmbed);
    } catch (error) {
			message.delete();

			const calcErrorEmbed = new Discord.MessageEmbed()
			.setAuthor("⋙ ColosseBOT || Calculator Error ⋘", "", "https://colossebot.app")
			.setColor(colorDarkRed)
			.setDescription("Sorry I couldn't calculate that.");

			return message.channel.send(calcErrorEmbed).then(m => {
				setTimeout(() => {m.delete()}, 7000);
			});
    }
	},
};
