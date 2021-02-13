module.exports = async function(database, message) {
  try {
    const userCollection = database.collection('users');
    const incrementBans = await userCollection.updateOne({user: message.author.id}, {$inc: { bans: 1 }});
  } catch(e) {
    console.error(e);
  }
};
