const superagent = require('superagent').agent();
       const dotenv = require('dotenv'); dotenv.config();
       const {MessageEmbed, Formatters, MessageAttachment} = require('discord.js')
       const dayjs = require ('dayjs');
       const {readFileSync, readdirSync} = require ("fs");
       
module.exports = {
    name: "testa",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'test', 
    examples: ['test'],
    description: 'Commande test',
       async run (client, message, args) {
              try {
                     var DOr = readdirSync(`././Information/xp/absence`, 'utf-8')} catch (err) {return console.log(err);}
                     var test1 = "yo"; var confirmAbsence = false
                     for (let i=0; i < DOr.length; i++) {console.log(i)
                            if (DOr[i].PlayerId == test1) {var confirmAbsence = true}
                     }
                     if (confirmAbsence) {console.log('pas dans les fichiers d\'absence')}
       }
}
