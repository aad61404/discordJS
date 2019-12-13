module.exports = {
	name: 'server',
	description: 'Display info about this server.',
    execute: async (client , message ,args) => {
		await message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};