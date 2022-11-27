const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const Messageclan = new MessageChannel;
const axios = require('axios')

module.exports = {
    name: "mvar",
    category: 'wov',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'mvar [année-mois-jourTheure:minute:seconde]',
    examples: ['mvar 2022-11-22T20:20:01', 'mvar 2002-09-07T06:27:48'],
    description: 'Voir le messages du chat de clan a la date demandée',
      run: async(client, message, args) => {
        var dateVar = message.content.substring(6).trim()
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
        const dated1 = obj.search(dated); const datef1 = obj.search(datef); var date = obj.slice(dated1+10, datef1-14); var date2 = obj.slice(datef1-13, datef1-11); var date3 = obj.slice(datef1-10, datef1-8);var date2 = date2-1+2; console.log (`-${date} à ${date2}h${date3}`);

        var PlayerIdd= /{"player/g; var PlayerIdf= /","date":"/g
        const PlayerIdd1 = obj.search(PlayerIdd); const PlayerIdf1 = obj.search(PlayerIdf); var PlayerId = obj.slice(PlayerIdd1+13, PlayerIdf1); var obj = obj.slice(msgf1+7); console.log(PlayerId); 

        try {
        if ( PlayerId == 'nerUsername":"BOT(lusky34)') {var PlayerId= "BOT"; console.log('if')
        const embed= new MessageEmbed()
    .setAuthor({name: 'Chat WOV'})
    .setColor('WHITE')
    .setFields({name: `Pseudo: \`${PlayerId}\``, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}h${date3}`})
    .setThumbnail()
    .setTimestamp()

        message.send({embeds: [embed]})}
        
      
       else { console.log('else');
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
    .setFields({name: `Pseudo: \`${username}\``, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}h${date3}`})
    .setThumbnail()
    .setTimestamp()

        message.channel.send({embeds: [embed]})}} catch (err) { message;channel.send("Erreur dans l'envoie du message")}
        
  },
  options:[
    {
        name: "année",
        description: "Tapez l'année du message que vous souhaitez voir",
        type: "STRING",
        required: true,
    },
    {
      name: "mois",
      description: "Tapez le mois du message que vous souhaitez voir",
      type: "STRING",
      required: true,
    },
    {
      name: "jour",
      description: "Tapez le jour du message que vous souhaitez voir",
      type: "STRING",
      required: true,
    },
    {
      name: "heure",
      description: "Tapez l'heure du message que vous souhaitez voir",
      type: "STRING",
      required: false,
    },
    {
      name: "minute",
      description: "Tapez les minutes du message que vous souhaitez voir",
      type: "STRING",
      required: false,
    },
    {
      name: "seconde",
      description: "Tapez les secondes du message que vous souhaitez voir",
      type: "STRING",
      required: false,
    }
],
  runSlash: async(message, interaction) => {  //2002-09-07T06:27:48
    const annéeVar = interaction.options.getString('année');
    const moisVar = interaction.options.getString('mois');
    const jourVar = interaction.options.getString('jour');
    const heureVar = interaction.options.getString('heure') ?? 0;
    const minuteVar = interaction.options.getString('minute') ?? 0;
    const secondeVar = interaction.options.getString('seconde') ?? 0;
    const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/chat?oldest=${annéeVar}-${moisVar}-${jourVar}T${heureVar}:${minuteVar}:${secondeVar}`)
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
    const dated1 = obj.search(dated); const datef1 = obj.search(datef); var date = obj.slice(dated1+10, datef1-14); var date2 = obj.slice(datef1-13, datef1-11); var date3 = obj.slice(datef1-10, datef1-8); var date2 = date2-1+2; console.log (`-${date} à ${date2}h${date3}`);

    var PlayerIdd= /{"player/g; var PlayerIdf= /","date":"/g
    const PlayerIdd1 = obj.search(PlayerIdd); const PlayerIdf1 = obj.search(PlayerIdf); var PlayerId = obj.slice(PlayerIdd1+13, PlayerIdf1); var obj = obj.slice(msgf1+7); console.log(PlayerId); 


    try {
    if ( PlayerId == 'nerUsername":"BOT(lusky34)') {var PlayerId= "BOT"; console.log('if')
    const embed= new MessageEmbed()
    .setAuthor({name: 'Chat WOV'})
    .setColor('WHITE')
    .setFields({name: `Pseudo: \`${PlayerId}\``, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}h${date3}`})
    .setThumbnail()
    .setTimestamp()

    interaction.send({ embeds: [embed], ephemeral: true })}
    
  
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
    .setFields({name: `Pseudo: \`${username}\``, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}h${date3}`})
    .setThumbnail()
    .setTimestamp()

    interaction.channel.send({ embeds: [embed], ephemeral: true})}} catch (err) { message;channel.send("Erreur dans l'envoie du message")}

}}
