module.exports = {
    run: async (client, msg, args) => {
        const { MessageAttachment } = require('discord.js');
        const target = args[0] ? msg.mentions.users.first() || client.users.get(args[0]) : msg.author;
        if (!target) return msg.channel.send('\\❌ Invalid user.');
        if (!args[1]) return msg.channel.send('\\❌ Please provide a message.');
        args.shift();
        await msg.channel.send(new MessageAttachment(await client.idiot.achievement(target.displayAvatarURL({ format: 'png', size: 128 })), args.join(' '), 'achievement.png'));
    },
    meta: {
        aliases: ['achievement', 'achieve'],
        ownerOnly: false,
        description: 'Image manipulation: pls.',
        usage: '[%mention%|%user ID%]'
    }
}