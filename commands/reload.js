module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send('\\❌ Please provide a command name to reload.');
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        msg.channel.send(`\\✅ Reloaded command \`${args[0]}\`.`);
    },
    meta: {
        aliases: ['reload', 'rl'],
        ownerOnly: true,
        description: 'Reloads the specified command.',
        usage: '<%command name%>'
    }
}