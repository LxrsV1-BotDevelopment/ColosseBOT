const Hashes = require("jshashes");
const MD5 = new Hashes.MD5;

module.exports = {
	name: 'md5',
	description: 'Encode text to it\'s MD5 hash.',
	usage: '//md5 <text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ");
		const output = MD5.hex(input);

		return message.channel.send(output);
	},
};
