const Hashes = require("jshashes");
const RMD160 = new Hashes.RMD160;

module.exports = {
	name: 'rmd160',
	aka: ['ripemd-160', 'ripemd160'],
	description: 'Encode text to it\'s RIPEMD-160 hash.',
	usage: '//rmd160 <text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ");
		const output = RMD160.hex(input);

		return message.channel.send(output);
	},
};
