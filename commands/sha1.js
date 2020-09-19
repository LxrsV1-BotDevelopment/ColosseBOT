const Hashes = require("jshashes");
const SHA1 = new Hashes.SHA1;

module.exports = {
	name: 'sha1',
	description: 'Encode text to it\'s SHA1 hash.',
	usage: '//sha1 <text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ");
		const output = SHA1.hex(input);

		return message.channel.send(output);
	},
};
