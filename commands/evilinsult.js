const Discord = require("discord.js");
const fetch = require("node-fetch");
const embeds = require("../modules/embeds.js");
const { colorDarkRed, colorGreen, evilInsultThumbnail } = require("../config.json");

module.exports = {
	name: 'evilinsult',
	description: 'Sends a random evil insult.',
	usage: '//evilinsult',
	execute(client, message, args) {
		fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json")
			.then(result => result.json()).then(body => {
				if(!body) {
					const noInsultEmbed = new Discord.MessageEmbed()
					.setAuthor("⋙ ColosseBOT || Missing Insult ⋘", "", "https://colossebot.app")
					.setColor(colorDarkRed)
					.setDescription("Sorry, I couldn't get the insult. Please try again later.");

					return message.channel.send(noInsultEmbed).then(m => {
						setTimeout(() => {m.delete()}, 7000);
					});
				}
				const insultEmbed = new Discord.MessageEmbed()
				.setAuthor("⋙ ColosseBOT || Evil Insult ⋘", "", "https://colossebot.app")
				.setColor(colorGreen)
				.setDescription(body.insult)
				.setFooter("Provided by evilinsult.com", evilInsultThumbnail);

				return message.channel.send(insultEmbed);
			}).catch(error => {
				return embeds.unknownError(client, message, module.exports.name, error);
		});
  },
};
