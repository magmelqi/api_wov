const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const {writeFileSync, readFileSync} = require ("fs");

module.exports = {
    name: "mauto",
    category: 'chat',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'mauto', 
    examples: ['mauto'],
    description: 'Envoie les messages envoyé sur wov en temps réel(1min de décalage) (pas config l\'id channel)',
    async run (client, message, args) {const logChannel = client.channels.cache.get('1046792811065913366'); console.log('on');
    var Merr = await message.channel.send("On");
    test54 =async() => {

      var Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/chat`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
      else {return Merr.edit({content:`Erreur: ${err}`})}}); 
      var objErr= JSON.stringify(Messageclan);

      if (objErr !== undefined) {var obj= Messageclan.text; var objbody2 = Messageclan.body}
      var i = 2
      while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
        var Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/chat`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
      else {return Merr.edit({content:`Erreur: ${err}`})}});
      var objErr= JSON.stringify(Messageclan); 
      var obj= Messageclan.text; var objbody2 = Messageclan.body} 
      
      var InfoLastest = JSON.parse(readFileSync(`././Information/Mauto/Mauto.json`, 'utf-8'))
      var AncienMessage = InfoLastest.date
      var n = 0
      while(Messageclan.body[n].date !== AncienMessage){ 
        var objbody = Messageclan.body[n];var n = n+1
        try {var BOT =objbody.playerBotOwnerUsername}catch(err) {}
      var dateI = objbody.date; var dateIT = JSON.stringify(dateI)// 2022-11-20T10:51:40.988Z
        var jours = dateIT.slice(1, 11); var heure = dateIT.slice(12, 14); var minute = dateIT.slice(15, 17)

      if ( BOT !== undefined) {var PlayerId= "BOT"; console.log('if')
      const embed= new MessageEmbed()
  .setAuthor({name: 'Chat WOV'})
  .setColor('WHITE')
  .setFields({name: `Pseudo: \`${PlayerId}\``, value: `-${objbody.msg}`}, {name: "fais le", value: `-${jours} à ${heure}h${minute}`})
  .setThumbnail(client.user.displayAvatarURL())
  .setTimestamp();
  const logChannel = client.channels.cache.get('1044258472121860126');
    logChannel.send({ embeds: [embed]})}
      else if (objbody.isSystem == true) {
        var PlayerId = objbody.playerId
        var  usernameb  = await superagent.get(`https://api.wolvesville.com/players/${PlayerId}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
        else {return Merr.edit({content:`Erreur: ${err}`})}}); 
        var pseudoErr = JSON.stringify(usernameb);

        if (pseudoErr !== undefined) {var pseudo = usernameb.text; var pseudobody = usernameb.body}
        var i = 2
        while (pseudoErr == undefined) {
            var  usernameb  = await superagent.get(`https://api.wolvesville.com/players/${PlayerId}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
        else {return Merr.edit({content:`Erreur: ${err}`})}});
        var pseudoErr = JSON.stringify(usernameb);
        var pseudo = usernameb.text; var pseudobody = usernameb.body} 

        if (objbody.msg == `join&username=${pseudobody.username}`) {
        var embed= new MessageEmbed()
        .setAuthor({name: 'Chat WOV'})
        .setColor("GREEN")
        .setFields({name: `Pseudo: \`${pseudobody.username}\``, value: `-Vient de \`rejoindre\` le clan`}, {name: "fais le", value: `-${jours} à ${heure}h${minute}`})
        .setThumbnail(pseudobody.equippedAvatar.url)
        .setTimestamp()
              } 
        else {
                var embed= new MessageEmbed()
        .setAuthor({name: 'Chat WOV'})
        .setColor("RED")
        .setFields({name: `Pseudo: \`${pseudobody.username}\``, value: `-Vient de \`quitter\` le clan`}, {name: "fais le", value: `-${jours} à ${heure}h${minute}`})
        .setThumbnail(pseudobody.equippedAvatar.url)
        .setTimestamp()
        }
         logChannel.send({ embeds: [embed]})

      }

     else { console.log('else'); var PlayerId = objbody.playerId
        var  usernameb  = await superagent.get(`https://api.wolvesville.com/players/${PlayerId}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
        else {return Merr.edit({content:`Erreur: ${err}`})}}); 
        var pseudoErr = JSON.stringify(usernameb);

        if (pseudoErr !== undefined) {var pseudo = usernameb.text; var pseudobody = usernameb.body}
        var i = 2
        while (pseudoErr == undefined) {
            var  usernameb  = await superagent.get(`https://api.wolvesville.com/players/${PlayerId}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
        else {return Merr.edit({content:`Erreur: ${err}`})}});
        var pseudoErr = JSON.stringify(usernameb);
        var pseudo = usernameb.text; var pseudobody = usernameb.body} 


            const embed= new MessageEmbed()
  .setAuthor({name: 'Chat WOV'})
  .setColor('#77b5fe')
  .setFields({name: `Pseudo: \`${pseudobody.username}\``, value: `-${objbody.msg}`}, {name: "fais le", value: `-${jours} à ${heure}h${minute}`})
  .setThumbnail(pseudobody.equippedAvatar.url)
  .setTimestamp()
         logChannel.send({ embeds: [embed]})}}

        const info = {
          date: Messageclan.body[0].date
        }
        const objectToJson = JSON.stringify(info)
        writeFileSync(`././Information/Mauto/Mauto.json`, objectToJson)
        }
        
        test54()
        setInterval(() =>{test54()}, 60000)
      },   
}