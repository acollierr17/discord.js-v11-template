const { RichEmbed } = require('discord.js');

const colors = {
    red: '#FF4500'
};

module.exports.noPerms = (message, perm) => {

    let embed = new RichEmbed()
        .setTitle('Error')
        .setDescription(message.author + ', you lack certain permissions to do this action.')
        .setColor(colors.red)
        .addField('Permission', `\`${perm}\``);

    message.channel.send(embed).then(m => m.delete(5000)).catch(err => console.log(err));
};