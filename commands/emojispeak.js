const emojiTable = require("../wordbanks/emojispeak.json");
const embeds = require("../modules/embeds.js");

module.exports = {
	name: "emojispeak",
	description: "Converts text to emojis.",
	usage: "//emojispeak <Text>",
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		const input = args.join(" ");
		const regTest = /^[0-9A-Z?!.,;:()\[\]\{\}'"\-\u0020]*$/igm.test(input);
		if (regTest != true) return embeds.regexOnlyAllowedSymbols(message);

		function emojiString(input) {
			var result = new Array(input.length)
			for (var i = 0; i <= input.length; i++) {
				var c = input.charAt(i)
				var r = emojiTable[c]
				result[i] = r != undefined ? r : c
			}
			return embeds.emojiSpeak(message, input, result.join(""));
		}
		for (i in emojiTable) {
			emojiTable[emojiTable[i]] = i
		}
		emojiString(input);
	},
};
