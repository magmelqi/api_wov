const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const Clanauthorized = new MessageChannel;

module.exports = {
    name: "bot",
    category: 'wov',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'bot',
    examples: ['bot'],
    description: 'Voir les clans affiliés au bot',
      run: async(client, message, args) => {
        const Clanauthorized = await superagent.get('https://api.wolvesville.com/clans/authorized/')
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return message.channel.send(err)}); 
        console.log ('Commande bot fait');
        const Clan = await Clanauthorized.body
        const obj=JSON.stringify(Clan); 
        var idn = obj.slice(8, 44)
        var creationTimend = obj.slice(62, 72); var creationTimenf = obj.slice(73, 78)
        var namen = obj.slice(96, 112)

        const emebed = new MessageEmbed()
        .setTitle('Clan connecté au bot:')
        .setColor('WHITE')
        .addFields({name: "Id:", value: idn, inline:true},{name: "clan crée le", value: `${creationTimend} à ${creationTimenf}`, inline: true},{name: "nom du clan:", value: namen, inline: true}); message.channel.send({ embeds: [emebed]})

  },
  runSlash: async(client, message, args) => {const Clanauthorized = await superagent.get('https://api.wolvesville.com/clans/authorized/')
  .set( 'Authorization', process.env.WOV_TOKEN)
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .catch((err) => {return message.channel.send(err)}); 
  console.log ('Commande bot fait');
  const Clan = await Clanauthorized.body
  const obj=JSON.stringify(Clan); 
  var idn = obj.slice(8, 44)
  var creationTimend = obj.slice(62, 72); var creationTimenf = obj.slice(73, 78)
  var namen = obj.slice(96, 112)

  const emebed = new MessageEmbed()
        .setTitle('Clan connecté au bot:')
        .setColor('WHITE')
        .addFields({name: "Id:", value: idn, inline:true},{name: "clan crée le", value: `${creationTimend} à ${creationTimenf}`, inline: true},{name: "nom du clan:", value: namen, inline: true}); message.channel.send({ embeds: [emebed]})

}}
