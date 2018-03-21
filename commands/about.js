module.exports = {
    run: async (client, msg, args) => {
        const info = [
            '__About **Sky**__',
            '',
            'Sky is a fun Discord bot dedicated to spicing up your Discord server.',
            '',
            `• is in **${client.guilds.size}** guilds.`,
            `• is monitoring **${client.channels.size}** channels.`,
            `• is playing with **${client.users.size}** other users.`,
            `• is running Node.js version **${process.version}**.`,
            `• is running Discord.js version **${require('discord.js').version}.**`,
            `• is looking for new users! Use \`;help\` to find out how you can use Sky.`
        ].join('\n');
        msg.channel.send(info);
    },
    meta: {
        aliases: ['about', 'info'],
        ownerOnly: false,
        description: 'Displays information about Sky.',
        usage: ''
    }
}