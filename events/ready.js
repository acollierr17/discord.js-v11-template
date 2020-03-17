const { prefix } = require('../config');
const { version } = require('../package.json');

module.exports = async client => {

  await client.logger.log(`[ Name: ${client.user.tag} ].`);
  await client.logger.log(`[ Version: ${version} ].`);
    
    const cmdHelp = client.commands.get('help', 'help.name');
   
    client.user.setStatus('online');
    client.user.setActivity(`${client.guilds.size} guild's | ${prefix + cmdHelp}`, { type: 'PLAYING' })
        .catch(err => client.logger.error(err));
};
