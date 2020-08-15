const Discord = require("discord.js");
const ud = require("urban-dictionary");
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'urban',
	aka: 'urbandictionary',
	description: 'Returns explanation to term from Urban Dictionary.',
	usage: '//urban <term>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const searchTerm = args.join(" ");

		ud.term(searchTerm).then((result) => {
  			const entries = result.entries
				const urbanEmbed = new Discord.MessageEmbed()
				.setTitle(`Definition of ${searchTerm} from Urban Dictionary`)
				.setColor(colorWhite)
				.setDescription(entries[0].definition)
				.addField("Examples:", entries[0].example)
				.addField("Author:", entries[0].author);

				message.channel.send({embed: urbanEmbed});
		}).catch(error => {
  			console.log(error.stack)
		});
	},
};
