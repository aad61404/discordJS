module.exports = {
    name: 'react',
    description: 'react!',
    execute: async (client, message, args) => {
        // const msg = await message.channel.send(`🏓 Pinging ...`);
        // msg.edit(`🏓 Pong! \nAPI Latency is ${Math.round(client.ping)}ms`);

        await message.react('🍎');
        await message.react('🍊');
        await message.react('🍇');

    }
}