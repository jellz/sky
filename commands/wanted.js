module.exports = {
    run: async (client, msg, args) => {
        const { MessageAttachment } = require('discord.js');
        const target = args[0] ? msg.mentions.users.first() || client.users.get(args[0]) : msg.author;
        if (!target) return msg.channel.send('\\❌ Invalid user.');
        await msg.channel.send(new MessageAttachment(await client.idiot.wanted(target.displayAvatarURL({ format: 'png', size: 128 })), 'wanted.png'));
    },
    meta: {
        aliases: ['wanted'],
        ownerOnly: false,
        description: 'Image manipulation: makes a Wanted poster of the target\'s avatar.',
        usage: '[%mention%|%user ID%]'
    }
}