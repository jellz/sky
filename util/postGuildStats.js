module.exports = {
    run: async (client) => {
        const snek = require('snekfetch');

        if (!client.config.botLists) return;

        // var prevGuild = prevGuild ? prevGuild : client.guilds.size;
        // if (prevGuild == client.guilds.size) return console.log('Did not send API request due to same amount of guilds!');
        
        // Sending to bots.discord.pw
        const dbotsRes = await snek.post(`https://bots.discord.pw/api/bots/${client.user.id}/stats`)
        .set('Authorization', client.config.botLists.dbotsToken)
        .send({ server_count: client.guilds.size });

        // Sending to botsfordiscord.com
        const bfdRes = await snek.post(`https://botsfordiscord.com/api/v1/bots/${client.user.id}`)
        .set('Authorization', client.config.botLists.bfdToken)
        .send({ server_count: client.guilds.size });
        
        // Sending to discordbots.org
        const DBL = require('dblapi.js');
        const dblRes = new DBL(client.config.botLists.dblToken);
        dblRes.postStats(client.guilds.size);

        // console.log('Successfully posted guild count to 3 bot lists');
        // prevGuild = client.guilds.size;
    }
}