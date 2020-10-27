const Discord = require("discord.js");
const { colorGreen } = require("../config.json");

module.exports = {
	name: 'bigtext',
	description: 'Convert text to uppercase.',
	usage: '//bigtext <text>',
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		const bigText = args.join(" ").toUpperCase();
		const bigTextEmbed = new Discord.MessageEmbed()
		.setTitle("⋙ ColosseBOT || Big Text ⋘")
		.setURL("https://colossebot.app")
		.setColor(colorGreen)
		.setDescription(`\`${bigtext}\``)
		.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

		message.channel.send({embed: bigTextEmbed})
	},
};
