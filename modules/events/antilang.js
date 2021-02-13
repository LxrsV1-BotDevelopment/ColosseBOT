const Discord = require("discord.js");
const { warnUser, warnUserF, warnUserNF, muteUser, kickUser, banUser } = require("../embeds/antiLangEmbeds.js");
const deleteExpiredWarns = require("./antiLangModules/deleteExpiredWarns.js");
const addWarn = require("./antiLangModules/addWarn.js");
const addMute = require("./antiLangModules/addMute.js");
const addKick = require("./antiLangModules/addKick.js");
const addBan = require("./antiLangModules/addBan.js");
const countActiveWarns = require("./antiLangModules/countActiveWarns.js");
const { badWords } = require("../wordbanks/badWords.json");

module.exports = function(client, database, guildData, message) {
  for(var i = 0; i < badWords.length; i++) {
    var regexCase = new RegExp(`\\b${badWords[i]}\\b`, "gmi");
    var found = regexCase.test(message.content);
    if(found) break;
  }

  if(found) {
    deleteExpiredWarns(database, guildData, message); // Deletes old entries from database.
    switch (guildData.antiLangLevel) {
      case 1:   //Just warns user
        addWarn(database, message);
        warnUser(client, message);
        break;
      case 2:   //Mutes user after 3 infractions in X hours
        countActiveWarns(database, message).then(activeWarns => {
          if(activeWarns < 3) {
            addWarn(database, message);
            warnUserNF(client, guildData, message, activeWarns);
          } else if(activeWarns == 3) {
            addWarn(database, message);
            warnUserF(client, guildData, message);
          } else {
            message.member.roles.add(guildData.muteRole);
            addMute(database, message);
            muteUser(client, message);
          }
        });
        break;
      case 3:   //Kicks user after 3 infractions in X hours
        countActiveWarns(database, message).then(activeWarns => {
          if(activeWarns < 3) {
            addWarn(database, message);
            warnUserNF(client, guildData, message, activeWarns);
          } else if(activeWarns == 3) {
            addWarn(database, message);
            warnUserF(client, guildData, message);
          } else {
            addKick(database, message);
            kickUser(client, message);
            message.member.kick().catch(console.error);
          }
        });
        break;
      case 4:   //Ban user after 3 infractions in X hours
        countActiveWarns(database, message).then(activeWarns => {
          if(activeWarns < 3) {
            addWarn(database, message);
            warnUserNF(client, guildData, message, activeWarns);
          } else if(activeWarns == 3) {
            addWarn(database, message);
            warnUserF(client, guildData, message);
          } else {
            addBan(database, message);
            banUser(client, message);
            message.member.ban().catch(console.error);
          }
        });
        break;
      default:
        return console.log("[INCORRECT SETUP] - antiLangLevel value can only be [1, 2, 3, 4]!\nCheck config.js for more information!");
    }
  }
};
