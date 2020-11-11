const flipTable = require("../wordbanks/fliptext.json");
const embeds = require("../modules/embeds.js");

module.exports = {
	name: "fliptext",
	description: "Turns text upside down.",
	usage: "//fliptext <text>",
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		const input = args.join(" ");

		function flipString(text)	{
			var result = new Array(input.length)
			for (var i = 0; i <= input.length; i++)	{
				var c = text.charAt(i)
				var r = flipTable[c]
				result[i] = r != undefined ? r : c
			}
			return embeds.flipText(message, input, result.join(""));
		}
		for (i in flipTable) {
			flipTable[flipTable[i]] = i
}
		flipString(input);
	},
};
