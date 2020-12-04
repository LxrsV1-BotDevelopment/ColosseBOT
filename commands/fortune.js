const Discord = require("discord.js");
const fetch = require("node-fetch");
const embeds = require("../modules/embeds.js");
const { colorDarkRed, colorGreen, fortuneCookieThumbnail } = require("../config.json");

module.exports = {
	name: "fortune",
	description: "Returns fortune from fortune cookie.",
	usage: "//fortune",
	execute(client, message, args) {
		const number = Math.floor(Math.random() * 544);

		fetch(`http://fortunecookieapi.herokuapp.com/v1/fortunes?skip=${number}&limit=1`)
		.then(result => result.json()).then(body => {
			if(!body) {
				const noFortuneEmbed = new Discord.MessageEmbed()
				.setAuthor("⋙ ColosseBOT || Missing Fortune ⋘", "", "https://colossebot.app")
				.setColor(colorDarkRed)
				.setDescription("Sorry, I couldn't get the fortune. Please try again later.");

				return message.channel.send({embed: noFortuneEmbed}).then(m => {
					setTimeout(() => {m.delete();}, 7000);
				});
			}

			const fortuneEmbed = new Discord.MessageEmbed()
			.setAuthor("⋙ ColosseBOT || Fortune Cookie ⋘", "", "https://colossebot.app")
			.setColor(colorGreen)
			.setDescription(body[0].message)
			.setFooter("Provided by fortunecookieapi.herokuapp.com", fortuneCookieThumbnail);

			return message.channel.send({embed: fortuneEmbed});
		}).catch(error => {
			return embeds.unknownError(client, message, module.exports.name, error);
		});
	},
};
