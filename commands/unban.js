module.exports = {
	name: 'unban',
	description: 'Unbans specified user for specified reason.',
	usage: '//unban <@user> <Reason>',
	args: true,
	argsCount: 2,
	guildOnly: true,
	directOnly: false,
	roleCheck: true,
	allowedRoles: ["SENIOR STAFF", "MANAGERS", "OWNERS"],
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const userID = args[0];
		const user = client.users.resolveID(userID);
		if(!user) return message.channel.send(`Couldn't find user to unban!\nPlease try again, ${message.author}!`);
		const reason = args.slice(1).join(" ");

		message.guild.members.unban(user)
			.then(user => message.channel.send(`Unbanned ${user.username}!`));
	},
};
