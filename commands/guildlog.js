const fs = require('fs');

module.exports = {
    run: async (client, msg, args) => {
        const m = await msg.channel.send('<a:skyloading:397962260540293120> Dumping all guilds to file...');
        fs.appendFile(`/home/jellz/personalcdn/data/${msg.id}-guilds.txt`, `--- BEGIN GUILD LOG (${client.guilds.size}) ---`, (err) => { if (err) console.error(err) });
        await client.guilds.array().forEach(element => {
            fs.appendFile(`/home/jellz/personalcdn/data/${msg.id}-guilds.txt`, ` \nNAME: ${element.name} ID: ${element.id} OWNER: ${element.owner.user.tag} (${element.owner.user.id}) SIZE: ${element.memberCount} `, (err) => { if (err) console.error(err) });
        }, (err) => console.error(err));
        fs.appendFile(`/home/jellz/personalcdn/data/${msg.id}-guilds.txt`, '\n--- END GUILD LOG ---', (err) => { if (err) console.error(err) });
        m.edit(`\\✅ Done! You can view the file @ <https://cdn.jellz.fun/${msg.id}-guilds.txt>`);   
    },
    meta: {
        aliases: ['guildlog'],
        ownerOnly: true,
        description: 'Dump a log of all guilds the bot is currently in.',
        usage: ''
    }
}