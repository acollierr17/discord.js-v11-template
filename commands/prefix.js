const { prefix } = require('../config');

exports.run = async (client, message, args) => {

    message.channel.send(`Current prefix: \`${prefix}\``);
};

exports.help = {
    name: 'prefix',
    aliases: [],
    description: 'View the current bot prefix',
    usage: 'prefix'
};