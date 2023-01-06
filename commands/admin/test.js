const superagent = require('superagent').agent();
       const dotenv = require('dotenv'); dotenv.config();
       const {MessageEmbed, Formatters, MessageAttachment} = require('discord.js')
       const dayjs = require ('dayjs');
       
module.exports = {
    name: "test",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'test', 
    examples: ['test'],
    description: 'Commande test',
       async run (client, message, args) {
              var image = new MessageAttachment('https://cdn.wolvesville.com/promos/mysticangel.jpg')
              message.channel.send({files: [image]})
       }
}
