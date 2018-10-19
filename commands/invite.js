const { RichEmbed } = require('discord.js');
const { embedColor, discord, invite } = require('../config');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('ADD_REACTIONS')) return message.channel.send('I can\'t add reactions! Make sure I have this permission: `Add Reactions`').then(msg => msg.delete(5000));
    if (!perms.has('MANAGE_MESSAGES')) return message.channel.send('I can\'t delete messages! Make sure I have this permission: Manage Messages`').then(msg => msg.delete(5000));

    const inviteEmbed = new RichEmbed()
        .setAuthor('Bot Invite Information', client.user.avatarURL)
        .setDescription('Bot Invite Information', client.user.avatarURL)
        .setDescription(`Hello ${message.author},
        
            **Before inviting, you need** \`MANAGE SERVER\` **or** \`ADMINISTRATOR\` **permissions to add bots to a server.** 
            
            **Bot Invite:**
            ${invite}

            **Support Server:**
            ${discord}
            `)
        .setColor(embedColor)
        .setTimestamp();

    await message.react('📧').then(message.delete(2500));
    await message.author.send(inviteEmbed);
};

exports.help = {
    name: 'invite',
    aliases: ['bot', 'botinvite'],
    description: 'Receive a DM with information on inviting the bot to your server.',
    help: 'invite'
};