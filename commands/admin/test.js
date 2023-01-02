const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    name: "test",
    category: 'admin',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: true,
    usage: 'test ',
    examples: ['test'],
    description: 'Commande test',
     async run (client, message, args) {
      let member = message.mentions.members.first();
      if (member == undefined) {console.log('if')}
      console.log(member)
       console.log(member.displayName)

    },

    runSlash: async(client, interaction) => {
      var nom = interaction.member.displayName
      console.log(interaction.member)
      interaction.reply(nom)
      console.log(nom)
       }}
