const fs = require("fs");
const asciiBinaryTable = JSON.parse(fs.readFileSync("./wordbanks/asciiBinary.json", "utf8"));

module.exports = {
	name: 'binaryencode',
	description: 'Encode to Binary.',
	usage: '//binaryencode <Text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ");
		const regTest = /^[0-9a-z\u0020]*$/igm.test(input);
		if (regTest != true) return message.channel.send("Input can only contain letters and numbers.");

		function asciiBinary(input) {
			var result = new Array(input.length)
			for (var i = 0; i <= input.length; i++) {
				var c = input.charAt(i)
				var r = asciiBinaryTable[c]
				result[i] = r != undefined ? r : c
			}
			return message.channel.send(result.join(" "));
		}
		for (i in asciiBinaryTable) {
			asciiBinaryTable[asciiBinaryTable[i]] = i
		}
		asciiBinary(input);
	},
};
