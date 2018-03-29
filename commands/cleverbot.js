module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${client.config.prefix + module.exports.meta.aliases[0] + ' ' + module.exports.meta.usage}\`\`\``);
        const query = args.join(' ');
        msg.channel.startTyping();
        const cleverbot = require('../index.js').cleverbot;
        await cleverbot.write(query, async function(response) {
            setTimeout(() => {
                msg.channel.stopTyping();
                msg.channel.send(`**${msg.author.username}**, ${response.output}`);
            }, 1500)
        });
    },
    meta: {
        aliases: ['cleverbot', 'cb'],
        ownerOnly: false,
        description: 'Talk with the Sky cleverbot.',
        usage: '<%input%>'
    }
}