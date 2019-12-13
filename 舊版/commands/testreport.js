const Discord = require("discord.js");
const Report = require("../models/report.js");
const mongoose =require("mongoose");

module.exports.run = async (bot, message, args) => {
    mongoose.connect('mongodb+srv://test:test1234@cluster0-gravc.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
    
    let rUser = message.mentions.members.first();
    if (!rUser) return message.reply("Can't find that member .");
    // console.log(rUser);
    let rreason = args.slice(1).join(" ");
    if(!rreason) return message.reply("Please supply a reason.");
    console.log(rreason);
    // console.log("in testreport");

    const report = new Report({
        _id: mongoose.Types.ObjectId(),
        username: rUser.user.username,
        userID: rUser.id,
        reason: rreason,
        rUsername: message.author.username, 
        rID: message.author.id,
        time: message.createdAt
    })
    report.save()
    .then(result=> console.log(result))
    .catch(err=> console.log(err))

    message.reply("That report has been saved to the database!")
}

module.exports.help = {
    name: "testreport"
}