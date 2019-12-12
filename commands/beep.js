module.exports = {
    name : 'beep',
    description : 'here is beep',
    execute(message , args) {
        return message.channel.send('Boop');
    }
}