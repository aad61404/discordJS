const Discord = require("discord.js");
const mongoose = require("mongoose");
const Money = require("../models/money.js");
// mongoose.connect('mongodb+srv://test:test1234@cluster0-gravc.mongodb.net/test?retryWrites=true', {
//   useNewUrlParser: true
// })


module.exports.run = async (bot, message, args) => {

    await message.delete();
    
    Money.findOne({
        userID: message.author.id,
        serverID: message.guild.id
    }, (err, money)=>{
        if(err) console.log(err);

        let embed = new Discord.RichEmbed()
        .setTitle("Coins")
        .setColor("#4000FF")
        .setThumbnail(message.author.displayAvartarURL);


        if(!money) {
            embed.addField("Coins", "0", true);
            return message.channel.send(embed);
        }else {
            embed.addField("Coins", money.money, true);
            return message.channel.send(embed);
        }
    })
}


module.exports.help = {
    name:"fakecoins"
  }