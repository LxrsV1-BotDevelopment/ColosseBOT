module.exports = async function(database, message) {
  try {
    const collection = database.collection('guilds');

    const cursor = await collection.findOne({ guild: message.guild.id });
    const guildData = {
      antiLang: cursor.antiLang,
      antiLangLevel: cursor.antiLangLevel,
      antiSpam: cursor.antiSpam,
      antiSpamLevel: cursor.antiSpamLevel,
      antiRaid: cursor.antiRaid,
      antiRaidLevel: cursor.antiRaidLevel,
      activeHours: cursor.activeHours,
      muteRole: cursor.muteRole,
      moderationLogs: cursor.moderationLogs,
      moderationLogsChannel: cursor.moderationLogsChannel,
      botCommands: cursor.botCommands,
      botCommandsChannel: cursor.botCommandsChannel
    };
    return guildData;
  } catch(e) {
    console.error(e);
  }
};
