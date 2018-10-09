const { RichEmbed } = require('discord.js');
const { orange, discord, owner } = settings;

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('EMBED_LINKS')) return message.channel.send('I can\'t embed links! Make sure I have this permission: `Embed Links`').then(msg => msg.delete(5000));

    const infoEmbed = new RichEmbed()
        .setTitle(client.user.username)
        .setDescription('This bot serves as a template for a Discord.js bot. Feel free to change anything you need!')
        .setColor(orange)
        .addField('Bot Author', `<@${owner}>`)
        .addField('Support Discord', discord)
        .setFooter('© 2018 The Nerd Cave');

    message.channel.send(infoEmbed);
};

exports.conf = {
    aliases: ['botinfo']
};

exports.help = {
    name: 'info',
    description: 'View bot information.',
    usage: 'info'
};