module.exports = {
	name: 'reversetext',
	description: 'Convert text to reversed.',
	usage: '//reversetext <text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const text = args.join(" ");

		function reverseString(text)	{
			var splitString = str.split("");
			var reverseArray = splitString.reverse();
			var joinArray = reverseArray.join("");

			return message.channel.send(joinArray);
		}
		reverseString(text);
	},
};
