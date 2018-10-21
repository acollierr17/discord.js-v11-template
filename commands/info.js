const { RichEmbed } = require('discord.js');
const { embedColor, discord, owner } = require('../config');
const { version } = require('../package.json');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('EMBED_LINKS')) return message.channel.send('I can\'t embed links! Make sure I have this permission: `Embed Links`').then(msg => msg.delete(5000));

    const infoEmbed = new RichEmbed()
        .setTitle(client.user.username)
        .setDescription('This bot serves as a template for a Discord.js bot. Feel free to change anything you need!')
        .setColor(embedColor)
        .addField('Bot Author', `<@${owner}>`)
        .addField('Support Discord', discord)
        .addField('Bot Version', version)
        .setFooter('© 2018 Nerd Cave Development');

    message.channel.send(infoEmbed);
};

exports.help = {
    name: 'info',
    aliases: ['botinfo'],
    description: 'View bot information.',
    usage: 'info'
};