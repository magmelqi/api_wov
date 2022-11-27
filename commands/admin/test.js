const superagent = require('superagent').agent();
const { MessageEmbed, Interaction } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const Questsavailable= new MessageChannel;
const dayjs = require ('dayjs'); const timestamp = `[${dayjs().format("YYYY-MM-DDTHH:mm:ss")}]`; console.log (timestamp)


module.exports = {
    name: "test",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'test',
    examples: ['test'],
    description: 'Commande test',
      run: async(user, message, member) => {
        client.on = async(client, message, args) => {
          const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/chat?oldest=${timestamp}`)
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
          const dated1 = obj.search(dated); const datef1 = obj.search(datef); var date = obj.slice(dated1+10, datef1-14); var date2 = obj.slice(datef1-13, datef1-11); var date3 = obj.slice(datef1-10, datef1-8); var date2 = date2-1+2; console.log (`-${date} à ${date2}h${date3}`)
      
          var PlayerIdd= /{"player/g; var PlayerIdf= /","date":"/g
          const PlayerIdd1 = obj.search(PlayerIdd); const PlayerIdf1 = obj.search(PlayerIdf); var PlayerId = obj.slice(PlayerIdd1+13, PlayerIdf1); var obj = obj.slice(msgf1+7); console.log(PlayerId);
          
          if (dayjs().format("YYYY-MM-DD") == date){
            if (dayjs().format("HH") == date2){
              if (dayjs().format("mm") == date3){
      
          try {
          if ( PlayerId == 'nerUsername":"BOT(lusky34)') {var PlayerId= "BOT"; console.log('if')
          const embed= new MessageEmbed()
      .setAuthor({name: 'Chat WOV'})
      .setColor('WHITE')
      .setFields({name: `Pseudo: \`${PlayerId}\``, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}h${date3}`})
      .setThumbnail()
      .setTimestamp();
      const logChannel = client.channels.cache.get('1044258472121860126');
        logChannel.send({ embeds: [embed], time: 60000})}
          
        
         else { console.log('else'); throttle: 100
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
      .setFields({name: `Pseudo: \`${username}\``, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}`})
      .setThumbnail()
      .setTimestamp()
      
      const logChannel = client.channels.cache.get('1044258472121860126');
      logChannel.send({ embeds: [embed]})}} catch (err) { message;channel.send("Erreur dans l'envoie du message")}}}}
          }

    },

    runSlash: async(client, interaction) => {

       }}
