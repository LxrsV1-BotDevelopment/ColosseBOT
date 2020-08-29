const fs = require("fs");
const emojiTable = JSON.parse(fs.readFileSync("./wordbanks/emojispeak.json", "utf8"));

module.exports = {
	name: 'emojispeak',
	description: 'Converts text to emojis.',
	usage: '//emojispeak <text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const text = args.join(" ").toUpperCase();

		function emojiString(text) {
			var result = new Array(text.length)
			for (var i = 0; i <= text.length; i++) {
				var c = text.charAt(i)
				var r = emojiTable[c]
				result[i] = r != undefined ? r : c
			}
			return message.channel.send(result.join(""));
		}
		for (i in emojiTable) {
			emojiTable[emojiTable[i]] = i
		}
		emojiString(text);
	},
};
