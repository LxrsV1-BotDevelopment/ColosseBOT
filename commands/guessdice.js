module.exports = {
	name: 'guessdice',
	description: 'Guess value of die.',
	usage: '//guessdice <1-6>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		function guessDice(diceGuess) {
			var diceValue = Math.floor(Math.random() * 6) + 1;

			return ((diceGuess == diceValue) ? message.channel.send(`You picked ${diceGuess} and I rolled ${diceValue}. You win!`) : message.channel.send(`You picked ${diceGuess} and I rolled ${diceValue}. You lost!`));
		}

		const diceGuess = args[0];
		const diceTest = /^\d+$/.test(diceGuess);
		if(diceTest == false) return message.channel.send("Input can only contain numbers.");
		if(diceGuess < 1 || diceGuess > 6) return message.channel.send("Min Value: 1 / Max Value: 6");
		guessDice(diceGuess);
	},
};
