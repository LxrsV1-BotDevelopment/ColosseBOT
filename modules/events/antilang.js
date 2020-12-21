const Discord = require("discord.js");
const moderationEmbeds = require("../embeds/moderationEmbeds.js");
const badWords = require("../wordbanks/badWords.json");
const { antiLangActive, antiLangLevel } = require("../etc/config.json");

module.exports = function(client, message) {
    for(var i = 0; i < badWords.badWords.length; i++) {
      var regexCase = new RegExp(`\\b${badWords.badWords[i]}\\b`, "gim");
      var found = regexCase.test(message.content);

      if(found) {
        if(!antiLangActive) return;
        switch (antiLangLevel) {
          case 1:   //Just warns user
//// TODO: Add warning embed.
            break;
          case 2:   //Mutes user after 3 infractions in 24h
//// TODO: Add counter for 3 times language.
//// TODO: Add warning embed.
//// TODO: Add mute embed.
            break;
          case 3:  //Kicks user after 3 infractions in 24h
//// TODO: Add counter for 3 times language.
//// TODO: Add warning embed.
//// TODO: Add kick embed.
            break;
          case 4:   //Ban user after 3 infractions in 24h
//// TODO: Add counter for 3 times language.
//// TODO: Add warning embed.
//// TODO: Add ban embed.
            break;
          default:
//// TODO: Add default case.
      }
    }
  }
}
