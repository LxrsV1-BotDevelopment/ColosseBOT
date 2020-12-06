const Discord = require("discord.js");
const { colorDarkRed, colorGreen } = require("../config.json");

module.exports = {
	name: "b64",
	description: "Encode/Decode to/from Base64.",
	usage: "//b64 <Encode/Decode> <Text/B64 String>",
	args: true,
	argsCount: 2,
	execute(client, message, args) {
		const choice = args[0].toLowerCase();
		const input = args.slice(1).join(" ");
		if(choice == "encode") {
				const buff = new Buffer.from(input);
				const b64result =  buff.toString("base64");

				const b64Embed = new Discord.MessageEmbed()
				.setAuthor("⋙ ColosseBOT || Base64 ⋘", "", "https://colossebot.app")
				.setColor(colorGreen)
				.addField("Input:", input)
				.addField("Result:", b64result);

				return message.channel.send(b64Embed);
		} else if(choice == "decode") {
				const buff = new Buffer.from(input, "base64");
				const b64result = buff.toString("ascii");

				const b64Embed = new Discord.MessageEmbed()
				.setAuthor("⋙ ColosseBOT || Base64 ⋘", "", "https://colossebot.app")
				.setColor(colorGreen)
				.addField("Input:", input)
				.addField("Result:", b64result);

				return message.channel.send(b64Embed);
		} else {
				const falseChoice = new Discord.MessageEmbed()
				.setAuthor("⋙ ColosseBOT || Input Error ⋘", "", "https://colossebot.app")
				.setColor(colorDarkRed)
				.setDescription(`Sorry, I couldn't understand your input.\nYour input should look like this:\n\`${module.exports.usage}\``);

				return message.channel.send(falseChoice}).then(m => {
					setTimeout(() => {m.delete()}, 7000);
				});
		}
	},
};
