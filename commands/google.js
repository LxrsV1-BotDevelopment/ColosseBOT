const Discord = require("discord.js");
const { colorGreen } = require("../config.json");

module.exports = {
	name: "google",
	description: "Returns link to google search results about specified topic.",
	usage: "//google <Text>",
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		const input = args.join(" ");
		const searchTerm = encodeURI(input);

		const googleEmbed = new Discord.MessageEmbed()
		.setAuthor("⋙ ColosseBOT || Google ⋘", "", "https://colossebot.app")
		.setColor(colorGreen)
		.setDescription(`https://www.google.com/search?q=${searchTerm}`);

		return message.channel.send(googleEmbed);
	},
};
