const antiLang = require("./antilang.js");
const checkCommand = require("./checkCommand.js");
const getGuildData = require("./getGuildData.js");
const countActiveWarns = require("./antiLangModules/countActiveWarns.js");
const { version } = require("../../package.json");

module.exports = function(client, database) {
  // Client is ready
  client.once("ready", () => {
    console.log(`\nColosseBOT - The Ultimate Discord Bot\nBot Is Ready! - Version: ${version}\n`);
  });

  // Member joins guild
  client.on("guildMemberAdd", (member) => {
    getGuildData(database, member.guild.id).then(guildData => {
      if(guildData.antiLang == true && guildData.antiLangLevel == 3) {
        countActiveWarns(database, member.id, member.guild.id).then(activeWarns => {
          if(activeWarns > 4) member.kick();
        });
      }
    });
  });

  // Client joins guild
  client.on("guildCreate", (guild) => {
    getGuildData(database, guild.id);
  });

  // Message
  client.on("message", (message) => {
    getGuildData(database, message.guild.id).then(guildData => {
      if(guildData.antiLang == true) antiLang(client, database, guildData, message);
    });
    checkCommand(client, message);
  });
};
