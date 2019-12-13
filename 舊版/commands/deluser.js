const Discord = require("discord.js");
const mongoose = require("mongoose");
const Coins = require("../models/money.js");
mongoose.connect('mongodb+srv://test:test1234@cluster0-gravc.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true
})


module.exports.run = async (bot, message, args) => {

    await message.delete();
    
    let member = message.mentions.members.first();
    if(!member) return message.reply("oof");

    Coins.findOneAndDelete({userID: member.id, serverID: message.guild.id}, (err, res) => {
            if(err) console.log(err)
            console.log("User with ID" + member.id + "has been deleted from the coin database.");
    })

}


module.exports.help = {
    name:"deluser"
  }