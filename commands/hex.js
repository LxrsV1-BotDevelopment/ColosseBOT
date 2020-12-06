const Discord = require("discord.js");
const embeds = require("../modules/embeds.js");
const { colorDarkRed, colorGreen } = require("../config.json");

module.exports = {
	name: "hex",
	description: "Encode/Decode to/from HEX.",
	usage: "//hex <Encode/Decode> <Text/HEX String>",
	args: true,
	argsCount: 2,
	execute(client, message, args) {
		const choice = args[0].toLowerCase();
		const input = args.slice(1).join(" ");
		if(choice == "encode") {
				const buff = new Buffer.from(input);
				const hexResult =  buff.toString("hex");

				const hexEmbed = new Discord.MessageEmbed()
				.setAuthor("⋙ ColosseBOT || HEX ⋘", "", "https://colossebot.app")
				.setColor(colorGreen)
				.addField("Input:", input)
				.addField("Result:", hexResult);

				return message.channel.send(hexEmbed);
		} else if(choice == "decode") {
				const hexCheck = /^[a-f0-9 ]+$/.test(input);
				if (hexCheck != true) return embeds.notHex(message);

				const buff = new Buffer.from(input, "hex");
				const hexResult = buff.toString("ascii");

				const hexEmbed = new Discord.MessageEmbed()
				.setAuthor("⋙ ColosseBOT || HEX ⋘", "", "https://colossebot.app")
				.setColor(colorGreen)
				.addField("Input:", input)
				.addField("Result:", hexResult);

				return message.channel.send(hexEmbed);
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
