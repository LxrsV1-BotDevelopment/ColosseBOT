module.exports = {
	name: 'channelid',
	description: 'Returns ID of specified channel!',
	usage: '//channelid <#channel>',
	args: true,
	argsCount: 1,
	guildOnly: true,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const channel = message.mentions.channels.first();
		if (!channel) return message.channel.send(`Couldn't find channel!\nPlease try again, ${message.author}!`);
		const id = channel.id;

		message.channel.send(`ID of specified channel is ${id}.`);
	},
};
