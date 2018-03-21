module.exports = {
    run: async (client, msg, args) => {
        const target = args[0] ? client.guilds.get(args[0]) : msg.guild;
        if (!target) return msg.channel.send('\\❌ Invalid server.');
        const guildDbInfo = await client.db.table('guildConfig').get(target.id).run();
        const extraInfo = {
            humans: target.memberCount - target.members.array().filter(member => member.user.bot).length,
            bots: target.members.array().filter(member => member.user.bot).length,
            boldName: `**${target.name}**`
        };
        const info = [
            `__About **${target.name}**__`,
            '',
            `• has **${extraInfo.humans}** humans & **${extraInfo.bots}** bots.`,
            `• ${guildDbInfo.premium ? '**has** Sky Premium.' : '**does not** have Sky Premium.'}`,
            `• ${guildDbInfo.official ? '**is** an official Sky guild.' : '**is not** an official Sky guild.'}`,
            `• verification level is set to **${target.verificationLevel}**.`,
            `• has **${target.channels.size}** channels.`,
            `• has **${target.roles.size}** roles.`,
            `• is owned by **${target.owner.user.tag}**.`,
            `• is located in **${target.region.toUpperCase()}**.`,
            `• has **${target.emojis.size}** custom emojis.`,
            `• ${target.iconURL() ? 'icon can be found @ ' + target.iconURL() : 'no server icon'}.`
        ].join('\n');
        msg.channel.send(info);
    },
    meta: {
        aliases: ['server', 'serverinfo', 'guild', 'guildinfo'],
        ownerOnly: false,
        description: 'Displays information about the target server.',
        usage: '[%server ID%]'
    }
}