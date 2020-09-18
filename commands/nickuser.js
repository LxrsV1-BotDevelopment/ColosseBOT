module.exports = {
	name: 'nickuser',
	aka: 'nickother',
	description: 'Set nickname for someone else.',
	usage: '//nickother <Nickname>',
	args: true,
	argsCount: 2,
	guildOnly: true,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const nickee = message.mentions.members.first();
		if (!nickee) return message.channel.send(`Couldn't find user to change nick!\nPlease try again, ${message.author}!`);
		const nickname = args.slice(1).join(" ");
		if (nickname.length > 32) return message.channel.send("Nickname can be at most 32 characters long.");

		const nickeeHighestRole = nickee.roles.highest.position;
		const botHighestRole = message.guild.me.roles.highest.position;

		if(message.guild.ownerID == nickee.id) return message.channel.send(`Sorry I can't change guild owner's nickname, ${message.author}.`);
		if(nickeeHighestRole > botHighestRole) return message.channel.send(`Sorry I can't change nickname for specified member, ${message.author}.`);
		nickee.setNickname(nickname);
		return message.channel.send(`Succesfully changed nickname for ${nickee.user.username}.`);
	},
};
