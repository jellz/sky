module.exports = {
    run: async (client, msg, args) => {
        const r = client.db;
        if (!args[0]) {
            const helpMain = [
                '__Help for **Sky** __',
                '',
                `For a list of commands, use \`${client.config.prefix}commands\`.`,
                'For in-depth information about a specific command, such as usage & description',
                `please use \`${client.config.prefix}cmdinfo <command>\`.`,
                '',
                '**Some common help categories are...**',
                `${client.config.prefix}help points`,
                `${client.config.prefix}help cleverbot`,
                '',
                'For live support, please join the support guild:',
                'https://discord.gg/s9qed5A',
                '... and we\'ll be happy to help.'
            ].join('\n');
            msg.channel.send(helpMain);
        } else if (args[0].toLowerCase() === 'points' || args[0].toLowerCase() === 'pts') {
            const pointsCmds = [`\`${client.config.prefix}lb\``, `\`${client.config.prefix}points\``, `\`${client.config.prefix}daily\``];
            const topUser = (await r.table('globalPoints').run()).sort((a, b) => b.points - a.points)[0].tag;
            const helpPoints = [
                '__Help for **Points**__',
                '',
                'One of Sky\'s many fun features is a *global* chat-based points system.',
                'Users earn points by chatting in any channel Sky can read.',
                'Sky\'s Points system does not include "levels" so you will not be seeing any **Level up!** messages.',
                'Points are often referred to as points or Sky Points™, so if you see someone talking about Sky Points™, you know what they mean.',
                '',
                // `Sky Points™ can also be gambled using the \`${client.config.prefix}bet\` command.`,
                // 'Say you bet 50 points: you either win, or you lose. Winning would mean you gain 50 points. Losing would mean you lose 50 points.',
                `The current points commands consist of: ${pointsCmds.join(' ')}.`,
                '',
                `Currently the user with the most Sky Points™ is **${topUser}**, see if you can overtake them!`
            ].join('\n');
            msg.channel.send(helpPoints);
        } else if (args[0].toLowerCase() === 'cleverbot' || args[0].toLowerCase() === 'ai') {
            // return msg.channel.send('Cleverbot is currently disabled.');
            // return msg.channel.send('Cleverbot has been permanently removed from Sky. This was not due to financial issues, it was due to some technical backend issues. Sorry for the inconvenience!');
            const helpCleverbot = [
                '__Help for **Cleverbot**__',
                '',
                'Sky has a built-in Cleverbot AI.',
                '',
                'Access to Cleverbot API does infact cost $$ but it is worth it.',
                'If you have any money to spare and would like to support the',
                `Cleverbot AI in Sky, please use the \`${client.config.prefix}about\` command`,
                'and ask in the support server. Donations are greatly appreciated.',
                '',
                `To use the Cleverbot AI, just use the \`${client.config.prefix}cb\` command.`,
                `For example -> **${client.config.prefix}cb how was your day?**`,
            ].join('\n');
            msg.channel.send(helpCleverbot);
        } else {
            msg.channel.send(`\\❌ Unknown support category. For a list of categories, please use \`${client.config.prefix}help\`.`);
        }
        
    },
    meta: {
        aliases: ['help', 'ahh', 'helpme'],
        ownerOnly: false,
        description: 'I\'m stuck Where do I go? Oh! Thanks Sky, the helpful bot.',
        usage: '[%category%]'
    }
}