const { Int32, Decimal128 } = require("bson");

module.exports = async function(database, userID) {
  try {
    const userCollection = database.collection('users');

    const doc = {
      user: String(userID),
      language: String("EN"),
      prefix: String("//"),
      money: Decimal128.fromString("0"),
      xp: Decimal128.fromString("0"),
      warns: Int32(0),
      mutes: Int32(0),
      kicks: Int32(0),
      bans: Int32(0)
    };
    const result = await userCollection.insertOne(doc);
  } catch(e) {
    console.error(e);
  }
};
