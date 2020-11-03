const Discord = require("discord.js");
const { colorGreen, colorDarkRed, botThumbnail } = require("../config.json");

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
			.setTitle("⋙ ColosseBOT || No Channel Found ⋘")
			.setURL("https://colossebot.app")
			.setColor(colorDarkRed)
			.setDescription(`Couldn't find channel!\nPlease try again, ${message.author.username}!`)
			.setFooter("Error Code: 21", botThumbnail)
			.setTimestamp();

			return message.channel.send({embed: noChannelEmbed}).then(m => {
	      setTimeout(() => {m.delete()}, 7000);
	    });
		}
		const id = channel.id;

		const channelIdEmbed = new Discord.MessageEmbed()
		.setTitle("⋙ ColosseBOT || Channel Id ⋘")
		.setURL("https://colossebot.app")
		.setColor(colorGreen)
		.setDescription(`ID of specified channel is ${id}.`)
		.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

		message.channel.send({embed: channelIdEmbed});
	},
};
