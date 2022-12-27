const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const { MessageEmbed, MessageAttachment } = require('discord.js');
const Canvas = require("canvas");
const Discord = require('discord.js')

module.exports = {
    name: "test",
    category: 'admin',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'test ',
    examples: ['test'],
    description: 'Commande test',
     async run (client, message, args) {
    },

    runSlash: async(client, interaction) => { 
       }}
