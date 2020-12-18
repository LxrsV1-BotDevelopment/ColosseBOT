const Discord = require("discord.js");
const fs = require("fs");
const commandCheck = require("./modules/commandCheck.js");
const { version } = require("./modules/etc/package.json");
const { discord_token } = require("./modules/etc/config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log(`\nColosseBOT - The Ultimate Discord Bot\nBot Is Ready! - Version: ${version}\n`);
});

client.on("message", message => {
    commandCheck.cChecker(client, message);
});

client.login(discord_token);
