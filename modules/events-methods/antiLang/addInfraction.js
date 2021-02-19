const { Long } = require("bson");

module.exports.addWarn = async function(database, message) {
  try {
    const antiLangCollection = database.collection('antiLang');
    const doc = { timestamp: Long.fromNumber(Date.now()), user: String(message.author.id), guild: String(message.guild.id) };
    await antiLangCollection.insertOne(doc);

    const userCollection = database.collection('users');
    await userCollection.updateOne({user: message.author.id}, {$inc: { warns: 1 }});
  } catch(e) {
    console.error(e);
  }
};

module.exports.addMute = async function(database, message) {
  try {
    const userCollection = database.collection('users');
    await userCollection.updateOne({user: message.author.id}, {$inc: { mutes: 1 }});
  } catch(e) {
    console.error(e);
  }
};

module.exports.addKick = async function(database, message) {
  try {
    const userCollection = database.collection('users');
    await userCollection.updateOne({user: message.author.id}, {$inc: { kicks: 1 }});
  } catch(e) {
    console.error(e);
  }
};

module.exports.addBan = async function(database, message) {
  try {
    const userCollection = database.collection('users');
    await userCollection.updateOne({user: message.author.id}, {$inc: { bans: 1 }});
  } catch(e) {
    console.error(e);
  }
};
