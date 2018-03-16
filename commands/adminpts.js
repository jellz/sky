module.exports = {
    run: async (client, msg, args) => {
        const db = client.db.table('globalPoints');
        if (!args[0]) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${meta.usage}\`\`\``);
        if (args[0].toLowerCase() == 'edit') {
            const target = args[1] ? msg.mentions.users.first() || client.users.get(args[1]) : false;
            if (!target) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${meta.usage}\`\`\``);
            if (!args[2] || isNaN(args[2])) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${meta.usage}\`\`\``);
            const obj = db.get(target.id).run();
            obj['points'] += args[2];
            db.get(target.id).update(obj).run().then(() => () => {
                msg.channel.send(`\\✅ Updated points of ${target.tag} (**${args[2].startsWith('-') ? '' : '+'}${args[2]}**).`);
            });
        } else if (args[0].toLowerCase() == 'set') {
            const target = args[1] ? msg.mentions.users.first() || client.users.get(args[1]) : false;
            if (!target) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${meta.usage}\`\`\``);
            if (!args[2] || isNaN(args[2])) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${meta.usage}\`\`\``);
            const obj = db.get(target.id).run();
            obj['points'] = args[2];
            db.get(target.id).update(obj).run().then(() => () => {
                msg.channel.send(`\\✅ Updated points of ${target.tag} (**=${args[2]}**).`);
            });            
        } else return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${meta.usage}\`\`\``);
    },
    meta: {
        name: 'adminpts',
        ownerOnly: true,
        description: 'Administrates Sky Points.',
        usage: '<"edit"/"set"> <%mention%|%user ID%> <%value%>'
    }
}