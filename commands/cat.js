var snek = require('snekfetch');

module.exports = {
    run: async (client, msg, args) => {
        let m = await msg.channel.send(':cat: Getting a random cat picture :cat:')
        const r = await snek.get('http://random.cat/meow');
        
        await msg.channel.send(':cat: Here is a random cat picture... :cat:', { files: [r.body.file] });
         m.delete()
    },
    meta: {
        name: 'cat',
        ownerOnly: false,
        description: 'Return a picture of a cat. Cuteness not guaranteed.',
        usage: ''
    }
}
