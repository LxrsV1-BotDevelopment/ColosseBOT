const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorDarkRed, colorGreen, botThumbnail, adviceslipThumbnail } = require("../config.json");
const embeds = require("../modules/embeds.js");

module.exports = {
	name: 'advice',
	description: 'Sends a random advice slip.',
	usage: '//advice',
	args: false,
	execute(client, message, args) {
		fetch("https://api.adviceslip.com/advice")
			.then(result => result.json()).then(body => {
				if(!body) {
					const noAdviceEmbed = new Discord.MessageEmbed()
					.setTitle("⋙ ColosseBOT || Missing Advice ⋘")
					.setURL("https://colossebot.app")
					.setColor(colorDarkRed)
					.setDescription("Sorry, I couldn't get the advice. Please try again later.")
					.setFooter("Error Code: 11", botThumbnail)
					.setTimestamp();

					return message.channel.send({embed: noAdviceEmbed}).then(m => {
						setTimeout(() => {m.delete();}, 7000);
					});
				}

				const adviceEmbed = new Discord.MessageEmbed()
				.setTitle("⋙ ColosseBOT || Advice Slip ⋘")
				.setURL("https://colossebot.app")
				.setColor(colorGreen)
				.setDescription(`\`${body.slip.advice}\``)
				.setFooter(`Provided by adviceslip.com`, adviceslipThumbnail);

				return message.channel.send({embed: adviceEmbed});
			}).catch(error => {
				return embeds.unknownError(client, message, module.exports.name, error);
		});
  },
};
