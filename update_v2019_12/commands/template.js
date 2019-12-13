module.exports = {
    name: 'template',
    description: '',
    execute: async (client , message ,args) => {
        const msg = await message.channel.send(`🏓 Pinging ...`);
        msg.edit(`🏓 Pong! \nAPI Latency is ${Math.round(client.ping)}ms`);
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