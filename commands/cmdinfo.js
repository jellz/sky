module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${client.config.prefix + module.exports.meta.name + ' ' + module.exports.meta.usage}\`\`\``);
        const meta = require(`../commands/${args[0].toLowerCase()}`).meta;
        const m = await msg.channel.send('<a:skyloading:397962260540293120> Fetching command data...');
        const infoMsg = [
            `\\❓ **__Command Info:__** ${meta.name} \\❓`,
            ``,
            `**Owner Only?** ${meta.ownerOnly ? 'Yes' : 'No'}`,
            `**Description:** ${meta.description}`,
            `**Usage:** ${client.config.prefix}${meta.name} ${meta.usage}`
        ].join('\n');
        m.edit(infoMsg);
    },
    meta: {
        aliases: ['cmdinfo', 'cmd'],
        ownerOnly: false,
        description: 'Returns information about the specified command.',
        usage: '<%command name%>'
    }
}