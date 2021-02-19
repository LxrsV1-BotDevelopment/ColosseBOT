const { Int32 } = require("bson");

module.exports = async function(database, guildID) {
  try {
    const guildCollection = database.collection('guilds');

    const doc = {
      guild: String(guildID),
      language: String("EN"),
      prefix: String("//"),
      antiLang: Boolean(false),
      antiLangLevel: Int32(1),
      antiSpam: Boolean(false),
      antiSpamLevel: Int32(1),
      antiRaid: Boolean(false),
      antiRaidLevel: Int32(1),
      activeHours: Int32(6),
      defaultRole: String("None"),
      muteRole: String("None"),
      moderationLogs: Boolean(false),
      moderationLogsChannel: String("None"),
      botCommands: Boolean(false),
      botCommandsChannel: String("None"),
      welcomeLogs: Boolean(false),
      welcomeLogsChannel: String("None"),
      welcomeType: String("EMBED"),
      stats: Boolean(false)
    };
    const result = await guildCollection.insertOne(doc);
  } catch(e) {
    console.error(e);
  }
};
