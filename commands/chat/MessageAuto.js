const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const dayjs = require ('dayjs');

module.exports = {
    name: "mauto",
    category: 'chat',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'mauto', 
    examples: ['mauto'],
    description: 'Envoie les messages envoyé sur wov en temps réel (pas config l\'id channel)',
    run (client, message, args) {const logChannel = client.channels.cache.get('1046792811065913366');message.channel.send("On");console.log('on');
    test54 =async() => {
    const timestamp = `${dayjs().format("YYYY-MM-DDTHH:mm:ss")}`; console.log (timestamp)
      const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/chat?oldest=${timestamp}`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {message.channel.send(`Erreur a la 1ère requête: ${err} \n\`2ème tentaive en cours...\``); console.log(err)});
      var objErr= JSON.stringify(Messageclan);


      if (objErr == undefined) {
        const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/chat?oldest=${timestamp}`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {message.channel.send(`Erreur a la 1ère requête: ${err} \n\`3ème tentaive en cours...\` Ah bah il y en a pas flemme de mettre une 3ème requête`); console.log(err)}); 
      var obj= Messageclan.text} else {var obj= Messageclan.text}
      
      
      for(let i=0; i < 10; i++ ){
            var msgd= /","msg":"/g; var msgf= /","isSystem"/g
      const msgd1 = obj.search(msgd); const msgf1 = obj.search(msgf); var msg = obj.slice(msgd1+9, msgf1);
  
      var dated= /","date":"/g; var datef= /","msg":"/g
      const dated1 = obj.search(dated); const datef1 = obj.search(datef); var date = obj.slice(dated1+10, datef1-14); var date2 = obj.slice(datef1-13, datef1-11); var date3 = obj.slice(datef1-10, datef1-8); var date2 = date2-1+2; var date4= obj.slice(datef1-7, datef1-5);
  
      var PlayerIdd= /{"player/g; var PlayerIdf= /","date":"/g
      const PlayerIdd1 = obj.search(PlayerIdd); const PlayerIdf1 = obj.search(PlayerIdf); var PlayerId = obj.slice(PlayerIdd1+13, PlayerIdf1); var obj = obj.slice(msgf1+7);console.log (`-${date} à ${date2}h${date3}:${date4}`);
      if (dayjs().format("YYYY-MM-DD") == date){
        if (dayjs().format("HH") == date2){
          if (dayjs().format("mm") == date3 || dayjs().format("mm")-1+2 == date3-1+1 && dayjs().format("ss") < date4){
            console.log (msg)
  
      
      if ( PlayerId == 'nerUsername":"BOT(lusky34)') {var PlayerId= "BOT"; console.log('if')
      const embed= new MessageEmbed()
  .setAuthor({name: 'Chat WOV'})
  .setColor('WHITE')
  .setFields({name: `Pseudo: \`${PlayerId}\``, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}h${date3}`})
  .setThumbnail()
  .setTimestamp();
  const logChannel = client.channels.cache.get('1044258472121860126');
    logChannel.send({ embeds: [embed]})}
      
     else { console.log('else'); 
        const  usernameb  = await superagent.get(`https://api.wolvesville.com/players/${PlayerId}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return message.channel.send(`Erreur a la 2ème requête: ${err}\n\`2ème tentaive en cours...\``)}); 
        var pseudoErr = JSON.stringify(usernameb);

        if (pseudoErr == undefined) {
            const  usernameb  = await superagent.get(`https://api.wolvesville.com/players/${PlayerId}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return message.channel.send(`Erreur a la 2ème requête: ${err}`)}); 
        var pseudo = usernameb.text} else {var pseudo = usernameb.text}

          var usernamed= /","username":"/g; var usernamef= /","personalMessage":"/g
      const usernamed1 = pseudo.search(usernamed); const usernamef1 = pseudo.search(usernamef); var username = pseudo.slice(usernamed1+14, usernamef1); console.log (username)
  
            const embed= new MessageEmbed()
  .setAuthor({name: 'Chat WOV'})
  .setColor('#77b5fe')
  .setFields({name: `Pseudo: \`${username}\``, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}h${date3}`})
  .setThumbnail()
  .setTimestamp()
        return logChannel.send({ embeds: [embed]})}
        
        
        
        var usernamed= /","username":"/g; var usernamef= /","personalMessage":"/g
      const usernamed1 = pseudo.search(usernamed); const usernamef1 = pseudo.search(usernamef); var username = pseudo.slice(usernamed1+14, usernamef1); console.log (username)
  
            const embed= new MessageEmbed()
  .setAuthor({name: 'Chat WOV'})
  .setColor('#77b5fe')
  .setFields({name: `Pseudo: \`${username}\``, value: `-${msg}`}, {name: "fais le", value: `-${date} à ${date2}h${date3}`})
  .setThumbnail()
  .setTimestamp()
        logChannel.send({ embeds: [embed]})} }}}}
        test54()
        setInterval(() =>{test54()}, 60000)
      },   
}