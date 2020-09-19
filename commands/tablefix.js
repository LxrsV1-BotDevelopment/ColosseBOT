module.exports = {
	name: 'tablefix',
	aka: 'fixtable',
	description: 'Appends tablefix emoji to message.',
	usage: '//tableflip [Direction] <Text>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const direction = args[0].toLowerCase();
		if (direction == "left"){
				let text = args.slice(1).join(" ");
				let emoji = "┬─┬ノ(ಠ_ಠノ)";

				return message.channel.send(text + " " + emoji);
		} else if (direction == "right") {
				let text = args.slice(1).join(" ");
				let emoji = "(㇏ಠ_ಠ)㇏┬─┬";

				return message.channel.send(emoji + " " + text);
		} else {
				let text = args.join(" ");
				let emoji = "(㇏ಠ_ಠ)㇏┬─┬";

				return message.channel.send(emoji + " " + text);
		}
	},
};
