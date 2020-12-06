const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorDarkRed, colorGreen, jsphThumbnail } = require("../config.json");

module.exports = {
	name: "fact",
	description: "Sends a random fact.",
	usage: "//fact",
	execute(client, message, args) {
			fetch("https://uselessfacts.jsph.pl/random.json?language=en")
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

					const factEmbed = new Discord.MessageEmbed()
					.setAuthor("⋙ ColosseBOT || Useless Fact ⋘", "", "https://colossebot.app")
					.setColor(colorGreen)
					.setDescription(body.text)
					.setFooter("Provided by uselessfacts.jsph.pl", jsphThumbnail);

					return message.channel.send(factEmbed);
				}).catch(error => {
					return embeds.unknownError(client, message, module.exports.name, error);
			});
  },
};
