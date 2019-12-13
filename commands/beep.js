module.exports = {
    name : 'beep',
    description : 'here is beep',
    execute: async (client , message ,args) => {
        await message.channel.send('Boop');
    }
}