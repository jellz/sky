module.exports = {
    run: async (client, msg, args) => {
        const { MessageAttachment } = require('discord.js');
        const target = args[0] ? msg.mentions.users.first() || client.users.get(args[0]) : msg.author;
        if (!target) return msg.channel.send('\\❌ Invalid user.');
        await msg.channel.send(new MessageAttachment(await client.idiot.wanted(target.displayName, 'wanted.png')));
    },
    meta: {
        aliases: ['pls'],
        ownerOnly: false,
        description: 'Image manipulation: pls.',
        usage: '[%mention%|%user ID%]'
    }
}