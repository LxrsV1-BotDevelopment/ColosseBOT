const Discord = require("discord.js");
const { colorGreen, colorDarkRed, botThumbnail } = require("../config.json");
const math = require("mathjs");

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
			.addField("Result:", `${result}`)
			.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

			return message.channel.send({embed: calcEmbed});
    } catch (error) {
			message.delete();

			const calcErrorEmbed = new Discord.MessageEmbed()
			.setAuthor("⋙ ColosseBOT || Calculator Error ⋘", "", "https://colossebot.app")
			.setColor(colorDarkRed)
			.setDescription("Sorry I couldn't calculate that.")
			.setFooter("Error Code: 20", botThumbnail)
			.setTimestamp();

			return message.channel.send({embed: calcErrorEmbed}).then(m => {
				setTimeout(() => {m.delete()}, 7000);
			});
    }
	},
};
