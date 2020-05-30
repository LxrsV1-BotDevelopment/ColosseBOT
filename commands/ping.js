module.exports = {
	name: 'ping',
	description: 'Ping command.',
	usage: '//ping',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		message.channel.send("Pinging...").then(m => {
	    let ping = m.createdTimestamp - message.createdTimestamp
	    m.edit(`Bot Latency: ${ping}ms`);
	  });
	},
};
