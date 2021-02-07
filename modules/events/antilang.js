const Discord = require("discord.js");
const moderationEmbeds = require("../embeds/moderationEmbeds.js");
const badWords = require("../wordbanks/badWords.json");
const { antiLangActive, antiLangLevel } = require("../../config.js");

module.exports = function(client, message) {
  for(var i = 0; i < badWords.badWords.length; i++) {
    var regexCase = new RegExp(`\\b${badWords.badWords[i]}\\b`, "gim");
    var found = regexCase.test(message.content);
  }
  if(found) {
    switch (antiLangLevel) {
      case 1:   //Just warns user
        moderationEmbeds.antiLangWarnUser(client, message);
        break;
      case 2:   //Mutes user after 3 infractions in 24h
        moderationEmbeds.antiLangWarnUser(client, message);
        moderationEmbeds.antiLangMuteUser(client, message);
        break;
      case 3:   //Kicks user after 3 infractions in 24h
        //// TODO: Add counter for 3 times language.
        moderationEmbeds.antiLangWarnUser(client, message);
        moderationEmbeds.antiLangKickUser(client, message);
        break;
      case 4:   //Ban user after 3 infractions in 24h
        //// TODO: Add counter for 3 times language.
        moderationEmbeds.antiLangWarnUser(client, message);
        moderationEmbeds.antiLangKickUser(client, message);
        break;
      default:
        return console.log("[INCORRECT SETUP] - antiLangLevel value can only be [1, 2, 3, 4]!\nCheck config.js for more information!");
    }
  }
};
