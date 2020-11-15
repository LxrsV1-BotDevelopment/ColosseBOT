const binaryAsciiTable = require("../wordbanks/binaryAscii.json");
const asciiBinaryTable = require("../wordbanks/asciiBinary.json");
const embeds = require("../modules/embeds.js");

module.exports = {
	name: "binary",
	description: "Decode/Encode from/to Binary.",
	usage: "//binary <Decode/Encode> <Binary/Text>",
	args: true,
	argsCount: 2,
	execute(client, message, args) {
		const choice = args[0].toLowerCase();
		const input = args.slice(1).join(" ");
		if (choice == "decode"){
				const regTest = /^[01\u0020]*$/igm.test(input);
				if (regTest != true) return embeds.regexOnly01(message);
				for(var i = 1; i < args.length; i++) {
						if(args[i].length != 8) return embeds.incorrectBinary(message);
				}
				function binaryAscii(input) {
						var result = new Array(args.length);
						for (var i = 1; i <= args.length; i++) {
								var c = args[i]
								var r = binaryAsciiTable[c]
								result[i] = r != undefined ? r : c
						}
						return embeds.binaryAscii(message, input, result.join(""));
				}
				for (i in binaryAsciiTable) {
						binaryAsciiTable[binaryAsciiTable[i]] = i
				}
				binaryAscii(input);
		} else if (choice == "encode") {
				const regTest = /^[0-9a-z\u0020]*$/igm.test(input);
				if (regTest != true) return embeds.regexOnlyLetters(message);
				function asciiBinary(input) {
						var result = new Array(input.length);
						for (var i = 0; i <= input.length; i++) {
								var c = input.charAt(i)
								var r = asciiBinaryTable[c]
								result[i] = r != undefined ? r : c
					}
						return embeds.asciiBinary(message, input, result.join(" "));
				}
				for (i in asciiBinaryTable) {
					asciiBinaryTable[asciiBinaryTable[i]] = i
				}
				asciiBinary(input);
		} else {
				const usage = module.exports.usage;
				return embeds.falseChoice(message, usage);
		}
	},
};
