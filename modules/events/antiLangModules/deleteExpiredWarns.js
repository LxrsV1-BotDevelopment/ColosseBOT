module.exports = async function(database, guildData, message) {
  try {
    const antiLangCollection = database.collection('antiLang');
    const activeTime = guildData.activeHours * 1000 * 60 * 60;
    const expiredTime = Date.now() - activeTime;

    const deleteMany = await antiLangCollection.deleteMany({timestamp: { $lt: expiredTime }});
  } catch(e) {
    console.error(e);
  }
};
