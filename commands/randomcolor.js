const Discord = require("discord.js");
const convert = require("color-convert");

module.exports = {
	name: 'randomcolor',
	description: 'Outputs random color in various formats.',
	usage: '//randomcolor',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		var colorCode = '';
		for (var i = 0; i < 1; i++) {
			var res = '';
			for (var j = 0; j < 6; j++) {
				var randByte = parseInt(Math.random() * 16, 10).toString(16);
				res += randByte;
			}
		colorCode += res;
		}

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
