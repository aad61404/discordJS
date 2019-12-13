const Discord = require("discord.js");
let coins = require('../coins.json');
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
  // !coins
  if (!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 0
    }
  }
  let coinAmt = Math.floor(Math.random() * 1) + 1;
  let baseAmt = Math.floor(Math.random() * 1) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);
  if (coinAmt == baseAmt) {
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
    fs.writeFile("coins.json", JSON.stringify(coins), (err) => {
      if (err) console.log(err)
    });
  };

  let uCoins = coins[message.author.id].coins;

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField(":money_with_wings:", uCoins);

  message.channel.send(coinEmbed);

}

module.exports.help = {
  name:"coins"
}
