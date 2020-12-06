const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorDarkRed, colorGreen, numberFactsThumbnail } = require("../config.json");

module.exports = {
	name: "numberfact",
	description: "Sends a random number fact.",
	usage: "//numberfact",
	execute(client, message, args) {
			fetch("http://numbersapi.com/random?json")
				.then(result => result.json()).then(body => {
					if(!body) {
						const noFactEmbed = new Discord.MessageEmbed()
						.setAuthor("⋙ ColosseBOT || Missing Fact ⋘", "", "https://colossebot.app")
						.setColor(colorDarkRed)
						.setDescription("Sorry, I couldn't get the fact. Please try again later.");

						return message.channel.send(noFactEmbed).then(m => {
							setTimeout(() => {m.delete();}, 7000);
						});
					}

					const numberFactEmbed = new Discord.MessageEmbed()
					.setAuthor("⋙ ColosseBOT || Number Fact ⋘", "", "https://colossebot.app")
					.setColor(colorGreen)
					.setDescription(body.text)
					.setFooter("Provided by numbersapi.com", numberFactsThumbnail);

					return message.channel.send(numberFactEmbed);
				}).catch(error => {
					return embeds.unknownError(client, message, module.exports.name, error);
			});
  },
};
