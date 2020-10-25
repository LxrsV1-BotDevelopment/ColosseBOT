const Discord = require("discord.js");
const { colorDarkRed, colorGreen, botThumbnail } = require("../config.json");

module.exports = {
	name: 'b64',
	description: 'Encode/Decode to/from Base64.',
	usage: '//b64 <Encode/Decode> <Text/B64 String>',
	args: true,
	argsCount: 2,
	guildOnly: false,
	directOnly: false,
	execute(client, message, args) {
		const choice = args[0].toLowerCase();
		const input = args.slice(1).join(" ");
		if(choice == "encode") {
				const buff = new Buffer.from(input);
				const b64result =  buff.toString("base64");

				const b64Embed = new Discord.MessageEmbed()
				.setTitle("⋙ ColosseBOT || Base64 ⋘")
				.setURL("https://colossebot.app")
				.setColor(colorGreen)
				.addField("Input:", input)
				.addField("Result:", b64result)
				.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

				return message.channel.send({embed: b64Embed});
		} else if(choice == "decode") {
				const buff = new Buffer.from(input, "base64");
				const b64result = buff.toString("ascii");

				const b64Embed = new Discord.MessageEmbed()
				.setTitle("⋙ ColosseBOT || Base64 ⋘")
				.setURL("https://colossebot.app")
				.setColor(colorGreen)
				.addField("Input:", input)
				.addField("Result:", b64result)
				.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

				return message.channel.send({embed: b64Embed});
		} else {
				const falseChoice = new Discord.MessageEmbed()
				.setTitle("⋙ ColosseBOT || Incorrect Choice ⋘")
				.setURL("https://colossebot.app")
				.setColor(colorDarkRed)
				.setDescription(`Sorry, I couldn't understand your input.\nYour input should look like this:\n\`${module.exports.usage}\``)
				.setFooter("Error Code: 12", botThumbnail)
				.setTimestamp();

				return message.channel.send({embed: falseChoice}).then(m => {
					setTimeout(() => {m.delete()}, 7000);
				});
		}


	},
};
