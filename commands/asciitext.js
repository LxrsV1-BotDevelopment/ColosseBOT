const Discord = require("discord.js");
const fetch = require("node-fetch");
const embeds = require("../modules/embeds.js");
const { colorGreen, colorDarkRed, asciiartThumbnail, botThumbnail } = require("../config.json");

module.exports = {
	name: 'ascii',
	aka: 'asciiart',
	description: 'Sends a ascii art for specified text.',
	usage: '//ascii <Text>',
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		const input = args.join(" ");
		if (input.length > 10) {
			message.delete();

			const inputTooLongEmbed = new Discord.MessageEmbed()
			.setTitle(`⋙ ColosseBOT || Error ⋘`)
			.setURL("https://colossebot.app")
			.setColor(colorDarkRed)
			.setDescription("The input text cannot exceed 10 characters.")
			.setFooter("Error Code: 10", botThumbnail)
			.setTimestamp();

			return message.channel.send({embed: inputTooLongEmbed}).then(m => {
				setTimeout(() => {m.delete();}, 7000);
			});
		}
		const text = encodeURI(input);

		fetch(`http://artii.herokuapp.com/make?text=${text}`)
			.then(result => result.text()).then(body => {
					if(!body) {
						message.delete();

						const noAsciiEmbed = new Discord.MessageEmbed()
						.setTitle("⋙ ColosseBOT || Missing AsciiText ⋘")
						.setURL("https://colossebot.app")
						.setColor(colorDarkRed)
						.setDescription("Sorry, I couldn't get the ascii text. Please try again later.")
						.setFooter("Error Code: 11", botThumbnail)
						.setTimestamp();

						return message.channel.send({embed: noAsciiEmbed}).then(m => {
							setTimeout(() => {m.delete();}, 7000);
						});
					}

				const asciiEmbed = new Discord.MessageEmbed()
  			.setTitle("⋙ ColosseBOT || AsciiText ⋘")
				.setURL("https://colossebot.app")
				.setColor(colorGreen)
				.setDescription(`\`\`\`${body}\`\`\``)
				.setFooter(`Provided by artii.herokuapp.com`, asciiartThumbnail);

				return message.channel.send({embed: asciiEmbed});
			}).catch(error => {
				return embeds.unknownError(client, message, module.exports.name, error);
		});
  },
};
