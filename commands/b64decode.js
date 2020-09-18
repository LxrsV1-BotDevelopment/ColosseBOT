module.exports = {
	name: 'b64decode',
	description: 'Decode from Base64.',
	usage: '//b64decode <Text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ");
		const buff = new Buffer.from(input, 'base64');
		const b64result =  buff.toString("ascii");

		return message.channel.send(b64result);
	},
};
