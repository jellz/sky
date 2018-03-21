module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${client.config.prefix + module.exports.meta.name + ' ' + module.exports.meta.usage}\`\`\``);
        const query = args.join(' ');
        const m = await msg.channel.send('<a:skyloading:397962260540293120> Processing input...');
        const cleverbot = require('../index.js').cleverbot;
        await cleverbot.write(query, async function(response) {
            m.edit(`**${msg.author.username}**, ${response.output}`);
        });
    },
    meta: {
        aliases: ['cleverbot', 'cb'],
        ownerOnly: false,
        description: 'Talk with the Sky cleverbot.',
        usage: '<%input%>'
    }
}