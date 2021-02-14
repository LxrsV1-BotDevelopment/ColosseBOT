const createGuildData = require("./createGuildData.js");

module.exports = async function(database, guildID) {
  try {
    const collection = database.collection('guilds');

    const cursor = await collection.findOne({ guild: guildID });
    if(cursor === null) {
      createGuildData(database, guildID);
    } else {
      const guildData = {
        language: cursor.language,
        prefix: cursor.prefix,
        antiLang: cursor.antiLang,
        antiLangLevel: cursor.antiLangLevel,
        antiSpam: cursor.antiSpam,
        antiSpamLevel: cursor.antiSpamLevel,
        antiRaid: cursor.antiRaid,
        antiRaidLevel: cursor.antiRaidLevel,
        activeHours: cursor.activeHours,
        defaultRole: cursor.defaultRole,
        muteRole: cursor.muteRole,
        moderationLogs: cursor.moderationLogs,
        moderationLogsChannel: cursor.moderationLogsChannel,
        botCommands: cursor.botCommands,
        botCommandsChannel: cursor.botCommandsChannel,
        welcomeLogs: cursor.welcomeLogs,
        welcomeLogsChannel: cursor.welcomeLogsChannel,
        stats: cursor.stats
      };
      return guildData;
    }
  } catch(e) {
    console.error(e);
  }
};
