const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();

module.exports = {
    name: "clan",
    category: 'wov',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'clan [nom du clan]',
    examples: ['clan Wolves Legion 🐺'],
    description: "Voir les détailles du clan",
      run: async(client, message, args) => {
        var nom = message.content.substring(5).trim(); 
        var Mprofil= await message.channel.send(`Recherche du Clan intitulé: ${nom}...`)
        var profil = await superagent.get(`https://api.wolvesville.com/clans/search?name=${nom}`) 
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {Mprofil.edit({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
            else if (err == "Error: Not Found") {return Mprofil.edit({content:`Clan inexistant`})}
            else {return Mprofil.edit({content:`Erreur: ${err}`})}});
            var objErr= JSON.stringify(profil);

            var i =2
            while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
              var profil = await superagent.get(`https://api.wolvesville.com/clans/search?name=${nom}`)
            .set( 'Authorization', process.env.WOV_TOKEN)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .catch((err) => {
              if (err == "Error: Too Many Requests") { Mprofil.edit({content:`Erreur sur la recherche du \`clan\`, tentatives: \`${i}\``})}
              else if (err == "Error: Not Found") {return Mprofil.edit({content:`Clan inexistant`})}
              else {return Mprofil.edit({content:`Erreur: ${err}`})}});
              var objErr= JSON.stringify(profil);
              try {var data = await profil.body[0]}catch(err) {}; var i = i+1}
              
              if (data !== undefined) {
          await Mprofil.edit({content: `Recherche du Clan intitulé ${data.name} réussi\nRecherche du Chef de ${data.name}, veuillez patienter` })}

          const CI1= data.leaderId; 
        await new Promise(resolve => setTimeout(resolve, 2000))
        var PseudoIdb = await superagent.get(`https://api.wolvesville.com/players/${CI1}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {Mprofil.edit({content: "Erreur a la 2ème requêtes\n\`2ème tentatives en cours...\`"})}
          else {return Mprofil.edit({content: `Erreur: ${err}`})}}); 
          var objErr= JSON.stringify(PseudoIdb);

          var i =2
          while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
            var PseudoIdb = await superagent.get(`https://api.wolvesville.com/players/${CI1}`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {Mprofil.edit({content: `Erreur sur la recherche du \`chef\`, tentatives: \`${i}\``})}
            else {return Mprofil.edit({content: `Erreur: ${err}`})}});
            var objErr= JSON.stringify(PseudoIdb);
           try {var PseudoId = await PseudoIdb.body}catch(err) {}; var i = i+1} 


        try{
          const embed = new MessageEmbed()
          .setAuthor({name : `Clan WOV-${data.language}`})
          .setColor(data.iconColor)
          .setDescription(`${data.description ?? "Vide"}`)
          .addFields({ name: `Nom du clan:`, value: `${data.name}`, inline: true}, { name: 'Id:', value: `${data.id}`},{ name: 'Chef:', value: `${PseudoId.username}`},{ name: 'Création du clan:', value: `${data.creationTime.slice(0, -14)} à ${data.creationTime.slice(11, 13)-1+2}h${data.creationTime.slice(14,16)}`},{ name: `Nombre de membre:`, value: `${data.memberCount}`},{ name: `Type de clan:`, value: `${data.joinType}`})
          .setThumbnail()
          .setTimestamp()
      
            Mprofil.edit({ content: ' ', embeds: [embed]});console.log(`Clan: ${data.name} Chef: ${PseudoId.username}`); console.log ('Commande clan faite');
      
      } catch (err) {console.log(err)} return
        
  },
  options:[
    {
        name: "clan",
        description: "taper le clanpour voir ses informations",
        type: "STRING",
        required: true,
    }],
      runSlash: async(client, interaction) => {
        const nom = interaction.options.getString('clan');
        var Mprofil= await interaction.reply({content:`Recherche du Clan intitulé: ${nom}...`, ephemeral:true, fetchReply: true})
        var profil = await superagent.get(`https://api.wolvesville.com/clans/search?name=${nom}`) 
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {interaction.editReply({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
            else if (err == "Error: Not Found") {return interaction.editReply({content:`Clan inexistant`})}
            else {return interaction.editReply({content:`Erreur: ${err}`})}});
            var objErr= JSON.stringify(profil);

            var i =2
            while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
              var profil = await superagent.get(`https://api.wolvesville.com/clans/search?name=${nom}`)
            .set( 'Authorization', process.env.WOV_TOKEN)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .catch((err) => {
              if (err == "Error: Too Many Requests") {interaction.editReply({content:`Erreur sur la recherche du \`clan\`, tentatives: \`${i}\``})}
              else if (err == "Error: Not Found") {return interaction.editReply({content:`Clan inexistant`})}
              else {return interaction.editReply({content:`Erreur: ${err}`})}});
              var objErr= JSON.stringify(profil);
              try {var data = await profil.body[0]}catch(err) {}; var i = i+1} 

              if (data !== undefined) {
          await interaction.editReply({content: `Recherche du Clan intitulé ${data.name} réussi\nRecherche du Chef de ${data.name}, veuillez patienter` })}

          const CI1= data.leaderId; 
        await new Promise(resolve => setTimeout(resolve, 2000))
        var PseudoIdb = await superagent.get(`https://api.wolvesville.com/players/${CI1}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {interaction.editReply({content: "Erreur a la 2ème requêtes\n\`2ème tentatives en cours...\`"})}
          else {return interaction.editReply({content: `Erreur: ${err}`})}}); 
          var objErr= JSON.stringify(PseudoIdb);

          var i =2
          while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
            var PseudoIdb = await superagent.get(`https://api.wolvesville.com/players/${CI1}`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {interaction.editReply({content: `Erreur sur la recherche du \`chef\`, tentatives: \`${i}\``})}
            else {return interaction.editReply({content: `Erreur: ${err}`})}});
            var objErr= JSON.stringify(PseudoIdb); 
           try {var PseudoId = await PseudoIdb.body}catch(err) {}; var i =i+1}


        try{
          const embed = new MessageEmbed()
          .setAuthor({name : `Clan WOV-${data.language}`})
          .setColor(data.iconColor)
          .setDescription(`${data.description ?? "Vide"}`)
          .addFields({ name: `Nom du clan:`, value: `${data.name}`, inline: true}, { name: 'Id:', value: `${data.id}`},{ name: 'Chef:', value: `${PseudoId.username}`},{ name: 'Création du clan:', value: `${data.creationTime.slice(0, -14)} à ${data.creationTime.slice(11, 13)-1+2}h${data.creationTime.slice(14,16)}`},{ name: `Nombre de membre:`, value: `${data.memberCount}`},{ name: `Type de clan:`, value: `${data.joinType}`})
          .setThumbnail()
          .setTimestamp()
      
            interaction.channel.send({ embeds: [embed]});console.log(`Clan: ${data.name} Chef: ${PseudoId.username}`); console.log ('Commande clan faite');
      
      } catch (err) {console.log(err)} return
}}    