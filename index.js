const Discord = require("discord.js");
const loadCommands = require("./modules/events/loadCommands.js");
const connectMongo = require("./modules/events/connectMongo.js");
const clientEvents = require("./modules/events/clientEvents.js");
const { discord_token } = require("./config.js");

const client = new Discord.Client();
loadCommands(client);
connectMongo().then(database => {
  clientEvents(client, database);
});

client.login(discord_token);
