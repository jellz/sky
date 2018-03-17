const snek = require('snekfetch');

module.exports = {
    run: async (client, msg, args) => {
        // Using "aws.random.cat" as the main API is currently down.
        const r = await snek.get('http://aws.random.cat/meow');
        msg.channel.send('Here is a random cat picture...', { files: [r.body.file] });
    },
    meta: {
        name: 'cat',
        ownerOnly: false,
        description: 'Return a picture of a cat. Cuteness not guaranteed.',
        usage: ''
    }
}
