module.exports = {
    run: async (client, msg, args) => {
        function clean(text) {
            if (typeof(text) === 'string') {
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            } else {
                return text;
            }
        }
        try {
            const code = args.join(' ');
            let evaled = eval(code);
            if (typeof evaled !== 'string') {
                evaled = require('util').inspect(evaled);
            }
            msg.channel.send(clean(evaled), {code:'xl'});
        } catch (err) {
            msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    },
    meta: {
        aliases: ['eval', 'ev'],
        ownerOnly: true,
        description: 'Evaluates raw Javascript.',
        usage: '<%expression%>'
    }
}