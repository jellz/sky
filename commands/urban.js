const trim = (str, max) => (str.length > max) ? `${str.slice(0, max - 3)}...` : str;
const snek = require('snekfetch');

module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send(`\\❌ You need to provide a word to get the definition for.`);
        const m = await msg.channel.send(`<a:skyloading:397962260540293120> Getting definition for \`${args.join(' ')}\`..`);    
        const { body } = await snekfetch.get('https://api.urbandictionary.com/v0/define').query({ term: args.join(' ') });        
        if (body.result_type === 'no_results') return m.edit(`\\❌ No results found.`);        
        const [answer] = body.list;
        const m = await msg.channel.send(`<a:skyloading:397962260540293120> Getting definition for \`${args.join(' ')}\`...`);    
        const { body } = await snek.get('https://api.urbandictionary.com/v0/define').query({ term: args.join(' ') });        
        if (body.result_type == 'no_results') return m.edit(`\\❌ No results found.`);        
        m.edit(`__**Word:**__ ${args.join(' ')}\n\n__**Definition:**__\n${trim(answer.definition, 1024)}\n\n__**Example(s):**__\n${trim(answer.example, 1024)}\n\n__**Rating:**__ \\👍 ${answer.thumbs_up} thumbs up. \\👎 ${answer.thumbs_down} thumbs down.\n\n__**Tags:**__\n${body.tags.join(', ')}`);
    },
    meta: {
        name: 'urban',
        ownerOnly: false,
        description: 'Get the definition of a word directly from Urban Dictionary.',
        usage: '<%word%>'
    }
}
