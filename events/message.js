const fs = require('fs');
module.exports = {
    run: async (client, msg) => {
        if (msg.author.bot) return;
        if (!msg.guild) return;
        if (msg.content.startsWith(client.config.prefix)) {
            const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            try {
                fs.readdir('commands', (err, files) => {
                    if (err) return console.error(err);
                    files.forEach(file => {
                        const meta = require('commands/' + file).meta;
                        if (meta.aliases.includes(command)) {
                            if (meta.ownerOnly == true && msg.author.id !== client.config.ownerID) return;
                            return require('commands/' + file).run(client, msg, args);
                        }
                    });
                });
            } catch (err) {
                msg.channel.send('An error occurred.');
                console.error(err);
            }
        } else {
            const guildDbInfo = await client.db.table('guildConfig').get(msg.guild.id).run();
            if (guildDbInfo['official']) return require('../util/points.js').run(client, msg.author, 2);
            if (guildDbInfo['premium']) return require('../util/points.js').run(client, msg.author, 2);
            return require('../util/points.js').run(client, msg.author);
        }
    }
}