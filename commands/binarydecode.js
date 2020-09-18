const fs = require("fs");
const binaryAsciiTable = JSON.parse(fs.readFileSync("./wordbanks/binaryAscii.json", "utf8"));

module.exports = {
	name: 'binarydecode',
	description: 'Decode from Binary.',
	usage: '//binarydecode <Text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ");
		const regTest = /^[01\u0020]*$/igm.test(input);
		if (regTest != true) return message.channel.send("Input can only contain ones and zeros.");

		for(var i = 0; i < args.length; i++){
			if(args[i].length != 8) return message.channel.send("Incorect binary input. Binary numbers are 8 digits long.")
		}

		function binaryAscii(input) {
			var result = new Array(args.length)
			for (var i = 0; i <= args.length; i++) {
				var c = args[i]
				var r = binaryAsciiTable[c]
				result[i] = r != undefined ? r : c
			}
			return message.channel.send(result.join(""));
		}
		for (i in binaryAsciiTable) {
			binaryAsciiTable[binaryAsciiTable[i]] = i
		}
		binaryAscii(input);
	},
};
