const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    // if(message.author.id != "178657593030475776") return;
    // message.react('😃');
    let emoji = message.guild.emojis.find('name', "999")
    message.react(emoji)
}

module.exports.help = {
    name: "react"
}