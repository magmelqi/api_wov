const { MessageEmbed } = require('discord.js');
const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const {writeFileSync, readFileSync, unlinkSync} = require ("fs");
const dayjs = require ('dayjs');

module.exports = {
    name: "donadd",
    category: 'don',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'donadd', 
    examples: ['donadd'],
    description: 'Actualise l\'or et les gems des membres',
       async run (client, message, args) {
        const Mquests = await message.channel.send('Chargement des dons')
        var Dons = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/ledger`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {Mquests.edit({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
          else {return Mquests.edit({content:`Erreur: ${err}`})}});
         var objErr= JSON.stringify(Dons);
         
         if (objErr !== undefined) {var text = Dons.text}
         var i = 2
         while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
           var Dons = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/ledger`)
         .set( 'Authorization', process.env.WOV_TOKEN)
         .set('Content-Type', 'application/json')
         .set('Accept', 'application/json')
         .catch((err) =>  {
           if (err == "Error: Too Many Requests") {Mquests.edit({content:`Erreur, tentatives: \`${i}\``})}
         else {return Mquests.edit({content:`Erreur: ${err}`})}});
         var objErr= JSON.stringify(Dons);
          try {var text = Dons.text}catch(err) {}; var i = i+1} 
        console.log ('Commande banque fait'); 

          const heure = dayjs().format("HH:mm")

        const embed = new MessageEmbed()
        .setTitle(`Liste des dons reçu:`)
        .setTimestamp();

        var InfoLastest = JSON.parse(readFileSync(`././Information/Date/Don.json`, 'utf-8'))
        var AncienMessage = InfoLastest.date;
          var n = 0; 
  
          while (Dons.body[n].creationTime !== AncienMessage && n !== 99){var n = n+1;};
          var n =n-1
  
        while( n !== -1 ){
          var objbody = Dons.body[n];var n = n-1

          if (objbody.type == "DONATE") {
          if (objbody.gold > 0) {
            embed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`Don de ${objbody.playerUsername} de ${objbody.gold} or.`})
           try{ var orErg = JSON.parse(readFileSync(`././Information/Or/Member-Id/${objbody.playerId}.json`, 'utf-8'))}catch(err) {}
           if (orErg != undefined) { var or =orErg.Or -1 +1; var gold = objbody.gold -1 +1
            const info = {
              Pseudo: objbody.playerUsername,
              PlayerId: objbody.playerId,
              DonId: objbody.id,
              Or: or + gold,
              Création: objbody.creationTime,
              Heure: heure
            }; const objectToJson = JSON.stringify(info)

            writeFileSync(`././Information/Or/Member-Id/${objbody.playerId}.json`, objectToJson)
            if (orErg.Pseudo != objbody.playerUsername) {
              unlinkSync(`././Information/Or/Member-Pseudo/${orErg.Pseudo}.json`, 'utf-8')
            };
            writeFileSync(`././Information/Or/Member-Pseudo/${objbody.playerUsername}.json`, objectToJson)
           } 
           else if (orErg == undefined) {
            const info = {
              Pseudo: objbody.playerUsername,
              PlayerId: objbody.playerId,
              DonId: objbody.id,
              Or: objbody.gold,
              Création: objbody.creationTime,
              Heure: heure
            }; const objectToJson = JSON.stringify(info)
  
            writeFileSync(`././Information/Or/Member-Id/${objbody.playerId}.json`, objectToJson)
            writeFileSync(`././Information/Or/Member-Pseudo/${objbody.playerUsername}.json`, objectToJson)
           }
          }
          else if (objbody.gems > 0) {
            embed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`Don de ${objbody.playerUsername} de ${objbody.gems} gemmes.`})
            try{ var gemmeErg = JSON.parse(readFileSync(`././Information/Gemme/Member-Id/${objbody.playerId}.json`, 'utf-8'))}catch(err) {}
           if (gemmeErg != undefined) { var gemme =gemmeErg.Gemme -1 +1; var gems = objbody.gems -1 +1
            const info = {
              Pseudo: objbody.playerUsername,
              PlayerId: objbody.playerId,
              DonId: objbody.id,
              Gemme: gemme + gems,
              Création: objbody.creationTime,
              Heure: heure
            }; const objectToJson = JSON.stringify(info)
  
            writeFileSync(`././Information/Gemme/Member-Id/${objbody.playerId}.json`, objectToJson)
            if (gemmeErg.Pseudo != objbody.playerUsername) {
              unlinkSync(`././Information/Gemme/Member-Pseudo/${gemmeErg.Pseudo}.json`, 'utf-8')
            };
            writeFileSync(`././Information/Gemme/Member-Pseudo/${objbody.playerUsername}.json`, objectToJson)
           } 
           else if (gemmeErg == undefined) {
            const info = {
              Pseudo: objbody.playerUsername,
              PlayerId: objbody.playerId,
              DonId: objbody.id,
              Gemme: objbody.gems,
              Création: objbody.creationTime,
              Heure: heure
            }; const objectToJson = JSON.stringify(info)

            writeFileSync(`././Information/Gemme/Member-Id/${objbody.playerId}.json`, objectToJson)
            writeFileSync(`././Information/Gemme/Member-Pseudo/${objbody.playerUsername}.json`, objectToJson)
           }
          }
          else {embed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`Erreur, type de don de contenant aucun don pour: ${playerUsername}`})}

        
     var nb = i+1}}

     const infoD = {date: Dons.body[0].creationTime}; const objectToJsonD = JSON.stringify(infoD)
    writeFileSync(`././Information/Date/Don.json`, objectToJsonD)

     if (nb > 1) {embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`Update des dons de ${nb} membres`})}
     else if (nb == undefined) {embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`Aucun don n'a été fait`})} 
     else {embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`Update des dons de ${nb} membre`})}
     message.channel.send({embeds: [embed]})
    },

    async runSlash(client, interaction) { 
      
      interaction.reply({content: 'Actualisation des dons...', ephemeral: true})
      var Dons = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/ledger`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {
        if (err == "Error: Too Many Requests") {interaction.editReply({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
        else {return interaction.editReply({content:`Erreur: ${err}`})}});
       var objErr= JSON.stringify(Dons);
       
       if (objErr !== undefined) {var text = Dons.text}
       var i = 2
       while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
         var Dons = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/ledger`)
       .set( 'Authorization', process.env.WOV_TOKEN)
       .set('Content-Type', 'application/json')
       .set('Accept', 'application/json')
       .catch((err) =>  {
         if (err == "Error: Too Many Requests") {interaction.editReply({content:`Erreur, tentatives: \`${i}\``})}
       else {return interaction.editReply({content:`Erreur: ${err}`})}});
       var objErr= JSON.stringify(Dons);
        try {var text = Dons.text}catch(err) {}; var i = i+1} 
      console.log ('Commande banque fait'); 

        const heure = dayjs().format("HH:mm")

      const embed = new MessageEmbed()
      .setTitle(`Liste des dons reçu:`)
      .setTimestamp();

      var InfoLastest = JSON.parse(readFileSync(`././Information/Date/Don.json`, 'utf-8'))
      var AncienMessage = InfoLastest.date;
        var n = 0; 

        while (Dons.body[n].creationTime !== AncienMessage && n !== 99){var n = n+1;};
        var n =n-1

      while( n !== -1 ){
        var objbody = Dons.body[n];var n = n-1

        if (objbody.type == "DONATE") {
        if (objbody.gold > 0) {
          embed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`Don de ${objbody.playerUsername} de ${objbody.gold} or.`})
         try{ var orErg = JSON.parse(readFileSync(`././Information/Or/Member-Id/${objbody.playerId}.json`, 'utf-8'))}catch(err) {}
         if (orErg != undefined) { var or =orErg.Or -1 +1; var gold = objbody.gold -1 +1
          const info = {
            Pseudo: objbody.playerUsername,
            PlayerId: objbody.playerId,
            DonId: objbody.id,
            Or: or + gold,
            Création: objbody.creationTime,
            Heure: heure
          }; const objectToJson = JSON.stringify(info)

          writeFileSync(`././Information/Or/Member-Id/${objbody.playerId}.json`, objectToJson)
          if (orErg.Pseudo != objbody.playerUsername) {
            unlinkSync(`././Information/Or/Member-Pseudo/${orErg.Pseudo}.json`, 'utf-8')
          };
          writeFileSync(`././Information/Or/Member-Pseudo/${objbody.playerUsername}.json`, objectToJson)
         } 
         else if (orErg == undefined) {
          const info = {
            Pseudo: objbody.playerUsername,
            PlayerId: objbody.playerId,
            DonId: objbody.id,
            Or: objbody.gold,
            Création: objbody.creationTime,
            Heure: heure
          }; const objectToJson = JSON.stringify(info)

          writeFileSync(`././Information/Or/Member-Id/${objbody.playerId}.json`, objectToJson)
          writeFileSync(`././Information/Or/Member-Pseudo/${objbody.playerUsername}.json`, objectToJson)
         }
        }
        else if (objbody.gems > 0) {
          embed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`Don de ${objbody.playerUsername} de ${objbody.gems} gemmes.`})
          try{ var gemmeErg = JSON.parse(readFileSync(`././Information/Gemme/Member-Id/${objbody.playerId}.json`, 'utf-8'))}catch(err) {}
         if (gemmeErg != undefined) { var gemme =gemmeErg.Gemme -1 +1; var gems = objbody.gems -1 +1
          const info = {
            Pseudo: objbody.playerUsername,
            PlayerId: objbody.playerId,
            DonId: objbody.id,
            Gemme: gemme + gems,
            Création: objbody.creationTime,
            Heure: heure
          }; const objectToJson = JSON.stringify(info)

          writeFileSync(`././Information/Gemme/Member-Id/${objbody.playerId}.json`, objectToJson)
          if (gemmeErg.Pseudo != objbody.playerUsername) {
            unlinkSync(`././Information/Gemme/Member-Pseudo/${gemmeErg.Pseudo}.json`, 'utf-8')
          };
          writeFileSync(`././Information/Gemme/Member-Pseudo/${objbody.playerUsername}.json`, objectToJson)
         } 
         else if (gemmeErg == undefined) {
          const info = {
            Pseudo: objbody.playerUsername,
            PlayerId: objbody.playerId,
            DonId: objbody.id,
            Gemme: objbody.gems,
            Création: objbody.creationTime,
            Heure: heure
          }; const objectToJson = JSON.stringify(info)

          writeFileSync(`././Information/Gemme/Member-Id/${objbody.playerId}.json`, objectToJson)
          writeFileSync(`././Information/Gemme/Member-Pseudo/${objbody.playerUsername}.json`, objectToJson)
         }
        }
        else {embed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`Erreur, type de don de contenant aucun don pour: ${playerUsername}`})}

      
   var nb = i+1}}

   const infoD = {date: Dons.body[0].creationTime}; const objectToJsonD = JSON.stringify(infoD)
    writeFileSync(`././Information/Date/Don.json`, objectToJsonD)
    
   if (nb > 1) {embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`Update des dons de ${nb} membres`})}
   else if (nb == undefined) {embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`Aucun don n'a été fait`})} 
   else {embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`Update des dons de ${nb} membre`})}
   interaction.channel.send({embeds: [embed]})
   }
  }