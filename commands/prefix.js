const { prefix } = settings;

exports.run = async (client, message, args) => {

    message.channel.send(`Current prefix: \`${prefix}\``);
};

exports.conf = {
    aliases: []
};

exports.help = {
    name: 'prefix',
    description: 'View the current bot prefix',
    usage: 'prefix'
};