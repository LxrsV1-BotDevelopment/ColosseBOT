const Discord = require("discord.js");
const { colorWhite } = require("../config.json");
const fetch = require("node-fetch");
global.fetch = fetch;
const Unsplash = require('unsplash-js').default;


module.exports = {
	name: 'elephant',
	description: 'Sends a random elephant image.',
	usage: '//elephant',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {

		const unsplash = new Unsplash({
			accessKey: "NZt1CoteZLqpqhh1Va0bUEWvnCpm7AMCL_sDguu6sCE",
			secret: "jmbiGER9KonlAni4NSS0eV8fBnaxkjNbfGMyfTL6kVY"
	 	});
				unsplash.photos.getRandomPhoto({ query: "elephant" })
					.then(result => result.json()).then(body => {
							if(!body) return message.channel.send("Sorry, I couldn't get the image. Try again later.");

							const catEmbed = new Discord.MessageEmbed()
							.setDescription(`Photo by [${body.user.name}](${body.user.links.html}) on [Unsplash](https://unsplash.com/?utm_source=ColosseBOT&utm_medium=referral)`)
							.setColor(colorWhite)
							.setImage(body.urls.raw)

							unsplash.photos.downloadPhoto(body);

							return message.channel.send({embed: catEmbed});
					}).catch(error => {
				console.log(error.stack);
				return message.channel.send("Sorry, I couldn't get the image. Try again later.");
			});
  },
};
