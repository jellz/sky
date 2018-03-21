module.exports = {
    run: async (client, msg, args) => {
        const r = client.db;
        const leaderboard = [];
        leaderboard.push('**__DISPLAYING TOP 10 USERS (GLOBAL)__**');
        var place = 0;
        const lb = (await r.table('globalPoints').run()).sort((a, b) => b.points - a.points).slice(0, 10)
        .forEach(element => {
            place++;
            leaderboard.push(`**[#${place}]** | **${element.tag}** ${element.id == '250536623270264833' ? '\\👑' : ''} with **${element.points}** points.`);
        });
        msg.channel.send(leaderboard.join('\n'));
    },
    meta: {
        aliases: ['leaderboard', 'lb'],
        ownerOnly: false,
        description: 'View the Sky leaderboard.',
        usage: ''
    }
}
