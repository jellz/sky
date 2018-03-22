const moment = require('moment');
module.exports = {
    run: async (client, msg, args) => {
        const r = client.db;
        const points = await r.table('globalPoints').get(msg.author.id).run();
        if (!points) return msg.channel.send(`\\❌ **${msg.author.tag}** does not have a profile. Start chatting to automatically generate one. ${msg.guild.id == '110373943822540800' ? '(Discord Bots is an ignored guild!)' : ''}`);
        if (points.lastDaily) {
            const waiting = 8.64e+7
            const until = new Date().getTime() - points.lastDaily;
            const formatted = moment(new Date().getTime() + (waiting - until)).fromNow();
            if (until < waiting) return msg.channel.send(`\\❌ You've already ran this command today! Try again ${formatted}.`);
        }
        points.lastDaily = new Date().getTime();
        points.points += 100
        await r.table('globalPoints').get(msg.author.id).update(points).run();
        msg.channel.send('\\🎉 You got 100 points!');
    },
    meta: {
        aliases: ['daily'],
        ownerOnly: true,
        description: 'Get daily points!',
        usage: ''
    }
}
