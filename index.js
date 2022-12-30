const {Client, Collection} = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const client = new Client({intents: 1539, partials: ['MESSAGE', 'CHANNEL', 'USER', 'GUILD_MEMBER', 'GUILD_SCHEDULED_EVENT', 'REACTION'] });
const Logger = require ('./utils/Logger');
const mongoose = require('mongoose')

client.commands = new Collection ();

['EventUtil','CommandUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });
require('./utils/Function')(client);



process.on ('exit', code => { Logger.client(`Le processus s'est arrèté avec le code: ${code} !`)});
process.on('uncaughtException', (err, origin) => { Logger.error(`UNCAUGHT_EXCEPTION: ${err}`) ;console.error(`Origine: ${origin}`)});
process.on ('unhandledRejection', (reason, promise) => { Logger.warn(`UNHANDLED_REJECTION: ${reason}`);console.log(promise)});
process.on('warning',(...args) => Logger.warn(...args));

mongoose.connect(process.env.DATABASE_URI, {
    autoIndex: false,
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000, 
    family: 4 
}).then(() => { Logger.client('Le client est connecté à la base de données !')})
.catch(err => {Logger.error(err) });

client.login(process.env.DISCORD_TOKEN);