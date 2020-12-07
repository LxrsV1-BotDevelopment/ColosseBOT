const Discord = require("discord.js");
const { colorGreen} = require("../config.json");

module.exports = {
	name: "botinfo",
	description: "Sends Embed with Bot Information",
	usage: "//botinfo",
	execute(client, message, args) {
		const botInfoEmbed = new Discord.MessageEmbed()
		.setAuthor("⋙ ColosseBOT || Bot Information ⋘", "", "https://colossebot.app")
		.setColor(colorGreen)
		.setDescription("An ultra-modern, customizable bot made to be the ultimate bot.\nColosseBOT is built to always serve and help the user with lots of amazing commands and cool-looking dashboard. It has commands that usually require other bots or that others don't even have.")
		.addField("Basic Information:", "Default Prefix: //\nHelp Command: //help [commandName]\nDocumentation: [ColosseBOT Docs](https://colossebot.app)\nDashboard: [ColosseBOT Dashboard](https://colossebot.app)")
		.addField("Contact Information:", "<:ColosseBOT_Discord:773331549591699486> [EEHoveckis#2408 (Bot Creator)](https://discord.gg/ftHzXuD)\n<:ColosseBOT_Github:773332525497712691> [EEHoveckis](https://github.com/EEHoveckis)\n🌍 [ColosseBOT Website](https://colossebot.app)")
		.addField("Contribute:", "📖 [Bot Translation Page](https://crowdin.com/project/colossebot)\n✏️ [Suggest or Make Changes](https://github.com/EEHoveckis/ColosseBOT)\n:coin: [Donate to Development](https://colossebot.app/donate)");

		return message.channel.send(botInfoEmbed);
	},
};
