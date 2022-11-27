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
        
        const embed= new MessageEmbed()
      .setAuthor({name: 'Chat WOV'})
      .setColor('WHITE')
      .addFields({name: `Pseudo: \`BOUH\``, value: `-TEST`},{name: 'Or:', value: `bouh`})
      .setThumbnail()
      .setTimestamp();
      const logChannel = client.channels.cache.get('1044258472121860126');
        const ght = logChannel.send({ embeds: [embed], time: 6000});

        const embed2= new MessageEmbed()
      .setAuthor({name: 'Chat WOV2'})
      .setColor('WHITE')
      .addFields({name: `Pseudo: \`BOUH2\``, value: `-TEST2`},{name: 'Or:', value: `bouh`})
      .setThumbnail()
      .setTimestamp();
        logChannel.send({ embeds: [embed2], time: 6000})
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