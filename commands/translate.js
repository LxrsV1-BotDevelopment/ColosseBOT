const Discord = require("discord.js");
const fetch = require("node-fetch");
const fs = require("fs");
const langBank = JSON.parse(fs.readFileSync("./wordbanks/languages.json", "utf8"));
const { colorWhite } = require("../config.json");

module.exports = {
	name: 'translate',
	description: 'Translates given text to & from specified language.',
	usage: '//test <Language-1> <Language-2> <Text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {

		const lang1 = args[0].charAt(0).toUpperCase() + args[0].slice(1).toLowerCase(), lang2 = args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase();
		if(!(lang1 in langBank)) return message.channel.send(`Sorry, ${lang1} is not available for translation.`);
		if(!(lang2 in langBank)) return message.channel.send(`Sorry, ${lang2} is not available for translation.`);
		const l1 = langBank[lang1], l2 = langBank[lang2];
		const input = args.slice(2).join(" ");
		const text = encodeURI(input);

		fetch(`https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=${l1}&target=${l2}&input=${text}`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
				"x-rapidapi-key": process.env.RAPIDAPI_KEY
			}
		}).then(result => result.json()).then(body => {
			if(!body) return message.channel.send("Sorry, I couldn't get the translation. Try again later.");

			const translationEmbed = new Discord.MessageEmbed()
			.setTitle("Translator")
			.setColor(colorWhite)
			.addField("Source Language:", lang1, true)
			.addField("Target Language:", lang2, true)
			.addField("Text:", input)
			.addField("Translation:", body.outputs[0].output)
			.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL());

			message.channel.send({embed: translationEmbed});

		}).catch(error => {
			console.log(error.stack);
			return message.channel.send("Sorry, I couldn't get the translation. Try again later.");
		});
	},
};
