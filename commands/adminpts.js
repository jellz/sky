module.exports = {
    run: async (client, msg, args) => {
        const db = client.db.table('globalPoints');
        if (!args[0]) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${client.config.prefix + module.exports.meta.name + ' ' + module.exports.meta.usage}\`\`\``);
        if (args[0].toLowerCase() == 'give') {
            const target = args[1] ? msg.mentions.users.first() || client.users.get(args[1]) : false;
            if (!target) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${client.config.prefix + module.exports.meta.name + ' ' + module.exports.meta.usage}\`\`\``);
            if (!args[2] || isNaN(args[2])) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${client.config.prefix + module.exports.meta.name + ' ' + module.exports.meta.usage}\`\`\``);
            const obj = db.get(target.id).run();
            obj['points'] += parseInt(args[2]);
            await db.get(target.id).update(obj).run();
            msg.channel.send(`\\✅ Updated points of ${target.tag} (**+${args[2]}**).`);
        } else if (args[0].toLowerCase() == 'set') {
            const target = args[1] ? msg.mentions.users.first() || client.users.get(args[1]) : false;
            if (!target) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${client.config.prefix + module.exports.meta.name + ' ' + module.exports.meta.usage}\`\`\``);
            if (!args[2] || isNaN(args[2])) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${client.config.prefix + module.exports.meta.name + ' ' + module.exports.meta.usage}\`\`\``);
            const obj = db.get(target.id).run();
            obj['points'] = parseInt(args[2]);
            await db.get(target.id).update(obj).run();
            msg.channel.send(`\\✅ Updated points of ${target.tag} (**=${args[2]}**).`);
        } else if (args[0].toLowerCase() == 'take') {
            const target = args[1] ? msg.mentions.users.first() || client.users.get(args[1]) : false;
            if (!target) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${client.config.prefix + module.exports.meta.name + ' ' + module.exports.meta.usage}\`\`\``);
            if (!args[2] || isNaN(args[2])) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${client.config.prefix + module.exports.meta.name + ' ' + module.exports.meta.usage}\`\`\``);
            const obj = db.get(target.id).run();
            obj['points'] -= parseInt(args[2]);
            await db.get(target.id).update(obj).run();
            msg.channel.send(`\\✅ Updated points of ${target.tag} (**-${args[2]}**).`);        
        } else return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${client.config.prefix + module.exports.meta.name + ' ' + module.exports.meta.usage}\`\`\``);
    },
    meta: {
        name: 'adminpts',
        ownerOnly: true,
        description: 'Administrates Sky Points.',
        usage: '<"give"/"take"/set"> <%mention%|%user ID%> <%value%>'
    }
}