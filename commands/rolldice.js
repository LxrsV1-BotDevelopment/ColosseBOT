module.exports = {
	name: 'rolldice',
	description: 'Roll a dice.',
	usage: '//rolldice [1-20]',
	args: true,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		function diceRoll() {
			var diceValue = Math.floor(Math.random() * 6) + 1;
			return message.channel.send("I rolled a dice. The value was " + diceValue);
		}

		function multipleDiceRoll(diceCount) {
			var diceArray = new Array(diceCount);
			for(i = 0; i < diceCount; i++){
				var diceValue = Math.floor(Math.random() * 6) + 1;
				diceArray[i] = diceValue;
			}
			return message.channel.send(`I rolled ${diceCount} dice. The values are ${diceArray}`);
		}

		const diceCount = args[0];
		if (!diceCount) {
				diceRoll();
		} else {
				const diceTest = /^\d+$/.test(diceCount);
				if (diceTest == false) return message.channel.send("Input can only contain numbers.");
				if (diceCount < 1 || diceCount > 20) return message.channel.send("Min Dice Count: 1 / Max Dice Count: 20");

				multipleDiceRoll(diceCount);
		}
	},
};
