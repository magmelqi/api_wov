const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const {writeFileSync, readFileSync} = require ("fs");


    async function log (client) {
        
      
      //const logChannel = client.channels.cache.get('1061783809152012408'); const mautoChannel = client.channels.cache.get('1057688446933680248'); const //queteLogChannel = client.channels.cache.get('1061784076798922792');
    
      
        const logChannel = client.channels.cache.get('1061297491712163920'); const mautoChannel = client.channels.cache.get('1046792811065913366'); const queteLogChannel = client.channels.cache.get('1058381353336438865');
        
      const errChannel = client.channels.cache.get('1044258472121860126');
        

      console.log('Log on');
    var Merr = await errChannel.send("Log On");
    var noStop = 5
    while (noStop == 5) {
      //LOGS - - - - - - - - - - - - - - - - - - - - - - -
      var logs = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/logs`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
      else {return Merr.edit({content:`Erreur: ${err}`})}}); 
      var objErr= JSON.stringify(logs);

      if (objErr !== undefined) {var obj= logs.text; var objbody2 = logs.body}
      var i = 2
      while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
        var logs = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/logs`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
      else {return Merr.edit({content:`Erreur: ${err}`})}});
      var objErr= JSON.stringify(logs); 
      var obj= logs.text; var objbody2 = logs.body} 
      
      var InfoLastest = JSON.parse(readFileSync(`././Information/Date/Log.json`, 'utf-8'))
      var AncienMessage = InfoLastest.date;
        var n = 0; 

        while (logs.body[n].creationTime !== AncienMessage && n !== 199){var n = n+1;};
        var n =n-1

      while( n !== -1 ){
        var objbody = logs.body[n];var n = n-1

        var  HlastOnline = objbody.creationTime.slice(11, 13)-1+2

            var annéeLO =  objbody.creationTime.slice(0, 4); var moisLO = objbody.creationTime.slice(5, 7); var jourLO= objbody.creationTime.slice(8, 10);

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
           const embed = new MessageEmbed();

           if (objbody.action == "PLAYER_JOINED") { 
            embed.setTitle('Un membre à rejoins le clan')
            embed.setColor('GREEN')
            embed.addFields({name:"Pseudo", value: `-${objbody.playerUsername}`},
            {name:"Rejoins le",value:`-${DlastOnline} à ${HlastOnline}h${objbody.creationTime.slice(14,16)}`})
            embed.setTimestamp();

            logChannel.send({embeds: [embed]})
           }
           else if (objbody.action == "PLAYER_LEFT") {
            embed.setTitle('Un membre à quitté le clan')
            embed.setColor('RED')
            embed.addFields({name:"Pseudo", value: `-${objbody.playerUsername}`},
            {name:"Quitté le",value:`${DlastOnline} à ${HlastOnline}h${objbody.creationTime.slice(14,16)}`})
            embed.setTimestamp();

            logChannel.send({embeds: [embed]})
           }
           else if (objbody.action == "PLAYER_KICKED") {
            embed.setTitle(`Un membre à été exclus par ${objbody.playerUsername}`)
            embed.setColor('DARK_GREY')
            embed.addFields({name:"Pseudo", value: `-${objbody.targetPlayerUsername}`},
            {name:"Exclus le", value:`${DlastOnline} à ${HlastOnline}h${objbody.creationTime.slice(14,16)}`},
            {name:"Raison:", value:`-${objbody.comment}`})
            embed.setTimestamp();

            logChannel.send({embeds: [embed]})
           }
           else if (objbody.action == "PLAYER_QUEST_PARTICIPATION_ENABLED") {
            try {var BOT = objbody.playerBotOwnerUsername}catch(err) {}
            if (BOT != undefined) {var send = 0} else {var send = 1}
            if (BOT == undefined) {var Player = objbody.playerUsername}
            if (objbody.targetPlayerUsername != undefined) {var targetP = objbody.targetPlayerUsername; var couleur = 'GREEN'} else {var targetP = objbody.playerUsername; var Player = "AUTO"; var couleur = 'ORANGE'}
            
            embed.setTitle(`Participation activée: ${Player ?? ""}`)
            embed.setColor(couleur)
            embed.addFields({name:"Pseudo", value: `-${targetP}`},
            {name:"Fais le",value:`-${DlastOnline} à ${HlastOnline}h${objbody.creationTime.slice(14,16)}`})
            embed.setTimestamp();

            if (send ==1) {queteLogChannel.send({embeds: [embed]})}
           }
           else if (objbody.action == "PLAYER_QUEST_PARTICIPATION_DISABLED") {
            try {var BOT = objbody.playerBotOwnerUsername}catch(err) {}
            if (send ==1) {queteLogChannel.send({embeds: [embed]})}
            if (BOT == undefined) {var Player = objbody.playerUsername}
            if (objbody.targetPlayerUsername != undefined) {var targetP = objbody.targetPlayerUsername} else {var targetP = objbody.playerUsername; var Player = "AUTO"}

            embed.setTitle(`Participation désactivée: ${Player ?? ""}`)
            embed.setColor('RED')
            embed.addFields({name:"Pseudo", value: `-${targetP}`},
            {name:"Fais le",value:`-${DlastOnline} à ${HlastOnline}h${objbody.creationTime.slice(14,16)}`})
            embed.setTimestamp();

            if (send ==1) {queteLogChannel.send({embeds: [embed]})}
           }
           else if (objbody.action == "BLACKLIST_ADDED") {
            embed.setTitle(`Un membre à été ajouté sur la liste noir par ${objbody.playerUsername} ⚫`)
            embed.setColor('DARK_RED')
            embed.addFields({name:"Pseudo", value: `-${objbody.targetPlayerUsername}`},
            {name:"Fais le",value:`${DlastOnline} à ${HlastOnline}h${objbody.creationTime.slice(14,16)}`})
            embed.setTimestamp();

            logChannel.send({embeds: [embed]})
           }
           else if (objbody.action == "BLACKLIST_REMOVED") {
            embed.setTitle(`Un membre à été retiré de la liste noir par ${objbody.playerUsername} ⚫`)
            embed.setColor('DARK_GREEN')
            embed.addFields({name:"Pseudo", value: `-${objbody.targetPlayerUsername}`},
            {name:"Fais le",value:`${DlastOnline} à ${HlastOnline}h${objbody.creationTime.slice(14,16)}`})
            embed.setTimestamp();

            logChannel.send({embeds: [embed]})
           }
           else {console.log(objbody.action); logChannel.send(`Log: nouvelle action pas pris en charge: ${objbody.action}`)}
      }

        const infoL = {
          date: logs.body[0].creationTime
        }
        const objectToJsonL = JSON.stringify(infoL)
        writeFileSync(`././Information/Date/Log.json`, objectToJsonL)
        //MAUTO   - - - - - - - - - - - - - - - - - - - - - - -
        await new Promise(resolve => setTimeout(resolve, 5000))

        
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
        var objbodyM = Messageclan.body[n];var n = n-1

        var  HlastOnline = objbodyM.date.slice(11, 13)-1+2

            var annéeLO =  objbodyM.date.slice(0, 4); var moisLO = objbodyM.date.slice(5, 7); var jourLO= objbodyM.date.slice(8, 10);

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

            var DlastOnline = `${jourLO}/${moisLO}/${annéeLO}`; 
            try {var PlayerId = objbodyM.playerId}catch(err) {}

            if (PlayerId != undefined) {
            var  usernameb  = await superagent.get(`https://api.wolvesville.com/players/${PlayerId}`)
            .set( 'Authorization', process.env.WOV_TOKEN)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
            else {return Merr.edit({content:`Erreur: ${err}`})}}); 
            var pseudoErr = JSON.stringify(usernameb);
    
            if (pseudoErr !== undefined) {var pseudo = usernameb.text; var pseudobody = usernameb.body}
            var i = 2
            while (pseudoErr == undefined) { await new Promise(resolve => setTimeout(resolve, 1000))
                var  usernameb  = await superagent.get(`https://api.wolvesville.com/players/${PlayerId}`)
            .set( 'Authorization', process.env.WOV_TOKEN)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
            else {return Merr.edit({content:`Erreur: ${err}`})}});
            var pseudoErr = JSON.stringify(usernameb);
            var pseudo = usernameb.text; var pseudobody = usernameb.body}
          } try {var BOT = objbodyM.playerBotOwnerUsername}catch(err) {}

            const embed = new MessageEmbed();
          
            if (objbodyM.isSystem == true) {
              if (objbodyM.msg == `join&username=${pseudobody.username}`) {console.log(`${pseudobody.username} vient de rejoindre le clan`)
              }else { console.log(`${pseudobody.username} vient de quitter le clan`)}
            }
            else if (BOT != undefined) {
              embed.setAuthor({name: 'Chat WOV'})
              embed.setColor('WHITE')
              embed.setFields({name: `\`BOT\``, value: `-${objbodyM.msg}`}, {name: "fais le", value: `${DlastOnline} à ${HlastOnline}h${objbodyM.date.slice(14,16)}`})
              embed.setThumbnail(client.user.displayAvatarURL())
              embed.setTimestamp();
            }
            else if (objbodyM.msg != undefined) {
              embed.setAuthor({name: 'Chat WOV'})
              embed.setColor('#77b5fe')
              embed.addFields({name: `Pseudo: \`${pseudobody.username}\``, value: objbodyM.msg}, {name: "fais le", value: `${DlastOnline} à ${HlastOnline}h${objbodyM.date.slice(14,16)}`})
              embed.setThumbnail(pseudobody.equippedAvatar.url)
              embed.setTimestamp();
            }
            else if (objbodyM.emojiId != undefined) {
              const Minfo = await errChannel.send(`Requête en cours`)
              const Merr = await errChannel.send(`- - - - -`)
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
                Merr.delete(); Minfo.delete();
    
                var emojisC = 0;
                while (emojis.body[emojisC].id !== objbodyM.emojiId) {var emojisC = emojisC +1}
                var msg = emojis.body[emojisC].urlPreview

                embed.setAuthor({name: 'Chat WOV'})
                embed.setColor('#77b5fe')
                embed.addFields({name: `Pseudo: \`${pseudobody.username}\``, value: emojis.body[emojisC].name}, {name: "fais le", value: `${DlastOnline} à ${HlastOnline}h${objbodyM.date.slice(14,16)}`})
                embed.setImage(msg)
                embed.setThumbnail(pseudobody.equippedAvatar.url)
                embed.setTimestamp();
            }
            else {console.log(objbodyM); logChannel.send(`Log: nouvelle action pas pris en charge: ${objbodyM}`)}

            mautoChannel.send({ embeds: [embed]})
          }
          const infoM = {
            date: Messageclan.body[0].date
          }
          const objectToJsonM = JSON.stringify(infoM)
          writeFileSync(`././Information/Date/Mauto.json`, objectToJsonM)
        await new Promise(resolve => setTimeout(resolve, 60000))}}
        
        module.exports= { log }
      