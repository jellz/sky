module.exports = {
    run: async (client, msg, args) => {
        client.db.table('globalPoints').get(msg.author.id).run().then(data => msg.channel.send(JSON.stringify(data), { code: 'json' }));
    },
    meta: {
        aliases: ['debug'],
        ownerOnly: true,
        description: 'Reserved debug command.',
        usage: ''
    }
}