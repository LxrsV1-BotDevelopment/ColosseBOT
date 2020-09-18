module.exports = {
	name: 'b64encode',
	description: 'Encode to Base64.',
	usage: '//b64encode <Text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ");
		const buff = new Buffer.from(input);
		const b64result =  buff.toString("base64");

		return message.channel.send(b64result);
	},
};
