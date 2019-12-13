module.exports = {
    name: 'args-info',
    description: 'Information about the arguments provided!',
    args : true,
    execute: async (client , message ,args) => {
        if(args[0] === 'foo') {
            return message.channel.send('bar');
        }
        await message.channel.send(`arguments : ${args} \n Arguments : ${args.length} `);
    }
}