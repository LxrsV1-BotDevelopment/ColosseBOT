module.exports = {
	name: 'hexdecode',
	description: 'Decode from HEX.',
	usage: '//hexdecode <Text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ");
		const buff = new Buffer.from(input, "hex");
		const hexResult =  buff.toString("ascii");

		return message.channel.send(hexResult);
	},
};
