module.exports = async function(database, message) {
  try {
    const userCollection = database.collection('users');
    const incrementMutes = await userCollection.updateOne({user: message.author.id}, {$inc: { mutes: 1 }});
  } catch(e) {
    console.error(e);
  }
};
