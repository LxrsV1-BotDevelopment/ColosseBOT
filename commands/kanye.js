const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorGreen, colorDarkRed, kanyeRestThumbnail } = require("../config.json");

module.exports = {
	name: "kanye",
	description: "Sends a random Kanye West quote.",
	usage: "//kanye",
	execute(client, message, args) {
		fetch("https://api.kanye.rest/")
			.then(result => result.json()).then(body => {
				if(!body) {
					const noKanyeEmbed = new Discord.MessageEmbed()
					.setAuthor("⋙ ColosseBOT || Kanye Missing ⋘", "", "https://colossebot.app")
					.setColor(colorDarkRed)
					.setDescription("Sorry, but I couldn't find Mr. West. Please try again later.");

					return message.channel.send(noKanyeEmbed).then(m => {
						setTimeout(() => {m.delete()}, 7000);
					});
				}
				const kanyeEmbed = new Discord.MessageEmbed()
				.setAuthor("⋙ ColosseBOT || Kanye Quote ⋘", "", "https://colossebot.app")
				.setColor(colorGreen)
				.setDescription(body.quote)
				.setFooter("Provided by kanye.rest", kanyeRestThumbnail);

				return message.channel.send(kanyeEmbed);
			}).catch(error => {
				return embeds.unknownError(client, message, module.exports.name, error)
		});
  },
};
