const Discord = require("discord.js");
const antiLang = require("./modules/events/antilang.js");
const loadCommands = require("./modules/events/loadCommands.js");
const checkCommand = require("./modules/events/checkCommand.js");
const { version } = require("./package.json");
const { discord_token, antiLangActive } = require("./config.js");

const client = new Discord.Client();
loadCommands(client);

client.once("ready", () => {
    console.log(`\nColosseBOT - The Ultimate Discord Bot\nBot Is Ready! - Version: ${version}\n`);
});

client.on("message", message => {
    if(antiLangActive) antiLang(client, message);
    checkCommand(client, message);
});

client.login(discord_token);
