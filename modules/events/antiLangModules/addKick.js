module.exports = async function(database, message) {
  try {
    const userCollection = database.collection('users');
    await userCollection.updateOne({user: message.author.id}, {$inc: { kicks: 1 }});
  } catch(e) {
    console.error(e);
  }
};
