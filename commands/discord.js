const Discord = require("discord.js");
const { colorDiscord, discordThumbnail } = require("../config.json");

module.exports = {
	name: "discord",
	description: "Sends Embed with Discord Links",
	usage: "//discord",
	execute(client, message, args) {
		const discordEmbed = new Discord.MessageEmbed()
		.setAuthor("⋙ ColosseBOT || Discord Links ⋘", "", "https://colossebot.app")
		.setColor(colorDiscord)
		.addField("Discord Help Center:", "[support.discord.com](https://support.discord.com)")
		.addField("Discord Safety Center:", "[discord.com/safety](https://discord.com/safety)")
		.addField("Discord Terms of Service:", "[discord.com/terms](https://discord.com/terms)")
		.addField("Discord Privacy Policy:", "[discord.com/privacy](https://discord.com/privacy)")
		.addField("Discord Community Guidelines:", "[discord.com/guidelines](https://discord.com/guidelines)")

		return message.channel.send({embed: discordEmbed});
	},
};
