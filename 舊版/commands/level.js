const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let xp = require('../xp.json');
let purple = botconfig.purple;
const fs = require("fs");
module.exports.run = async (bot, message, args) => {

  let xpAdd = Math.floor(Math.random() *7);
  console.log(xpAdd);

  if(!xp[message.author.id]) {
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXP = curlvl * 300;
  let difference = nxtLvlXP - curxp;
  // xp[message.author.id].xp = curxp + xpAdd;
  // if(nxtLvl <= xp[message.author.id].xp){
  // xp[message.author.id].level = curlvl + 1;
    let lvlUp = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(purple)
    .setTitle("Level", curlvl, true)
    .addField("XP", curxp, true)
    // .addField("New Level", curlvl +1);
    .setFooter(`${difference} XP till level up`, message.author.displayAvatarURL);

    message.channel.send(lvlUp).then(msg => {msg.delete(5000)});
  // }
  // console.log(`level is ${xp[message.author.id].level}`);
  fs.writeFile("./xp.json", JSON.stringify(xp), (err)=> {
    if(err) console.log(err)
  })
}

module.exports.help = {
  name:"level"
}
