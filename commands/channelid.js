const Discord = require("discord.js");
const { colorGreen, colorDarkRed } = require("../config.json");

module.exports = {
	name: "channelid",
	description: "Returns ID of specified channel!",
	usage: "//channelid <#channel>",
	args: true,
	argsCount: 1,
	guildOnly: true,
	execute(client, message, args) {
		const channel = message.mentions.channels.first();
		if (!channel) {
			const noChannelEmbed = new Discord.MessageEmbed()
			.setAuthor("⋙ ColosseBOT || No Channel Found ⋘", "", "https://colossebot.app")
			.setColor(colorDarkRed)
			.setDescription(`Couldn't find channel!\nPlease try again, ${message.author.username}!`);

			return message.channel.send(noChannelEmbed).then(m => {
	      setTimeout(() => {m.delete()}, 7000);
	    });
		}
		const id = channel.id;

		const channelIdEmbed = new Discord.MessageEmbed()
		.setAuthor("⋙ ColosseBOT || Channel Id ⋘", "", "https://colossebot.app")
		.setColor(colorGreen)
		.setDescription(`ID of specified channel is ${id}.`);

		message.channel.send(channelIdEmbed);
	},
};
