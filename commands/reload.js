module.exports = {
	name: 'reload',
	aka: ['reloadcmd', 'restartcmd'],
	description: 'Reloads command.',
	usage: '//reload <CommandName>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	roleCheck: true,
	allowedRoles: ['MANAGERS', 'OWNERS'],
	disabled: false,
	execute(client, message, args) {
		const commandName = args[0].toLowerCase();
		const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aka && cmd.aka.includes(commandName));

		if (!command) return message.channel.send(`There is no command with this name, ${message.author}!`);
		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${command.name}\` was reloaded!`);
		} catch (error) {
			console.log(error.stack);
			message.channel.send(`There was an error while reloading a command!`);
		}
	},
};
