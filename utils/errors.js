const { RichEmbed } = require('discord.js');
const permissions = require('./perms');

const colors = {
    red: '#FF4500'
};

const noPerms = (message, perm) => {

    let embed = new RichEmbed()
        .setTitle('Error')
        .setDescription(message.author + ', you lack certain permissions to do this action.')
        .setColor(colors.red)
        .addField('Permission', `\`${permissions[perm]} (${perm})\``);

    message.channel.send(embed).then(m => m.delete(5000)).catch(err => console.log(err));
};

const noBotPerms = (message, perm) => {
    message.channel.send(`I can't embed links! Make sure I have this permission: \`${permissions[perm]} (${perm})\``).then(msg => msg.delete(5000));
};

module.exports = { 
    noPerms,
    noBotPerms
};