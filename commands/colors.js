const Discord = require("discord.js");
const convert = require("color-convert");
const embeds = require("../modules/embeds.js");

module.exports = {
	name: "colors",
	description: "Outputs colors in various formats.",
	usage: "//colors <HEX Color>",
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		const colorCode = args[0].toLowerCase();
		if (colorCode.length > 6 || colorCode.length < 3) return embeds.notHexColor(message);
		const colorCheck = /^[a-f0-9]+$/.test(colorCode);
		if (colorCheck != true) return embeds.notHexColor(message);

		const colorsEmbed = new Discord.MessageEmbed()
		.setTitle("⋙ ColosseBOT || Colors ⋘")
		.setURL("https://colossebot.app")
		.setColor(`#${colorCode}`)
		.addField("HEX: ", `#${colorCode}`, true)
		.addField("RGB: ", `${convert.hex.rgb(colorCode)[0]}, ${convert.hex.rgb(colorCode)[1]}, ${convert.hex.rgb(colorCode)[2]}`, true)
		.addField("CMYK: ", `${convert.hex.cmyk(colorCode)[0]}%, ${convert.hex.cmyk(colorCode)[1]}%, ${convert.hex.cmyk(colorCode)[2]}%, ${convert.hex.cmyk(colorCode)[3]}%`, true)
		.addField("HSV/HSB: ", `${convert.hex.hsv(colorCode)[0]}, ${convert.hex.hsv(colorCode)[1]}%, ${convert.hex.hsv(colorCode)[2]}%`, true)
		.addField("HSL: ", `${convert.hex.hsl(colorCode)[0]}, ${convert.hex.hsl(colorCode)[1]}%, ${convert.hex.hsl(colorCode)[2]}%`, true)
		.addField("CIELAB: ", `${convert.hex.lab(colorCode)[0]}, ${convert.hex.lab(colorCode)[1]}, ${convert.hex.lab(colorCode)[2]}`, true)
		.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

		return message.channel.send({embed: colorsEmbed});
	},
};
