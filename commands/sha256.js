const Hashes = require("jshashes");
const SHA256 = new Hashes.SHA256;

module.exports = {
	name: 'sha256',
	description: 'Encode text to it\'s SHA256 hash.',
	usage: '//sha256 <text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ");
		const output = SHA256.hex(input);

		return message.channel.send(output);
	},
};
