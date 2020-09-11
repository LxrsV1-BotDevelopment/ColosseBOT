const Discord = require("discord.js");
const { colorWhite, botThumbnail, discordThumbnail } = require("../config.json");

module.exports = {
	name: 'discord',
	aka: "discordlinks",
	description: 'Sends Embed with Discord Links',
	usage: '//discord',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const discordEmbed = new Discord.MessageEmbed()
		.setTitle("Discord Links")
		.setColor(colorWhite)
		.setThumbnail(discordThumbnail)
		.setDescription("Links to Discord Policies.")
		.addField("Discord Terms of Service", "[discord.com/terms](https://discord.com/terms)")
		.addField("Discord Privacy Policy", "[discord.com/privacy](https://discord.com/privacy)")
		.addField("Discord Community Guidelines", "[discord.com/guidelines](https://discord.com/guidelines)")
		.addField("Open Source Libraries Used To Make Discord", "[discord.com/acknowledgements](https://discord.com/acknowledgements)")
		.addField("Licenses for Libraries Discord Uses", "[discord.com/licenses](https://discord.com/licenses)")
		.setFooter("ColosseBOT is not affiliated or associated in any way with Discord.", botThumbnail)

		message.channel.send({embed: discordEmbed});
	},
};
