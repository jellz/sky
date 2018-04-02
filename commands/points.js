module.exports = {
    run: async (client, msg, args) => {
        const db = client.db;
        if (!args[0]) {
            var points = await db.table('globalPoints').get(msg.author.id).run();
            if (!points) {
                msg.channel.send(`\\❌ **${msg.author.tag}** does not have a profile. Start chatting to automatically generate one. ${msg.guild.id == '110373943822540800' ? '(Discord Bots is an ignored guild!)' : ''}`);
            }
            msg.channel.send(`\\➡ **${msg.author.tag}** has **${points.points}** points.\n\\ℹ You can use \`${client.config.prefix}help points\` for more info on points.`);
        } else {
            const target = msg.mentions.users.first() || client.users.get(args[0]);
            if (!target) return msg.channel.send('\\❌ Invalid users.');
            if (target.bot) return msg.channel.send('\\❌ Bots do not have Sky Points\\™.');
            var points = await db.table('globalPoints').get(target.id).run();
            if (!points) {
                msg.channel.send(`\\❌ **${target.tag}** does not have a profile. Get them to start chatting to automatically generate one. ${msg.guild.id == '110373943822540800' ? '(Discord Bots is an ignored guild!)' : ''}`);
            }
            msg.channel.send(`\\➡ **${target.tag}** has **${points.points}** points.\n\\ℹ You can use \`${client.config.prefix}help points\` for more info on points.`);
        }   
    },
    meta: {
        aliases: ['points', 'mypoints', 'balance', 'bal'],
        ownerOnly: false,
        description: 'Displays Sky Points\\™ profile of target.',
        usage: '[%mention%|%user ID%]'
    }
}
