const { Client } = require('discord.js');
const client = new Client({ disableEveryone: true});
const fs = require('fs');
client.config = require('./config.json');
client.login(client.config.token);
client.db = require('rethinkdbdash')({ db: 'sky' });
client.tempProfiles = {};
exports.client = client;

// Cleverbot
const Cleverbot = require('cleverbot-node');
const cleverbot = new Cleverbot();
cleverbot.configure({ botapi: client.config.cleverbotKey });
exports.cleverbot = cleverbot;



fs.readdir('./events', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

