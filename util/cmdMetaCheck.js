module.exports = {
    run: /* async breaks it */ (client, msg, meta) => {        
        return (meta.ownerOnly && msg.author.id !== client.config.ownerID) ? false : true;
    }
}
