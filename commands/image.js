const Discord = require("discord.js");
const Unsplash = require('unsplash-js').default;
const embeds = require("../modules/embeds.js");
global.fetch = require("node-fetch");

const unsplash = new Unsplash({
	accessKey: process.env.UNSPLASH_ACCESS,
	secret: process.env.UNSPLASH_SECRET
});

module.exports = {
	name: 'image',
	description: 'Sends a random image or image from query.',
	usage: '//image [Query]',
	args: true,
	argsCount: 0,
	execute(client, message, args) {
		const query = args.join(" ");
		if(!query) {
			unsplash.photos.getRandomPhoto()
				.then(function(response) {
					if (response.status != 200) {
						return embeds.noImage(message);
					}
					response.json().then(body => {
						unsplash.photos.downloadPhoto(body);
						embeds.unsplashImage(message, body);
					});
				});
			return;
		}
		unsplash.photos.getRandomPhoto({query: query})
			.then(function(response) {
				if (response.status != 200) {
					return embeds.noImage(message);
				}
				response.json().then(body => {
					unsplash.photos.downloadPhoto(body);
					console.log(body.user.name + body.urls.raw);
					return embeds.unsplashImage(message, body);
				});
			});
  },
};
