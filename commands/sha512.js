const Hashes = require("jshashes");
const SHA512 = new Hashes.SHA512;

module.exports = {
	name: 'sha512',
	description: 'Encode text to it\'s SHA512 hash.',
	usage: '//sha512 <text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ");
		const output = SHA512.hex(input);

		return message.channel.send(output);
	},
};
