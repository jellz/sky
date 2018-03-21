// https://discordapp.com/api/oauth2/authorize?client_id=397691694461747210&permissions=238414913&scope=bot

module.exports = {
    run: async (client, msg, args) => {
        msg.channel.send('Sky does not require many permisisons. In fact, the only moderator permissions it needs are Manage Nicknames and Manage Messages. To add Sky to your server, use this link; <https://discordapp.com/oauth2/authorize?client_id=397691694461747210&permissions=238414913&scope=bot>. Remember you need to have the Manage Server permission to add the bot.')
    },
    meta: {
        aliases: ['invite', 'add'],
        ownerOnly: false,
        description: 'Returns an invite link for Sky.',
        usage: ''
    }
}