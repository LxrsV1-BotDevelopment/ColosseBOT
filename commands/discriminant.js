const Discord = require("discord.js");
const math = require("mathjs");
const embeds = require("../modules/embeds.js");
const { colorGreen, colorDarkRed, botThumbnail } = require("../config.json");

module.exports = {
	name: 'discriminant',
	description: 'Calculates discriminant for quadratic equation',
	usage: '//discriminant <A = Any Number Except 0> <B = Any Number> <C = Any Number>',
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
				.setTitle("⋙ ColosseBOT || Discriminant ⋘")
				.setURL("https://colossebot.app")
				.setColor(colorGreen)
				.addField("Expression:", "b^2 - 4ac")
				.addField("Result:", `${result}`)
				.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

				return message.channel.send({embed: dCalcEmbed});
			} catch (error) {
				const dCalcErrorEmbed = new Discord.MessageEmbed()
				.setTitle("⋙ ColosseBOT || Discriminant Error ⋘")
				.setURL("https://colossebot.app")
				.setColor(colorDarkRed)
				.setDescription("Sorry I couldn't calculate that.")
				.setFooter("Error Code: 26", botThumbnail)
				.setTimestamp();

				return message.channel.send({embed: dCalcErrorEmbed});
		}
	},
};
