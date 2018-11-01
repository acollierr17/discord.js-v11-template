const { RichEmbed, version: discordVersion } = require('discord.js');
const moment = require('moment');
const { embedColor } = require('../config');
const { version } = require('../package.json');
const { noBotPerms } = require('../utils/errors');
require('moment-duration-format');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('EMBED_LINKS')) return noBotPerms(message, 'EMBED_LINKS');

    const botUptime = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
    const memUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const guildSize = client.guilds.size.toLocaleString();
    const userSize = client.users.size.toLocaleString();

    const statsEmbed = new RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setColor(embedColor)
        .addField('Guilds', guildSize, true)
        .addField('Users', userSize, true)
        .addField('Uptime', botUptime, true)
        .addField('Memory', `${Math.round(memUsage)} MB`, true)
        .addField('Discord.js', `v${discordVersion}`, true)
        .addField('Node', `${process.version}`, true)
        .setFooter(`Bot Version: v${version}`)
        .setTimestamp();

    message.channel.send(statsEmbed);
};

exports.help = {
    name: 'stats',
    aliases: ['botstats', 'usage'],
    description: 'View bot statistics.',
    usage: 'stats'
};