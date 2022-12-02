const {Client, Collection} = require('discord.js');
const dotenv = require('dotenv');dotenv.config();const poll = require('./commands/utils/poll');
const client = new Client({intents: 1539, partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER']});
const Logger = require ('./utils/Logger');
//const CronJob = require('cron').CronJob


client.commands = new Collection ();

['EventUtil','CommandUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });

//console.log('Before job instantiation'); //0 30 6 * * */2 // 00 00 00 * * *
//const job = new CronJob('20 * * * * *', function() {
//    console.log('reusie'); 
//});
//console.log('After job instantiation');
//job.start();


process.on ('exit', code => { Logger.client(`Le processus s'est arrèté avec le code: ${code} !`)});
process.on('uncaughtException', (err, origin) => { Logger.error(`UNCAUGHT_EXCEPTION: ${err}`) ;console.error(`Origine: ${origin}`)});
process.on ('unhandledRejection', (reason, promise) => { Logger.warn(`UNHANDLED_REJECTION: ${reason}`);console.log(promise)});
process.on('warning',(...args) => Logger.warn(...args));

client.login(process.env.DISCORD_TOKEN);