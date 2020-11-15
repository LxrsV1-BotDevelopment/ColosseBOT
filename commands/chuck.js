const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorGreen, colorDarkRed, chuckThumbnail } = require("../config.json");
const embeds = require("../modules/embeds.js");

module.exports = {
	name: "chuck",
	description: "Sends a Chuck Norris joke.",
	usage: "//chuck",
	execute(client, message, args) {
				fetch(`https://api.chucknorris.io/jokes/random`)
					.then(result => result.json()).then(body => {
						if(!body) {
							const noChuckEmbed = new Discord.MessageEmbed()
							.setAuthor("⋙ ColosseBOT || Chuck Missing ⋘", "", "https://colossebot.app")
							.setColor(colorDarkRed)
							.setDescription("Sorry, but I couldn't find Mr. Norris. Please try again later.");

							return message.channel.send({embed: noChuckEmbed}).then(m => {
								setTimeout(() => {m.delete()}, 7000);
							});
						}
						const chuckEmbed = new Discord.MessageEmbed()
						.setAuthor("⋙ ColosseBOT || Chuck Norris Joke ⋘", "", "https://colossebot.app")
						.setColor(colorGreen)
						.setDescription(body.value)
						.setFooter("Provided by api.chucknorris.io", chuckThumbnail);

						return message.channel.send({embed: chuckEmbed});
					}).catch(error => {
				console.log(error.stack);
				return embeds.unknownError(client, message, module.exports.name, error)
			});
  },
};
