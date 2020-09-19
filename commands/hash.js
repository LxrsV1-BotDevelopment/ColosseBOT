const Hashes = require("jshashes");

const MD5 = new Hashes.MD5;
const SHA1 = new Hashes.SHA1;
const SHA256 = new Hashes.SHA256;
const SHA512 = new Hashes.SHA512;

module.exports = {
	name: 'hash',
	description: 'Encode text to MD5, SHA1, SHA256, SHA512 hashes.',
	usage: '//hash <text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ");

		const outMD5 = MD5.hex(input);
		const outSHA1 = SHA1.hex(input);
		const outSHA256 = SHA256.hex(input);
		const outSHA512 = SHA512.hex(input);

		return message.channel.send(`**MD5:** \n\`${outMD5}\`\n**SHA1:** \n\`${outSHA1}\`\n**SHA256:** \n\`${outSHA256}\`\n**SHA512:** \n\`${outSHA512}\``);
	},
};
