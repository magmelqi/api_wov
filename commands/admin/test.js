const superagent = require('superagent').agent();
const { MessageEmbed, Interaction } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const Questsavailable= new MessageChannel;
const dayjs = require ('dayjs');


module.exports = {
    name: "test",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'test',
    examples: ['test'],
    description: 'Commande test',
      run: (client, message, args) => {
        console.log('1');

setTimeout(() => {
    console.log('2');
}, 3000);
console.log('3');
setInterval(() =>{
    console.log('4')
}, 2000)
          

    },

    runSlash: async(client, interaction) => {

       }}
