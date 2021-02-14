module.exports = async function(database, memberID, guildID) {
  try {
    const antiLangCollection = database.collection('antiLang');
    const cursor = await antiLangCollection.find({ user: memberID, guild: guildID });

    warnCount = await cursor.count();
    if (warnCount < 1) {
      return activeWarns = 1;
    } else {
      return activeWarns = warnCount + 1;
    }
  } catch(e) {
    console.error(e);
  }
};
