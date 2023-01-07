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
    description: 'Envoie les messages envoyé sur wov en temps réel(1min de décalage)',
    async run (client, message, args) {
        if (!args[0] || !args[0].match(/^(Wolves|test)$/)) return message.reply('merci d\'entrer un évenement valide (`\Wolves`/`\test\``)');

      if (args[0] == "Wolves") {
      var mautoChannel = client.channels.cache.get('1057688446933680248');}
      else if (args[0] == "test") {
        var mautoChannel = client.channels.cache.get('1046792811065913366')
      };  
      
      
      console.log('on');
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
      
      var InfoLastest = JSON.parse(readFileSync(`././Information/Date/Mauto.json`, 'utf-8'))
      var AncienMessage = InfoLastest.date
        var n = 0; 

        while (Messageclan.body[n].date !== AncienMessage && n !== 29){var n = n+1;};
        var n =n-1
      while(n !== -1 ){ 
        var objbody = Messageclan.body[n];var n = n-1
        try {var BOT =objbody.playerBotOwnerUsername}catch(err) {}

        var  HlastOnline = objbody.date.slice(11, 13)-1+2

            var annéeLO =  objbody.date.slice(0, 4); var moisLO = objbody.date.slice(5, 7); var jourLO= objbody.date.slice(8, 10);

            if (HlastOnline == 24) {var HlastOnline = "00"; var jourLO = jourLO-1+2
            if (moisLO == 1 && jourLO == 32) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 2 && jourLO == 29) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 3 && jourLO == 32) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 4 && jourLO == 31) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 5 && jourLO == 32) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 6 && jourLO == 31) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 7 && jourLO == 32) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 8 && jourLO == 32) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 9 && jourLO == 31) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 10 && jourLO == 32) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 11 && jourLO == 31) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 12 && jourLO == 32) {moisLO = "01"; jourLO = "01"; var annéeLO = annéeLO-1+2};
           };

            var DlastOnline = `${jourLO}/${moisLO}/${annéeLO}`




      if ( BOT !== undefined) {var PlayerId= "BOT"; console.log('if')
      const embed= new MessageEmbed()
  .setAuthor({name: 'Chat WOV'})
  .setColor('WHITE')
  .setFields({name: `Pseudo: \`${PlayerId}\``, value: `-${objbody.msg}`}, {name: "fais le", value: `${DlastOnline} à ${HlastOnline}h${objbody.date.slice(14,16)}`})
  .setThumbnail(client.user.displayAvatarURL())
  .setTimestamp();

    mautoChannel.send({ embeds: [embed]})}
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
        .setFields({name: `Pseudo: \`${pseudobody.username}\``, value: `-Vient de \`rejoindre\` le clan`}, {name: "fais le", value: `${DlastOnline} à ${HlastOnline}h${objbody.date.slice(14,16)}`})
        .setThumbnail(pseudobody.equippedAvatar.url)
        .setTimestamp()
              } 
        else {
                var embed= new MessageEmbed()
        .setAuthor({name: 'Chat WOV'})
        .setColor("RED")
        .setFields({name: `Pseudo: \`${pseudobody.username}\``, value: `-Vient de \`quitter\` le clan`}, {name: "fais le", value: `${DlastOnline} à ${HlastOnline}h${objbody.date.slice(14,16)}`})
        .setThumbnail(pseudobody.equippedAvatar.url)
        .setTimestamp()
        }
         mautoChannel.send({ embeds: [embed]})

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
        if (objbody.msg != undefined) {var msg = `-${objbody.msg}`
        embed.addFields({name: `Pseudo: \`${pseudobody.username}\``, value: msg})} 
        else {

          const Minfo = await message.channel.send(`Requête en cours`)
          const Merr = await message.channel.send(`- - - - -`)
          const  emojis  = await superagent.get(`https://api.wolvesville.com/items/emojis`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
          else {return Merr.edit({content:`Erreur: ${err}`})}}); 
          var emojisErr = JSON.stringify(emojis);
  
          if (emojisErr !== undefined) {var emojist = emojis.text; var emojisbody = emojis.body}
          var i = 2
          while (emojisErr == undefined) {
              const  emojis  = await superagent.get(`https://api.wolvesville.com/items/emojis`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
          else {return Merr.edit({content:`Erreur: ${err}`})}});
          var emojisErr = JSON.stringify(emojis);
          var emojist = emojis.text; var emojisbody = emojis.body} 
            Merr.delete(); Minfo.delete()

            var emojisC = 0;
            while (emojis.body[emojisC].id !== objbody.emojiId) {var emojisC = emojisC +1}
            var msg = emojis.body[emojisC].urlPreview
            embed.addFields({name: `Pseudo: \`${pseudobody.username}\``, value: emojis.body[emojisC].name})
            embed.setImage(msg)
        }

            embed.setAuthor({name: 'Chat WOV'})
            embed.setColor('#77b5fe')
            embed.addFields({name: "fais le", value: `${DlastOnline} à ${HlastOnline}h${objbody.date.slice(14,16)}`})
            embed.setThumbnail(pseudobody.equippedAvatar.url)
            embed.setTimestamp()
         mautoChannel.send({ embeds: [embed]})}}

        const info = {
          date: Messageclan.body[0].date
        }
        const objectToJson = JSON.stringify(info)
        writeFileSync(`././Information/Date/Mauto.json`, objectToJson)
        }
        
        test54()
        setInterval(() =>{test54()}, 60000)
      },   
}