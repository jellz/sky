# Sky

Sky is a fun Discord bot featuring a chat-based points system & soundboard. It is dedicated to spicing up your Discord server. Sky is not spread between music functionality, utility, moderation & fun - it serves to deliver one purpose: enjoyment. Sky aims to deliver additional enjoyment to users on their Discord server, ranging from a responsive soundboard to a global currency that includes features such as ~~gambling~~ & global leaderboard.


[![](https://discordapp.com/api/guilds/395189137981964288/embed.png?style=banner2)](https://jellz.fun/discord)

---

## Contributing

All contributions are welcome - that being said, not all contributions will be implemented.  
If you have an idea you would like to see in Sky, please create an [Issue](https://github.com/jellz/sky/issues) or [Pull Request](https://github.com/jellz/sky/pulls) thoroughly explaining your idea/contribution.  

### Can I self-host Sky?

I will not actively support folks who try to self-host Sky. I will not thoroughly explain how to self-host Sky. That being said, I understand some users might want to play with Sky's currency system on their server or contribute to the Sky repo, so below is an agreement & basic instructions on self-hosting Sky.

### Self-hosting Agreement

**EDIT**: Sky has been discontinued. If you would like to host this version of Sky or fork & build upon it, you can. Just please make sure to give credit to the original author; [me.](https://github.com/jellz) Please remove the invite link to my server from the help command, too, as my server won't offer support for user-hosted instances.

### How do I self-host Sky?

To get a local version of Sky running, you will need Node.js & a Rethink instance setup. Clone this repo and run `npm install`, the dependencies should install. Sky's soundboard also uses FFMPEG & Node Opus, so you'll need those to use the soundboard. After the dependencies are installed, fill in the **config.json.example** and rename it to **config.json**. Ensure your Rethink instance is running on port 28015 (the default port). Create a database called **sky** then create the tables **globalPoints** and **guildConfig**. Finally, start the bot using `npm start`. By default, Sky's webserver runs on port **3003**.
