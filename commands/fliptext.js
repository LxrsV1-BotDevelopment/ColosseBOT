const fs = require("fs");
const flipTable = JSON.parse(fs.readFileSync("./wordbanks/fliptext.json", "utf8"));

module.exports = {
	name: 'fliptext',
	description: 'Convert text to upside down.',
	usage: '//upsidetext <text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const text = args.join(" ");

		function flipString(text)	{
			var last = text.length - 1;
			var result = new Array(text.length)
			for (var i = last; i >= 0; --i)	{
				var c = text.charAt(i)
				var r = flipTable[c]
				result[last - i] = r != undefined ? r : c
			}
			return message.channel.send(result.join(''));
		}
		for (i in flipTable) {
			flipTable[flipTable[i]] = i
}
		flipString(text);
	},
};

