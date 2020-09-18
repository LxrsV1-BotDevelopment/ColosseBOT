module.exports = {
	name: 'nickself',
	aka: 'nickmyself',
	description: 'Set nickname for yourself.',
	usage: '//nickself <Nickname>',
	args: true,
	argsCount: 1,
	guildOnly: true,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const nickname = args.join(" ");
		if (nickname.length > 32) return message.channel.send("Nickname can be at most 32 characters long.");
		const memberHighestRole = message.member.roles.highest.position;
		const botHighestRole = message.guild.me.roles.highest.position;

		if(message.guild.ownerID == message.member.id) return message.channel.send(`Sorry I can't change your nickname, ${message.author}\nYou can use this command to change nickname: \`/nick <Nickname>\``);
		if(memberHighestRole > botHighestRole) return message.channel.send(`Sorry I can't change your nickname, ${message.author}.\nYou can use this command to change nickname: \`/nick <Nickname>\``);
		message.member.setNickname(nickname);
		return message.channel.send(`Succesfully changed nickname for ${message.author.username}.`);
	},
};
