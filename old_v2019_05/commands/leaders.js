const Discord = require("discord.js");
const mongoose = require("mongoose");
const Coins = require("../models/money.js");
mongoose.connect('', {
  useNewUrlParser: true
})

module.exports.run = async (bot, message, args) => {
    await message.delete();
    //Grab all of the users in said server
    Coins.find({
      serverID: message.guild.id
    }).sort([
      ['coins', 'descending']
    ]).exec((err, res) => {
      if (err) console.log(err);
  
      let embed = new Discord.RichEmbed()
        .setTitle("Coins Leaderboard")
      //if there are no results
      if (res.length === 0) {
        embed.setColor("RED");
        embed.addField("No data found", "Please type in chat to gain coins!")
      } else if (res.length < 10) {
        //less than 10 results
        embed.setColor("BLURPLE");
        for (i = 0; i < res.length; i++) {
          let member = message.guild.members.get(res[i].userID) || "User Left"
          if (member === "User Left") {
            embed.addField(`${i + 1}. ${member}`, `**Coins**: ${res[i].money}`);
          } else {
            embed.addField(`${i + 1}. ${member.user.username}`, `**Coins**: ${res[i].money}`);
          }
        }
      } else {
        //more than 10 results
        embed.setColor("BLURPLE");
        for (i = 0; i < 10; i++) {
          let member = message.guild.members.get(res[i].userID) || "User Left"
          if (member === "User Left") {
            embed.addField(`${i + 1}. ${member}`, `**Coins**: ${res[i].money}`);
          } else {
            embed.addField(`${i + 1}. ${member.user.username}`, `**Coins**: ${res[i].money}`);
          }
        }
      }
  
      message.channel.send(embed);
    })
  }
  module.exports.help = {
    name: "leaders"
  } 