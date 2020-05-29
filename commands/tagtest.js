module.exports = {
	name: 'tagtest',
	description: 'Testing tag of non-existent user.',
	usage: '//tagtest <@user>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const test = message.mentions.members.first();
   	console.log(test);
	},
};
