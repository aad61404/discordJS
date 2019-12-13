const Discord = require("discord.js");
const fs =require("fs");
let config = require("../botconfig.json");

module.exports.noPerms =  (message,perm) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(config.red)
    .setTitle("NO PERMS")
    .addField("Insufficient permission", perm);

    message.channel.send(embed).then(m=> m.delete(5000));
}