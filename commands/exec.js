module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${client.config.prefix + module.exports.meta.aliases[0] + ' ' + module.exports.meta.usage}\`\`\``);
        require('child_process').exec(args.join(' '), (error, stdout, stderr) => {
            if (error) {
                msg.channel.send(error);
                return console.error(error);
            }
            msg.channel.send(stdout.slice(0, 1500), { code: 'js' });
        });
    },
    meta: {
        aliases: ['exec'],
        ownerOnly: true,
        description: 'Executes a terminal command through the bot.',
        usage: '<%command%>'
    }
}