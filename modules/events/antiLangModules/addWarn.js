const { Long } = require("bson");

module.exports = async function(database, message) {
  try {
    const antiLangCollection = database.collection('antiLang');
    const doc = { timestamp: Long.fromNumber(Date.now()), user: String(message.author.id), guild: String(message.guild.id) };
    const addWarn = await antiLangCollection.insertOne(doc);

    const userCollection = database.collection('users');
    const incrementWarns = await userCollection.updateOne({user: message.author.id}, {$inc: { warns: 1 }});
  } catch(e) {
    console.error(e);
  }
};
