
const Discord = require('discord.js');

// inside a command, event listener, etc.


module.exports = {
    name: 'embeds',
    aliases: "",
    category: "",
    description :　'embeds',
    usage : "",
    execute: async (client , message ,args) => {
        const exampleEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addField('Regular field title', 'Some value here')
        .addBlankField()
        .addField('Inline field title', 'Some value here', true)
        .addField('Inline field title', 'Some value here', true)
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
        await message.channel.send(exampleEmbed);
    }
}


/**
 * This is the basic command layout
 * module.exports = {
 *  name: "Command name",
 *  aliases: ["array", "of", "aliases"]
 *  category: "Category name",
 *  description: "Command description"
 *  usage: "[args input]",
 *  execute: async (client , message ,args) => {
 *      The code in here to execute
 *      await message.channek.send(``);
 *  }
 * }
 */