const {Client, Collection} = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const client = new Client({intents: 1539, partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER']});
const superagent = require('superagent').agent();
const Logger = require ('./utils/Logger');

client.commands = new Collection ();

['EventUtil','CommandUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });

client.on("message", message => {
    if (message.content.startsWith('salut')) message.channel.send('Bouh !');
});

process.on ('exit', code => { Logger.client(`Le processus s'est arrèté avec le code: ${code} !`)});
process.on('uncaughtException', (err, origin) => { Logger.error(`UNCAUGHT_EXCEPTION: ${err}`) ;console.error(`Origine: ${origin}`)});
process.on ('unhandledRejection', (reason, promise) => { Logger.warn(`UNHANDLED_REJECTION: ${reason}`);console.log(promise)});
process.on('warning',(...args) => Logger.warn(...args));

client.login(process.env.DISCORD_TOKEN);