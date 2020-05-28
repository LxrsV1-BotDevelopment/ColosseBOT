const Discord = require('discord.js');
const { prefix, token, ownerID } = require('./config.json');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("ColosseBOT Is Ready! >:3");
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    if(command.disabled){
      return message.channel.send('Sorry, but his command is currently disabled!');
    } if (command.guildOnly && message.channel.type !== 'text') {
        return message.channel.send('I can\'t execute that command inside DMs!');
    } if (command.directOnly && message.channel.type !== 'dm') {
        return message.channel.send('I can\'t execute that command inside guilds!');
    } if (command.roleCheck && !message.member.roles.cache.some(role => command.allowedRoles.includes(role.name))) {
        return message.channel.send('You don\'t have permission to execute this command!');
    } if (command.args) {
        if (!args.length) {
            let reply = `You didn't provide any arguments, ${message.author}!`;

            if (command.usage) {
                reply += `\nThe proper usage would be: \`${command.usage}\``;
            }

            return message.channel.send(reply);
        } else if (args.length < command.argsCount) {
            let reply = `You didn't provide enough arguments, ${message.author}!`;

            if (command.usage) {
                reply += `\nThe proper usage would be: \`${command.usage}\``;
            }

            return message.channel.send(reply);
        }
    } if (!command.args && args.length > 0){
        let reply = `This command doesn't require any arguments, ${message.author}!`;

        if (command.usage){
          reply += `\nThe proper usage would be: \`${command.usage}\``;
        }

        return message.channel.send(reply);
    } if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.channel.send(`${message.author}, please wait ${timeLeft.toFixed(1)} more seconds before reusing the \`${command.name}\` command.`);
        }
    } if (message.mentions.has(client.user)){
        return message.channel.send(`${message.author}, please don't tag me in your messages.`)
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(client, message, args);
    } catch (error) {
        console.error(error);
        return message.channel.send(`There was an error trying to execute that command!`);
    }
});

client.login(process.env.BOT_TOKEN);
