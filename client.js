const Discord = require("discord.js");
const fs = require("fs");
const antiLang = require("./modules/events/antiLang.js");
const checkCommand = require("./modules/events/checkCommand.js");
const { version } = require("./package.json");
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
    //antiLang(client, message);
    checkCommand(client, message);
});

client.login(discord_token);
