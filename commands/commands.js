module.exports = {
    run: async (client, msg, args) => {
        const fs = require('fs');
        const m = await msg.channel.send('<a:skyloading:397962260540293120> Gathering all commands...');
        await fs.readdir('./commands', (err, files) => {
            const commands = [];                
            if (err) return console.error(err);
            files.forEach(file => {
                const meta = require('../commands/' + file).meta;
                const cmdname = meta.aliases[0];
                if (msg.author.id !== client.config.ownerID && !require(`../commands/${file}`).meta.ownerOnly) {
                    commands.push(client.config.prefix + cmdname);
                } else {
                    commands.push(client.config.prefix + cmdname);
                }
            });
            const cmdMsg = [
                `\\❗ __Use **${client.config.prefix}help** for other bot help.__`,
                `\\❗ __Use **${client.config.prefix}cmdinfo <command name>** for information about a command.__`,
                ``,
                `**Displaying ${commands.length} Sky commands** \\➡ ${commands.join(', ')}`
            ].join('\n');
            m.edit(cmdMsg);
        });
    },
    meta: {
        aliases: ['commands', 'cmdlist'],
        ownerOnly: false,
        description: 'Returns a list of all available Sky commands.',
        usage: ''
    }
}
