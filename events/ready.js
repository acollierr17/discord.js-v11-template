require('dotenv-flow').config();
const { prefix, ver } = settings;
const version = {
    production: 'Production',
    development: 'Development'
};

module.exports = async client => {

    await console.log(`Logged in as ${client.user.tag} (${client.user.id}) in ${client.guilds.size} server(s).`);
    await console.log(`${version[ver]} version of the bot loaded.`);
    
    const cmdHelp = client.commands.get('help', 'help.name');
    
    client.user.setStatus('online');
    client.user.setActivity(`${prefix + cmdHelp}`, { type: 'PLAYING' })
        .catch(console.error);
};