module.exports = {
    run: async (client, msg, args) => {
        const target= args[0] ? msg.mentions.users.first() || client.users.get(args[0]) : msg.author;
        if (!target) return msg.channel.send('\\❌ Invalid user.');
        const m = await msg.channel.send(`<a:skyloading:397962260540293120> Grabbing avatar of **${target.tag}**...`);
        m.edit(`\\😀 Avatar of **${target.tag}**...\n${target.avatarURL()}`);        
    },
    meta: {
        aliases: ['avatar'],
        ownerOnly: false,
        description: 'Displays the avatar of the target user.',
        usage: '[%mention%|%user ID%]'
    }
}