if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

const fs = require('fs');
const Discord = require('discord.js');
const Enmap = require('enmap');
require('dotenv-flow').config();

const client = new Discord.Client({
	disableEveryone:  true,
	messageCacheMaxSize: 500,
	messageCacheLifetime: 120,
	messageSweepInterval: 60
});

client.commands = new Enmap();
client.aliases = new Enmap();

fs.readdir('./events/', async (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		const evt = require(`./events/${file}`);
		let evtName = file.split('.')[0];
		console.log(`Loaded event '${evtName}'`);
		client.on(evtName, evt.bind(null, client));
	});
});

fs.readdir('./commands/', async (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/${file}`);
		let cmdName = file.split('.')[0];
		console.log(`Loaded command '${cmdName}'`);
		client.commands.set(cmdName, props);
		props.help.aliases.forEach(alias => {
			client.aliases.set(alias, cmdName);
		});
	});
});

process.on('SIGTERM', async () => {
	await console.info('SIGTERM signal received.');
	await console.log('Bot shutting down...');
	await client.destroy(() => {
		console.log('Bot has shut down.');
		process.exit(0);
	});
});

process.on('unhandledRejection', (reason, p) => {
	console.log('Unhandled Rejection at:', p, 'Reason:', reason);
});

client.login();