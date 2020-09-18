module.exports = {
	name: 'hexencode',
	description: 'Encode to HEX.',
	usage: '//hexencode <Text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ");
		const buff = new Buffer.from(input);
		const hexResult =  buff.toString("hex");

		return message.channel.send(hexResult);
	},
};
