module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute: async (client , message ,args) => {
        const msg = await message.channel.send(`🏓 Pinging ...`);

        msg.edit(`🏓 Pong! \nAPI Latency is ${Math.round(client.ping)}ms`);

    }
}