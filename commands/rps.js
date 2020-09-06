module.exports = {
	name: 'rps',
	description: 'Play a game of rock paper scissors.',
	usage: '//rps <Rock/Paper/Scissors>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		var userChoice = args[0].toLowerCase();
		if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") return message.channel.send("You did not select rock, paper, or scissors. Please try again.");
		var computerChoice = Math.random();

		if (computerChoice < 0.34) {
				computerChoice = "rock";
		} else if (computerChoice <= 0.67) {
				computerChoice = "paper";
		} else {
				computerChoice = "scissors";
		}

		function compareChoices(userChoice, computerChoice) {
			if (userChoice === computerChoice) {
				return message.channel.send("The result is a tie! Nobody wins!");
			}

			switch (userChoice) {
				case "rock":
					return (computerChoice === "scissors" ? message.channel.send("I chose scissors; You chose rock. You win!") : message.channel.send("I chose paper; You chose rock. I win!"));
					break;
				case "paper":
					return (computerChoice === "rock" ? message.channel.send("I chose rock; You chose paper. You win!") : message.channel.send("I chose scissors; You chose paper. I win!"));
					break;
				case "scissors":
					return (computerChoice === "paper" ? message.channel.send("I chose paper; You chose scissors. You win!") : message.channel.send("I chose rock; You chose scissors. I win!"));
					break;
			}
		}

		compareChoices(userChoice, computerChoice);
	},
};
