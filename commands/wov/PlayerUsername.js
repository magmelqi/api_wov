const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();

module.exports = {
    name: "profil",
    category: 'wov',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'profil [Pseudo]',
    examples: ['profil Hqrmonie'],
    description: "Voir le profil du pseudo",
      run: async(client, message, args) => {
        let member = message.mentions.members.first();
        if (args[0] == undefined && member == undefined) return message.reply('merci d\'entrer un \`pseudo\` apres le nom de la commande');

        if (member == undefined) {var nom = message.content.substring(7).trim()
        } else {var nom = member.displayName}

        var Mprofil= await message.channel.send(`Recherche du profil de ${nom}...`)
        var profil = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`) 
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {Mprofil.edit({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
            else if (err == "Error: Not Found") {return Mprofil.edit({content:`Pseudo inexistant`})}
            else {return Mprofil.edit({content:`Erreur: ${err}`})}});
            var objErr= JSON.stringify(profil);

            if (objErr !== undefined) {var data = profil.body}
            var i = 2
            while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
              var profil = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
            .set( 'Authorization', process.env.WOV_TOKEN)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .catch((err) => {
              if (err == "Error: Too Many Requests") {Mprofil.edit({content: `Erreur sur la recherche du \`profil\`, tentatives: \`${i}\``})}
              else if (err == "Error: Not Found") {return Mprofil.edit({content:`Pseudo inexistant`})}
              else {return Mprofil.edit({content:`Erreur: ${err}`})}});
              var objErr= JSON.stringify(profil);
              try {var data = await profil.body}catch(err) {}; var i = i+1}

              if (data !== undefined) {
          await Mprofil.edit({content: `Recherche du profil de ${nom} réussi\nRecherche du clan de ${nom}, veuillez patienter` });var data = profil.body}

          try {var CI1= data.clanId}catch(err) {}
        if (CI1 === undefined) {var PP = "Pas de clan"} 
        else {await new Promise(resolve => setTimeout(resolve, 2000))
        var ClanIdb = await superagent.get(`https://api.wolvesville.com/clans/${CI1}/info`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {Mprofil.edit({content: "Erreur a la 2ème requêtes\n\`2ème tentatives en cours...\`"})}
          else {return Mprofil.edit({content: `Erreur: ${err}`})}}); 
          var objErr= JSON.stringify(ClanIdb);

          if (objErr !== undefined) {var Clanbody = ClanIdb.body}
          var i = 2
          while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
            var ClanIdb = await superagent.get(`https://api.wolvesville.com/clans/${CI1}/info`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {Mprofil.edit({content: `Erreur sur la recherche du \`clan\`, tentatives: \`${i}\``})}
            else {return Mprofil.edit({content: `Erreur: ${err}`})}}); 
            var objErr= JSON.stringify(ClanIdb);
            try {var Clanbody = await ClanIdb.body}catch(err) {}; var i = i+1} 


            if (Clanbody.name == "Wolves Legion 🐺") {var tigre = "  🐅" }}

            var TotalGame = data.gameStats.totalWinCount + data.gameStats.totalLoseCount + data.gameStats.totalTieCount+data.gameStats.exitGameBySuicideCount
            var win = data.gameStats.totalWinCount*100 / TotalGame; var winP = JSON.stringify(win)
            var lose = data.gameStats.totalLoseCount*100 / TotalGame; var loseP = JSON.stringify(lose)
            var suicide = data.gameStats.exitGameBySuicideCount*100 / TotalGame; var suicideP = JSON.stringify(suicide)

            var tdjH = data.gameStats.totalPlayTimeInMinutes/60; console.log(tdjH)
            var tdjHt = JSON.stringify(tdjH); 
  
            
            var a = 0; var b =1
            while (tdjHTest !== "." && a !== 10) {
              var tdjHTest = tdjHt.slice(a,b); var a =a+1; var b =b+1; 
              var tdjHeure = tdjHt.slice(a-1); var tdjM = tdjHeure*60;
              }; 
              var tdjMt = JSON.stringify(tdjM); var tdjMf = tdjMt.slice(0,2); var tdjMfPOINTS = tdjMt.slice(1,2); 
              var tdjHf = tdjHt.slice(0, a-1); console.log(`${tdjHf}h${tdjMf}`)
              if (a == 10) {var tdjMf =0; var tdjHf = tdjHt}
              


              var tdjJ = tdjHf/24; var tdjJt = JSON.stringify(tdjJ); console.log(tdjJt)
              var a = 0; var b =1
              while (tdjTest !== "." && a !== 6) {
                var tdjTest = tdjJt.slice(a,b); var a =a+1; var b =b+1; console.log(tdjTest, a)
                var tdjJour = tdjJt.slice(a-1); var tdjJh = tdjJour*24
              };  var tdjJtf = JSON.stringify(tdjJh); var tdjJF = tdjJtf.slice(0,2); var tdjJFPOINTS = tdjJtf.slice(1,2)
              var tdjHeureF = tdjJt.slice(0, a-1);
             if ( a == 6) {var tdjHeureF = tdjJ; var tdjJF =0}

             if (tdjJFPOINTS == ".") {var tdjJF =tdjJtf.slice(0,1)}
              if (tdjMfPOINTS == ".") {var tdjMf = tdjMt.slice(0,1)}
            if (tdjJh > `${tdjJF}.90`) {var tdjJF = tdjJF-1+2}
              if (tdjM > `${tdjMf}.90`) {var tdjMf = tdjMf-1+2}
            

            if (CI1 !== undefined) {var clanName = Clanbody.name} else {var clanName = "Pas de clan"}

            var  HlastOnline = data.lastOnline.slice(11, 13)-1+2

            var annéeLO =  data.lastOnline.slice(0, 4); var moisLO = data.lastOnline.slice(5, 7); var jourLO= data.lastOnline.slice(8, 10);

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
  
            try {
              var  HcreationTime = data.creationTime.slice(11, 13)-1+2
  
              var annéeCT =  data.creationTime.slice(0, 4); var moisCT = data.creationTime.slice(5, 7); var jourCT = data.creationTime.slice(8, 10);
  
              var Created = `${jourCT}/${moisCT}/${annéeCT} à ${HcreationTime}h${data.creationTime.slice(14,16)}`}catch(err) {}
  
          try{
            const embed = new MessageEmbed()
              .setAuthor({name : `Profil WOV`})
              .setColor(data.profileIconColor)
              .setDescription(`${data.personalMessage ?? "Vide"}`)
              .addFields(
                { name: `Pseudo`, value: `${data.username} ${tigre ?? ""}`, inline: true}, 
                { name: 'Niveau:', value: `${data.level}`, inline: true},
                { name: `Clan:`, value: `${clanName}`},
                { name: 'Dernière connexion:', value: `${DlastOnline} à ${HlastOnline}h${data.lastOnline.slice(14,16)}`,inline: true},
                { name: 'Création du compte:', value: `${Created ?? "Pas d'info disponible"}`, inline: true},
                { name: `Temps de jeu:`, value: `${tdjHeureF} jours ${tdjJF}h ${tdjMf}min` },
                { name: `Victoire:`, value: `${data.gameStats.totalWinCount} - ${winP.slice(0,2)}%`, inline:true},
                { name: `Défaite:`, value: `${data.gameStats.totalLoseCount} - ${loseP.slice(0,2)}%`, inline:true},
                { name: `Fuite:`, value: `${data.gameStats.exitGameBySuicideCount} - ${suicideP.slice(0,4)}%`, inline:true})
              .setImage(`${data.equippedAvatar.url}`)
              .setTimestamp()
      
            Mprofil.edit({ content: ' ', embeds: [embed]}),console.log(`Pseudo: ${nom} Clan: ${clanName}`), console.log ('Commande profil faite');
      
      } catch (err) {console.log(err)} return
        
  },
  options:[
    {
        name: "pseudo",
        description: "tapez le pseudo pour voir son profil wov",
        type: "STRING",
        required: true,
    }],
      runSlash: async(client, interaction) => {
        const nom = interaction.options.getString('pseudo');
        await interaction.reply({content:`Recherche du profil de ${nom}...`, ephemeral:true,fetchReply: true})
        var profil = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`) 
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {interaction.editReply({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`", ephemeral:true})}
          else if (err == "Error: Not Found") {return interaction.editReply({content:`Pseudo inexistant`, ephemeral:true})}
          else {return interaction.editReply({content:`Erreur: ${err}`, ephemeral: true})}});
          var objErr= JSON.stringify(profil);

          if (objErr !== undefined) {var data = profil.body}
          var i = 2
          while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
            var profil = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {interaction.editReply({content:`Erreur sur la recherche du \`profil\`, tentatives: \`${i}\``, ephemeral:true})}
            else if (err == "Error: Not Found") {return interaction.editReply({content:`Pseudo inexistant`, ephemeral:true})}
            else {return interaction.editReply({content:`Erreur: ${err}`, ephemeral:true})}});
            var objErr= JSON.stringify(profil);
            try {var data = await profil.body}catch(err) {}; var i = i+1} 

            if (data !== undefined)
            {await interaction.editReply({content: `Recherche du profil de ${nom} réussi\nRecherche du clan de ${nom}, veuillez patienter`, ephemeral: true})}
         try{ var CI1= data.clanId }catch(err) {}
        if (CI1 === undefined) {var PP = "Pas de clan"} 
        else {await new Promise(resolve => setTimeout(resolve, 2000))
        var ClanIdb = await superagent.get(`https://api.wolvesville.com/clans/${CI1}/info`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {interaction.editReply({content:"Erreur a la 2ème requêtes\n\`2ème tentatives en cours...\`", ephemeral:true})}
          else {return interaction.editReply({content:`Erreur ${err}`, ephemeral:true})}});
          var objErr= JSON.stringify(ClanIdb);

          if (objErr !== undefined) { var Clanbody = ClanIdb.body}
          var i = 2
          while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
            var ClanIdb = await superagent.get(`https://api.wolvesville.com/clans/${CI1}/info`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {interaction.editReply({content: `Erreur sur la recherche du \`clan\`, tentatives: \`${i}\``})}
            else {return interaction.editReply({content: `Erreur: ${err}`})}});
            var objErr= JSON.stringify(ClanIdb);
            try {var Clanbody = await ClanIdb.body}catch(err) {};var i = i+1} 


        if (Clanbody.name == "Wolves Legion 🐺") {var tigre = "  🐅" }}

          var TotalGame = data.gameStats.totalWinCount + data.gameStats.totalLoseCount + data.gameStats.totalTieCount+data.gameStats.exitGameBySuicideCount
          var win = data.gameStats.totalWinCount*100 / TotalGame; var winP = JSON.stringify(win)
          var lose = data.gameStats.totalLoseCount*100 / TotalGame; var loseP = JSON.stringify(lose)
          var suicide = data.gameStats.exitGameBySuicideCount*100 / TotalGame; var suicideP = JSON.stringify(suicide)

  
          var tdjH = data.gameStats.totalPlayTimeInMinutes/60 ; 
          var tdjHt = JSON.stringify(tdjH); 

          var a = 0; var b =1
          while (tdjHTest !== "." && a !== 10) {
            var tdjHTest = tdjHt.slice(a,b); var a =a+1; var b =b+1; 
            var tdjHeure = tdjHt.slice(a-1); var tdjM = tdjHeure*60;
            }; 
            var tdjMt = JSON.stringify(tdjM); var tdjMf = tdjMt.slice(0,2); var tdjMfPOINTS = tdjMt.slice(1,2); 
            var tdjHf = tdjHt.slice(0, a-1); console.log(`${tdjHf}h${tdjMf}`)
            if (a == 10) {var tdjMf =0; var tdjHf = tdjHt}
            


            var tdjJ = tdjHf/24; var tdjJt = JSON.stringify(tdjJ); console.log(tdjJt)
            var a = 0; var b =1
            while (tdjTest !== "." && a !== 6) {
              var tdjTest = tdjJt.slice(a,b); var a =a+1; var b =b+1; console.log(tdjTest, a)
              var tdjJour = tdjJt.slice(a-1); var tdjJh = tdjJour*24
            };  var tdjJtf = JSON.stringify(tdjJh); var tdjJF = tdjJtf.slice(0,2); var tdjJFPOINTS = tdjJtf.slice(1,2)
            var tdjHeureF = tdjJt.slice(0, a-1);
           if ( a == 6) {var tdjHeureF = tdjJ; var tdjJF =0}

           if (tdjJFPOINTS == ".") {var tdjJF =tdjJtf.slice(0,1)}
            if (tdjMfPOINTS == ".") {var tdjMf = tdjMt.slice(0,1)}
          if (tdjJh > `${tdjJF}.90`) {var tdjJF = tdjJF-1+2}
            if (tdjM > `${tdjMf}.90`) {var tdjMf = tdjMf-1+2}

          if (CI1 !== undefined) {var clanName = Clanbody.name} else {var clanName = "Pas de clan"}

          var  HlastOnline = data.lastOnline.slice(11, 13)-1+2

          var annéeLO =  data.lastOnline.slice(0, 4); var moisLO = data.lastOnline.slice(5, 7); var jourLO= data.lastOnline.slice(8, 10);

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

          try {
            var  HcreationTime = data.creationTime.slice(11, 13)-1+2

            var annéeCT =  data.creationTime.slice(0, 4); var moisCT = data.creationTime.slice(5, 7); var jourCT = data.creationTime.slice(8, 10);

            var Created = `${jourCT}/${moisCT}/${annéeCT} à ${HcreationTime}h${data.creationTime.slice(14,16)}`}catch(err) {}

        try{
          const embed = new MessageEmbed()
            .setAuthor({name : `Profil WOV`})
            .setColor(data.profileIconColor)
            .setDescription(`${data.personalMessage ?? "Vide"}`)
            .addFields(
              { name: `Pseudo`, value: `${data.username} ${tigre ?? ""}`, inline: true}, 
              { name: 'Niveau:', value: `${data.level}`, inline: true},
              { name: `Clan:`, value: `${clanName}`},
              { name: 'Dernière connexion:', value: `${DlastOnline} à ${HlastOnline}h${data.lastOnline.slice(14,16)}`,inline: true},
              { name: 'Création du compte:', value: `${Created ?? "Pas d'info disponible"}`, inline: true},
              { name: `Temps de jeu:`, value: `${tdjHeureF} jours ${tdjJF}h ${tdjMf}min` },
              { name: `Victoire:`, value: `${data.gameStats.totalWinCount} - ${winP.slice(0,2)}%`, inline:true},
              { name: `Défaite:`, value: `${data.gameStats.totalLoseCount} - ${loseP.slice(0,2)}%`, inline:true},
              { name: `Fuite:`, value: `${data.gameStats.exitGameBySuicideCount} - ${suicideP.slice(0,4)}%`, inline:true})
            .setImage(`${data.equippedAvatar.url}`)
            .setTimestamp()
      
            await interaction.channel.send({embeds: [embed] });console.log(`Pseudo: ${nom} Clan: ${clanName}`), console.log ('Commande profil faite');
      
      } catch (err) {console.log(err)} return
}}    