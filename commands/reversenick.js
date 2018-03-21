// thanks FreeCodeCamp.org for this reverse function
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

module.exports = {
    run: async (client, msg, args) => {
        if (args[0]) {
            const member = msg.mentions.members.first() || msg.guild.members.get(args[0]);
            if (!member) return msg.channel.send('\\❌ Invalid member.');
            member.setNickname(reverseString(member.user.username));
        } else {
            msg.guild.members.array().forEach(member => {
                if (member.nickname !== reverseString(member.user.username)) member.setNickname(reverseString(member.user.username));
            });
        }
    },
    meta: {
        aliases: ['reversenick'],
        ownerOnly: true,
        description: '(Dev command, not to be used outside of dev guild!) Reverses nickname of target, if no target specified: reverses nicknames of everyone in the server.',
        usage: '[%mention%|%user ID%]'
    }
}