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
        var nom = message.content.substring(8).trim()
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

          try {
            var Created = `${data.creationTime.slice(0, -14)} à ${data.creationTime.slice(11, 13)-1+2}h${data.creationTime.slice(14,16)}`}catch(err) {}

            var TotalGame = data.gameStats.totalWinCount + data.gameStats.totalLoseCount + data.gameStats.totalTieCount
            var win = data.gameStats.totalWinCount*100 / TotalGame; var winP = JSON.stringify(win)
            var lose = data.gameStats.totalLoseCount*100 / TotalGame; var loseP = JSON.stringify(lose)
            var suicide = data.gameStats.exitGameBySuicideCount*100 / TotalGame; var suicideP = JSON.stringify(suicide)

            var tdjH = data.gameStats.totalPlayTimeInMinutes/60; console.log(tdjH)
            var tdjHt = JSON.stringify(tdjH); 
  
            
            var a = 0; var b =1
            while (tdjHTest !== ".") {
              var tdjHTest = tdjHt.slice(a,b); var a =a+1; var b =b+1; 
              var tdjHeure = tdjHt.slice(a-1); var tdjM = tdjHeure*60;
              }; 
              var tdjMt = JSON.stringify(tdjM); var tdjMf = tdjMt.slice(0,2); 
              var tdjHf = tdjHt.slice(0, a-1); console.log(`${tdjHf}h${tdjMf}`)
              
              


              var tdjJ = tdjHf/24; var tdjJt = JSON.stringify(tdjJ)
              var a = 0; var b =1
              while (tdjTest !== ".") {
                var tdjTest = tdjJt.slice(a,b); var a =a+1; var b =b+1
                var tdjJour = tdjJt.slice(a-1); var tdjJh = tdjJour*24

              }; var tdjJtf = JSON.stringify(tdjJh); var tdjJF = tdjJtf.slice(0,2); 
              var tdjHeureF = tdjJt.slice(0, a-1);
    
            if (tdjJh > `${tdjJF}.90`) {var tdjJF = tdjJF-1+2}
              if (tdjM > `${tdjMf}.90`) {var tdjMf = tdjMf-1+2}
            
  
            if (Clanbody.name !== undefined) {var clanName = Clanbody.name} else {var clanName = "Pas de clan"}

          try{
            const embed = new MessageEmbed()
              .setAuthor({name : `Profil WOV`})
              .setColor(data.profileIconColor)
              .setDescription(`${data.personalMessage ?? "Vide"}`)
              .addFields(
                { name: `Pseudo`, value: `${data.username} ${tigre ?? ""}`, inline: true}, 
                { name: 'Niveau:', value: `${data.level}`, inline: true},
                { name: `Clan:`, value: `${clanName}`},
                { name: 'Dernière connexion:', value: `${data.lastOnline.slice(0, -14)} à ${data.lastOnline.slice(11, 13)-1+2}h${data.lastOnline.slice(14,16)}`,inline: true},
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
        description: "taper le pseudo pour voir son profil wov",
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

        try {
          var Created = `${data.creationTime.slice(0, -14)} à ${data.creationTime.slice(11, 13)-1+2}h${data.creationTime.slice(14,16)}`}catch(err) {}

          var TotalGame = data.gameStats.totalWinCount + data.gameStats.totalLoseCount + data.gameStats.totalTieCount
          var win = data.gameStats.totalWinCount*100 / TotalGame; var winP = JSON.stringify(win)
          var lose = data.gameStats.totalLoseCount*100 / TotalGame; var loseP = JSON.stringify(lose)
          var suicide = data.gameStats.exitGameBySuicideCount*100 / TotalGame; var suicideP = JSON.stringify(suicide)

  
          var tdjH = data.gameStats.totalPlayTimeInMinutes/60 ; 
          var tdjHt = JSON.stringify(tdjH); 

          var a = 0; var b =1
          while (tdjHTest !== ".") {
            var tdjHTest = tdjHt.slice(a,b); var a =a+1; var b =b+1; 
            var tdjHeure = tdjHt.slice(a-1); var tdjM = tdjHeure*60;
            }; 
            var tdjMt = JSON.stringify(tdjM); var tdjMf = tdjMt.slice(0,2); 
            var tdjHf = tdjHt.slice(0, a-1); console.log(`${tdjHf}h${tdjMf}`)
            
            


            var tdjJ = tdjHf/24; var tdjJt = JSON.stringify(tdjJ)
            var a = 0; var b =1
            while (tdjTest !== ".") {
              var tdjTest = tdjJt.slice(a,b); var a =a+1; var b =b+1
              var tdjJour = tdjJt.slice(a-1); var tdjJh = tdjJour*24

            }; var tdjJtf = JSON.stringify(tdjJh); var tdjJF = tdjJtf.slice(0,2); 
            var tdjHeureF = tdjJt.slice(0, a-1);
    
            if (tdjJh > `${tdjJF}.90`) {var tdjJF = tdjJF-1+2}
              if (tdjM > `${tdjMf}.90`) {var tdjMf = tdjMf-1+2}

          if (CI1 !== undefined) {var clanName = Clanbody.name} else {var clanName = "Pas de clan"}

        try{
          const embed = new MessageEmbed()
            .setAuthor({name : `Profil WOV`})
            .setColor(data.profileIconColor)
            .setDescription(`${data.personalMessage ?? "Vide"}`)
            .addFields(
              { name: `Pseudo`, value: `${data.username} ${tigre ?? ""}`, inline: true}, 
              { name: 'Niveau:', value: `${data.level}`, inline: true},
              { name: `Clan:`, value: `${clanName}`},
              { name: 'Dernière connexion:', value: `${data.lastOnline.slice(0, -14)} à ${data.lastOnline.slice(11, 13)-1+2}h${data.lastOnline.slice(14,16)}`,inline: true},
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