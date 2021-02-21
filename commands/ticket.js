module.exports = {
    name: 'ticket',
    description: '',
    usage: 'ticket <create:close>',
    args: true,
    argsCount: '1',
    execute(client, message, args) {
        const { guild, author, channel } = message;
        const roleName = ''
        const categoryId = guild.cache.get(c => c.name == roleName && c.type == 'category')
        const staff = guild.roles.cache.find(c => c.name == roleName).id
        guild.channels.create(channelName, {type: 'text'}).then(
            (createdChannel) =>{
                createdChannel.setParent(categoryId).then(
                    (settedParent) => {
                        settedParent.updateOverwrite(message.guild.roles.cache.find(role => role.name === "@everyone"), {
                            SEND_MESSAGES: false,
                            VIEW_CHANNEL: false
                        });
                        settedParent.updateOverwrite(message.author.id, {
                            SEND_MESSAGES: true,
                            CREATE_INSTANT_INVITE: false,
                            READ_MESSAGES: true,
                            ATTACHED_FILES: true,
                            ADD_REACTIONS: true,
                            CONNECT: true,
                            READ_MESSAGES_HISTORY: true,
                            VIEW_CHANNEL: true,
                            READ_MESSAGES_HISTORY: true
                        });
                        settedParent.updateOverwrite(message.guild.roles.cache.get(staff), {
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true,
                            READ_MESSAGES: true,
                            READ_MESSAGES_HISTORY: true
                        });
                        settedParent.send(`${person}, <@&${staff}>`).then(msg => msg.delete({ timeout: 1000}));
    
                    }).catch(err => {
                        message.channel.send('ERROR: ' + err)
                    })
            })
    }
}
