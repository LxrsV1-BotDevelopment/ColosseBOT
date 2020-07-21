const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'meme',
	description: 'Sends a random meme.',
	usage: '//meme',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	async execute(client, message, args) {
		const subReddits = ["meme", "me_irl", "dankmeme"];
		const random = subReddits[Math.floor(Math.random() * subReddits.length)];
		const img = await randomPuppy(random);

		const memeEmbed = new Discord.MessageEmbed()
		.setTitle(`Meme`)
		.setColor(colorWhite)
		.setImage(img)

		message.channel.send({embed: memeEmbed});
  },
};
