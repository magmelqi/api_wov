const superagent = require('superagent').agent();
const { MessageEmbed, MessageManager } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const Username = new MessageChannel;

module.exports = {
    name: "test2",
    category: 'admin',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: true,
    usage: 'test2',
    examples: ['test2'],
    description: "Suspens",
      run: async(client, message, args) => {
        const test = await superagent.get(`https://api.wolvesville.com/clans/`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return message.channel.send(err)}); 
        const Clan= test.body
        const obj=JSON.stringify(Clan);

    },
    runSlash: async(client, interaction) => {
      const test= await superagent.get('https://api.wolvesville.com/clans/')
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {return interaction.reply(err)}); 
      const Clan = await test.body
      const obj=JSON.stringify(Clan); 
     

     }}