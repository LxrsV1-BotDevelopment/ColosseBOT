const Discord = require("discord.js");
const convert = require("color-convert");
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'colors',
	description: 'Outputs colors in various formats.',
	usage: '//colors <HEX Color>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const colorCode = args[0].toLowerCase();
		const colorCheck = /[!-/g-z]/.test(colorCode);
		if (colorCode.length > 6 || colorCode.length < 3) return message.channel.send("This is not HEX color.");
		if (colorCheck == true) return message.channel.send("This is not HEX color.");

		const colorsEmbed = new Discord.MessageEmbed()
		.setColor(`#${colorCode}`)
		.setTitle("Colors | Success")
		.addField("HEX: ", `\`\`\`#${colorCode}\`\`\``)
		.addField("RGB: ", `\`\`\`${convert.hex.rgb(colorCode)[0]}, ${convert.hex.rgb(colorCode)[1]}, ${convert.hex.rgb(colorCode)[2]}\`\`\``)
		.addField("HSV/HSB: ", `\`\`\`${convert.hex.hsv(colorCode)[0]}, ${convert.hex.hsv(colorCode)[1]}, ${convert.hex.hsv(colorCode)[2]}\`\`\``)
		.addField("HSL: ", `\`\`\`${convert.hex.hsl(colorCode)[0]}, ${convert.hex.hsl(colorCode)[1]}, ${convert.hex.hsl(colorCode)[2]}\`\`\``)
		.addField("CIELAB: ", `\`\`\`${convert.hex.lab(colorCode)[0]}, ${convert.hex.lab(colorCode)[1]}, ${convert.hex.lab(colorCode)[2]}\`\`\``)
		.addField("CMYK: ", `\`\`\`${convert.hex.cmyk(colorCode)[0]}, ${convert.hex.cmyk(colorCode)[1]}, ${convert.hex.cmyk(colorCode)[2]}, ${convert.hex.cmyk(colorCode)[3]}\`\`\``)
		.setFooter(`Requested by ${message.author.username}`);

		message.channel.send({embed: colorsEmbed});
	},
};
