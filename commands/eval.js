const { prefix, owner } = require('../config');

exports.run = async (client, message, args) => {

    if (message.author.id !== owner) return;

    let cmdUsage = client.commands.get('eval', 'help.usage');

    try {
        const code = args.join(' ');
        if (!code) return message.channel.send(`Usage: \`${prefix + cmdUsage}\``).then(msg => msg.delete(3000)).catch(err => client.logger.error(err));
        let evaled = eval(code);

        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);

        await message.channel.send(clean(evaled), { code: 'xl' });
    } catch (err) {
        await message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }

};

exports.help = {
    name: 'eval',
    aliases: [],
    description: 'Run raw Javascript code via the bot.',
    usage: 'eval <code>'
};

const clean = text => {
    if (typeof(text) === 'string') return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
};