module.exports = async function(database, message) {
  try {
    const antiLangCollection = database.collection('antiLang');
    const cursor = await antiLangCollection.find({ user: message.author.id, guild: message.guild.id });

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
