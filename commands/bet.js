module.exports = {
    run: async (client, msg, args) => {
        if (!client.tempProfiles[msg.author.id].allowedToBet) return msg.channel.send('\\❌ Your 7 second gambling cooldown has not expired yet.');
        if (!args[0]) return msg.channel.send('\\❌ Please provide a number of points to bet.');
        const r = client.db;
        const profile = await r.table('globalPoints').get(msg.author.id).run();
        if (isNaN(args[0])) return msg.channel.send('\\❌ You can only bet a *number* of points.');
        args[0] = Math.floor(args[0]);
        if (args[0] < 0 || args[0] == 0) return msg.channel.send('\\❤ Stay positive. ');
        if (args[0] == 1) return msg.channel.send('\\❌ Minimum bet amount is **2** points. Please try again.');
        if (args[0] > 350) return msg.channel.send('\\❌ Maximum bet amount is **350** points. Please try again.');
        if (args[0] > profile['points']) return msg.channel.send('\\❌ You don\'t have that many points, bucko!');
        const m = await msg.channel.send('<a:skyloading:397962260540293120> Placing bet...');
        setTimeout(function() {
            m.edit('<a:skyrolling:401999822128939018> Fetching results...');
        }, 2000);
        await setTimeout(function() {
            if (Math.random() > 0.35) { // You lost hahaha
                m.edit(`\\❌ **You lost!** -${args[0]} points.`);
                profile['points'] = profile['points'] - args[0];
            } else { // You won GG!
                m.edit(`\\✅ **You won!** +${args[0]} points.`);
                profile['points'] = profile['points'] + args[0] * 2;
            }
            r.table('globalPoints').get(msg.author.id).update(profile).run();
        }, 2000);
        client.tempProfiles[msg.author.id].allowedToBet = await false;
        setTimeout(async function() {
            client.tempProfiles[msg.author.id].allowedToBet = await true;
        }, 7000);
    },
    meta: {
        name: 'bet',
        ownerOnly: false,
        description: 'Test your luck by gambling Sky Points™.',
        usage: '<%amount of points%>'
    }
}
