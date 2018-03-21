module.exports = {
    run: async (client, msg, args) => {
        await msg.channel.send('Restarting Sky...');
        process.exit(0); // will auto restart due to PM2
    },
    meta: {
        aliases: ['restart', 'reboot'],
        ownerOnly: true,
        description: 'Fully restarts the bot. To add a new command, use reload command.',
        usage: ''
    }
}