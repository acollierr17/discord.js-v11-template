const { RichEmbed } = require('discord.js');
const { embedColor, discord, invite } = require('../config');
const { noBotPerms } = require('../utils/errors');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('ADD_REACTIONS')) return noBotPerms(message, 'ADD_REACTIONS');
    if (!perms.has('MANAGE_MESSAGES')) return noBotPerms(message, 'MANAGE_MESSAGES');

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
    await message.author.send(inviteEmbed).catch(err => {
        client.logger.error(err);
        return message.reply('you have DMs disabled! I could not send you the invite link. Enable them to receive the bot invite link.');
    });
};

exports.help = {
    name: 'invite',
    aliases: ['bot', 'botinvite'],
    description: 'Receive a DM with information on inviting the bot to your server.',
    help: 'invite'
};