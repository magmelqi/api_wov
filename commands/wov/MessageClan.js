const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const Messageclan = new MessageChannel;
const axios = require('axios')

module.exports = {
    name: "mclan",
    category: 'wov',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'mclan [nombre]',
    examples: ['meclan 5', 'mclan 9'],
    description: 'Voir les derniers messages du chat de clan',
      run: async(client, message, args) => {
        if (!args[0] || !args[0].match(/^(1|2|3|4|5|6|7|8|9)$/)) return message.reply('merci d\'entrer un nombre entre 1 et 9');
        var nombre = message.content.substring(7).trim()
        const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/chat`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return message.channel.send(err)}); 
        console.log ('Commande message clan fait');
        const Clan = await Messageclan.body
        var obj=JSON.stringify(Clan); 

        for(let i=0; i < nombre; i++ ) {

        var msgd= /","msg":"/g; var msgf= /","isSystem"/g
        const msgd1 = obj.search(msgd); const msgf1 = obj.search(msgf); var msg = obj.slice(msgd1+9, msgf1); console.log (msg)

        var dated= /","date":"/g; var datef= /","msg":"/g
        const dated1 = obj.search(dated); const datef1 = obj.search(datef); var date = obj.slice(dated1+10, datef1-14); var date2 = obj.slice(datef1-13, datef1-8); console.log (date)

        var PlayerIdd= /{"player/g; var PlayerIdf= /","date":"/g
        const PlayerIdd1 = obj.search(PlayerIdd); const PlayerIdf1 = obj.search(PlayerIdf); var PlayerId = obj.slice(PlayerIdd1+13, PlayerIdf1); var obj = obj.slice(msgf1+7); console.log(PlayerId); 

        if ( PlayerId == 'nerUsername":"BOT(lusky34)') {var PlayerId= "BOT"; console.log('if')
        try {
        const embed= new MessageEmbed()
    .setAuthor({name: 'Chat WOV'})
    .setColor('WHITE')
    .setFields({name: PlayerId, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}`})
    .setThumbnail()
    .setTimestamp();

       await message.channel.send({embeds: [embed]})} catch (err) {message.channel.send("Erreur dans l'envoie du message")}}
        
      
       else { console.log('else')
          const  usernameb  = await superagent.get(`https://api.wolvesville.com/players/${PlayerId}`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {usernameb(); message.channel.send("Erreur dans la requête du player")}); const pseudo = usernameb.text

          var usernamed= /","username":"/g; var usernamef= /","personalMessage":"/g
        const usernamed1 = pseudo.search(usernamed); const usernamef1 = pseudo.search(usernamef); var username = pseudo.slice(usernamed1+14, usernamef1); console.log (username)

        try{
        const embed2= new MessageEmbed()
    .setAuthor({name: 'Chat WOV'})
    .setColor('#77b5fe')
    .setFields({name: username, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}`})
    .setThumbnail()
    .setTimestamp();

        await message.channel.send({embeds: [embed2]})}catch (err) {message.channel.send("Erreur dans l'envoie du message")}}}
        
  },
  options:[
    {
        name: "nombre",
        description: "Tapez le nombre de message que vous souhaitez voir",
        type: "STRING",
        required: true,
    }
],
  runSlash: async(message, interaction) => {
    const nomber = interaction.options.getString('nombre'); console.log(nomber)
    const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/chat`)
  .set( 'Authorization', process.env.WOV_TOKEN)
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .catch((err) => {return interaction.reply(err)}); 
  console.log ('Commande message clan fait');
  const Clan = await Messageclan.body
  var obj=JSON.stringify(Clan); 

  for(let i=0; i < nomber; i++ ) {

    var msgd= /","msg":"/g; var msgf= /","isSystem"/g
    const msgd1 = obj.search(msgd); const msgf1 = obj.search(msgf); var msg = obj.slice(msgd1+9, msgf1); console.log (msg)

    var dated= /","date":"/g; var datef= /","msg":"/g
    const dated1 = obj.search(dated); const datef1 = obj.search(datef); var date = obj.slice(dated1+10, datef1-14); var date2 = obj.slice(datef1-13, datef1-8); console.log (date)

    var PlayerIdd= /{"player/g; var PlayerIdf= /","date":"/g
    const PlayerIdd1 = obj.search(PlayerIdd); const PlayerIdf1 = obj.search(PlayerIdf); var PlayerId = obj.slice(PlayerIdd1+13, PlayerIdf1); var obj = obj.slice(msgf1+7); console.log(PlayerId); 

    if ( PlayerId == 'nerUsername":"BOT(lusky34)') {var PlayerId= "BOT"; console.log('if')
    try {
    const embed= new MessageEmbed()
    .setAuthor({name: 'Chat WOV'})
    .setColor('WHITE')
    .setFields({name: PlayerId, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}`})
    .setThumbnail()
    .setTimestamp();

     await interaction.channel.send({ embeds: [embed], ephemeral: true })} catch (err) {message.channel.send("Erreur dans l'envoie du message")}}
    
  
   else { console.log('else')
      const  usernameb  = await superagent.get(`https://api.wolvesville.com/players/${PlayerId}`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {usernameb(); interaction.reply("Erreur dans la requête du player")}); const pseudo = usernameb.text

      var usernamed= /","username":"/g; var usernamef= /","personalMessage":"/g
    const usernamed1 = pseudo.search(usernamed); const usernamef1 = pseudo.search(usernamef); var username = pseudo.slice(usernamed1+14, usernamef1); console.log (username)

    try{
    const embed= new MessageEmbed()
    .setAuthor({name: 'Chat WOV'})
    .setColor('#77b5fe')
    .setFields({name: username, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}`})
    .setThumbnail()
    .setTimestamp();

     await interaction.channel.send({ embeds: [embed], ephemeral: true})} catch (err) {message.channel.send("Erreur dans l'envoie du message")}}}
  }}
