const Discord = require("discord.js");
const urban = require("urban-dictionary");
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

		urban.term(searchTerm).then((result) => {
  			const entries = result.entries
				const urbanEmbed = new Discord.MessageEmbed()
				.setTitle(`Definition of ${searchTerm} from Urban Dictionary`)
				.setColor(colorWhite)
				.setDescription(entries[0].definition)
				.addField("Examples:", entries[0].example)
				.addField("Author:", entries[0].author);

				message.channel.send({embed: urbanEmbed});
		}).catch(error => {
			if(error.message == `${searchTerm} is undefined.`) {
				return message.channel.send(`Sorry, I couldn't find definition for ${searchTerm}.`);
			} else {
				console.log(error.stack);
				return message.channel.send("There was an error trying to execute that command!");
			}
		});
	},
};
