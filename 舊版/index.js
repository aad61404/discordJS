const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
// const mongoose = require("mongoose");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const Money = require("./models/money.js");
// mongoose.connect('mongodb+srv://test:test1234@cluster0-gravc.mongodb.net/test?retryWrites=true', {
//   useNewUrlParser: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  // bot.user.setActivity("tutorials on TSC", {type: "WATCHING"});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = botconfig.prefix;

  if(message.content.startsWith(prefix)) {
    let commandfile = bot.commands.get(command.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
  } else {
    let coinstoadd = Math.ceil(Math.random() * 50 );
    console.log(coinstoadd+ " coins"); 
    Money.findOne({
      userID: message.author.id,
      serverID: message.guild.id
    }, (err, money) =>{
      if(err) console.log(err);
      if(!money){
        const newMoney = new Money({
          userID: message.author.id,
          serverID: message.guild.id,
          money: coinstoadd
        })
        newMoney.save().catch(err => console.log(err));
      }else {
        money.money = money.money+ coinstoadd;
        money.save().catch(err => console.log(err));
      }
    })
  }

});

bot.login(tokenfile.token);
