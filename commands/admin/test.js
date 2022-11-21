const superagent = require('superagent').agent();
const { MessageEmbed, Interaction } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const Questsavailable= new MessageChannel;

module.exports = {
    name: "test",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'test',
    examples: ['test'],
    description: 'Commande test',
      run: async(user, message, member) => {

    },

    runSlash: async(client, interaction) => {

       }}
