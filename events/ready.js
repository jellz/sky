module.exports = {
    run: async (client) => {
        console.log(`Sky: logged in as ${client.user.tag}!`);
        client.user.setActivity(client.config.prefix + 'help | https://jellz.fun/sky');
        (await client.db.table('globalPoints').run()).forEach(element => {
            client.tempProfiles[element.id] = { earningPoints: true };
        });
        console.log('Set all points profiles to EARNING POINTS.');
        require('../website/website.js').app.listen(process.env.PORT || 3003, function() {
            console.log(`Listening on port ${process.env.PORT || 3003}.`);
        });
        await require('../util/postGuildStats.js').run(client);
        setInterval(() => {
            require('../util/postGuildStats.js').run(client);
        }, 240000);
    }
}