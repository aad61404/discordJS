module.exports = {
    name : 'kick',
    description : 'Tag a member and kick them (but noty really)',
    excute(message) {
        if(!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them');
        }

        const taggedUser = message.mentions.users.first();

        message.channek.send(`You wanted to kick : ${taggedUser.username}`);
    }
}