const embeds = require("../modules/embeds.js");

module.exports = {
	name: "guessdice",
	description: "Guess value of die.",
	usage: "//guessdice <1-6>",
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		function guessDice(diceGuess) {
			var diceValue = Math.floor(Math.random() * 6) + 1;

			return ((diceGuess == diceValue) ? embeds.guessDiceWin(message, diceGuess, diceValue) : embeds.guessDiceLose(message, diceGuess, diceValue));
		}

		const diceGuess = args[0];
		const diceTest = /^\d+$/.test(diceGuess);
		if(diceTest == false) return embeds.inputOnlyNumbers(message);
		if(diceGuess < 1 || diceGuess > 6) return embeds.guessDice1to6(message);
		guessDice(diceGuess);
	},
};
