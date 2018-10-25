const { RichEmbed } = require('discord.js');
const { owner, prefix, embedColor, discord } = require('../config');

exports.run = async (client, message, args) => {

    let perms = message.guild.me.permissions;
    if (!perms.has('EMBED_LINKS')) return message.channel.send('I can\'t embed links! Make sure I have this permission: `Embed Links`').then(msg => msg.delete(5000));

    let cmds = Array.from(client.commands.keys());
    let cmd = args[0];

    if (cmd) {
        if (!cmds.includes(cmd)) return;

        let cmdObj = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
        let cmdHelp = cmdObj.help;

        let cmdHelpEmbed = new RichEmbed()
            .setTitle(`${cmdHelp.name} | Help Information`)
            .setDescription(cmdHelp.description)
            .addField('Usage', `\`${cmdHelp.usage}\``, true)
            .setColor(embedColor);

        if (cmdHelp.aliases.length) cmdHelpEmbed.addField('Aliases', `\`${cmdHelp.aliases.join(', ')}\``, true);

        return message.channel.send(cmdHelpEmbed);
    }

    const helpCmds = cmds.map(cmd => {
        return '`' + cmd + '`';
    });

    const helpEmbed = new RichEmbed()
        .setTitle('Help Information')
        .setDescription(`View help information for ${client.user}.`)
        .addField('Current Prefix', prefix)
        .addField('Bot Commands', helpCmds.join(' | '))
        .addField('Found an issue?', `Please report any issues to <@${owner}> via the Support Discord: ${discord}.`)
        .setColor(embedColor);

    message.channel.send(helpEmbed);
};

exports.help = {
    name: 'help',
    aliases: ['h', 'halp'],
    description: 'View all commands and where to receive bot support.',
    usage: 'help'
};