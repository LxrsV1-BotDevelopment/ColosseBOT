const Discord = require("discord.js");
const { MongoClient } = require("mongodb");
const antiLang = require("./modules/events/antilang.js");
const loadCommands = require("./modules/events/loadCommands.js");
const checkCommand = require("./modules/events/checkCommand.js");
const getGuildData = require("./modules/events/getGuildData.js");
const { version } = require("./package.json");
const { discord_token, mongoURI } = require("./config.js");

const client = new Discord.Client();
loadCommands(client);

const mongoClient = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
(async function connectMongo(mongoClient){
  await mongoClient.connect();
  return database = mongoClient.db('ColosseBOT');
})(mongoClient);

client.once("ready", () => {
    console.log(`\nColosseBOT - The Ultimate Discord Bot\nBot Is Ready! - Version: ${version}\n`);
});

client.on("message", message => {
    getGuildData(database, message).then(guildData => {
      if(guildData.antiLang == true) antiLang(client, database, guildData, message);
    });
    checkCommand(client, message);
});

client.login(discord_token);
