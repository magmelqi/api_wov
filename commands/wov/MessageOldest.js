const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const Messageclan = new MessageChannel;
const axios = require('axios')

module.exports = {
    name: "mclanvar",
    category: 'wov',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'mclanvar [année-mois-jourTheure:minute:seconde]',
    examples: ['mclanvar 2022-11-22T20:20:01', 'mclanvar 2002-09-07T06:27:48'],
    description: 'Voir le messages du chat de clan a la date demandée',
      run: async(client, message, args) => {
        var dateVar = message.content.substring(10).trim()
        const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/chat?oldest=${dateVar}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return message.channel.send(err)}); 
        console.log ('Commande message clan fait');
        const Clan = await Messageclan.body
        var obj=JSON.stringify(Clan); 


        var msgd= /","msg":"/g; var msgf= /","isSystem"/g
        const msgd1 = obj.search(msgd); const msgf1 = obj.search(msgf); var msg = obj.slice(msgd1+9, msgf1); console.log (msg)

        var dated= /","date":"/g; var datef= /","msg":"/g
        const dated1 = obj.search(dated); const datef1 = obj.search(datef); var date = obj.slice(dated1+10, datef1-14); var date2 = obj.slice(datef1-13, datef1-8); console.log (date)

        var PlayerIdd= /{"player/g; var PlayerIdf= /","date":"/g
        const PlayerIdd1 = obj.search(PlayerIdd); const PlayerIdf1 = obj.search(PlayerIdf); var PlayerId = obj.slice(PlayerIdd1+13, PlayerIdf1); var obj = obj.slice(msgf1+7); console.log(PlayerId); 

        try {
        if ( PlayerId == 'nerUsername":"BOT(lusky34)') {var PlayerId= "BOT"; console.log('if')
        const embed= new MessageEmbed()
    .setAuthor({name: 'Chat WOV'})
    .setColor('WHITE')
    .setFields({name: `Pseudo: ${PlayerId}`, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}`})
    .setThumbnail()
    .setTimestamp()

        message.channel.send({embeds: [embed]})}
        
      
       else { console.log('else')
          const  usernameb  = await superagent.get(`https://api.wolvesville.com/players/${PlayerId}`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {return message.channel.send(err)}); const pseudo = usernameb.text

          var usernamed= /","username":"/g; var usernamef= /","personalMessage":"/g
        const usernamed1 = pseudo.search(usernamed); const usernamef1 = pseudo.search(usernamef); var username = pseudo.slice(usernamed1+14, usernamef1); console.log (username)


        const embed= new MessageEmbed()
    .setAuthor({name: 'Chat WOV'})
    .setColor('#77b5fe')
    .setFields({name: `Pseudo: ${username}`, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}`})
    .setThumbnail()
    .setTimestamp()

        message.channel.send({embeds: [embed]})}} catch (err) { message;channel.send("Erreur dans l'envoie du message")}
        
  },
  options:[
    {
        name: "date",
        description: "Tapez la date du message que vous souhaitez voir",
        type: "STRING",
        required: true,
    }
],
  runSlash: async(message, interaction) => {
    const dateVar = interaction.options.getString('date'); console.log(nomber)
    const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/chat?oldest=${dateVar}`)
  .set( 'Authorization', process.env.WOV_TOKEN)
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .catch((err) => {return interaction.reply(err)}); 
  console.log ('Commande message clan fait');
  const Clan = await Messageclan.body
  var obj=JSON.stringify(Clan); 

    var msgd= /","msg":"/g; var msgf= /","isSystem"/g
    const msgd1 = obj.search(msgd); const msgf1 = obj.search(msgf); var msg = obj.slice(msgd1+9, msgf1); console.log (msg)

    var dated= /","date":"/g; var datef= /","msg":"/g
    const dated1 = obj.search(dated); const datef1 = obj.search(datef); var date = obj.slice(dated1+10, datef1-14); var date2 = obj.slice(datef1-13, datef1-8); console.log (date)

    var PlayerIdd= /{"player/g; var PlayerIdf= /","date":"/g
    const PlayerIdd1 = obj.search(PlayerIdd); const PlayerIdf1 = obj.search(PlayerIdf); var PlayerId = obj.slice(PlayerIdd1+13, PlayerIdf1); var obj = obj.slice(msgf1+7); console.log(PlayerId); 


    try {
    if ( PlayerId == 'nerUsername":"BOT(lusky34)') {var PlayerId= "BOT"; console.log('if')
    const embed= new MessageEmbed()
    .setAuthor({name: 'Chat WOV'})
    .setColor('WHITE')
    .setFields({name: `Pseudo: ${PlayerId}`, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}`})
    .setThumbnail()
    .setTimestamp()

    interaction.channel.send({ embeds: [embed], ephemeral: true })}
    
  
   else { console.log('else')
      const  usernameb  = await superagent.get(`https://api.wolvesville.com/players/${PlayerId}`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {return interaction.reply(err)}); const pseudo = usernameb.text

      var usernamed= /","username":"/g; var usernamef= /","personalMessage":"/g
    const usernamed1 = pseudo.search(usernamed); const usernamef1 = pseudo.search(usernamef); var username = pseudo.slice(usernamed1+14, usernamef1); console.log (username)


    const embed= new MessageEmbed()
    .setAuthor({name: 'Chat WOV'})
    .setColor('#77b5fe')
    .setFields({name: `Pseudo: ${username}`, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}`})
    .setThumbnail()
    .setTimestamp()

    interaction.channel.send({ embeds: [embed], ephemeral: true})}} catch (err) { message;channel.send("Erreur dans l'envoie du message")}

}}
