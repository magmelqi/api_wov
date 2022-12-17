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
        const profil = await superagent.get(`https://api.wolvesville.com/clans/search?name=${nom}`) 
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {Mprofil.edit({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
            else if (err == "Error: Not Found") {return Mprofil.edit({content:`Clan inexistant`})}
            else {return Mprofil.edit({content:`Erreur: ${err}`})}});
            var objErr= JSON.stringify(profil);

            if (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 5000))
              const profil = await superagent.get(`https://api.wolvesville.com/clans/search?name=${nom}`)
            .set( 'Authorization', process.env.WOV_TOKEN)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .catch((err) => {
              if (err == "Error: Too Many Requests") {return Mprofil.edit({content:"Veuillez retaper la commande, impossible de trouver le clan: \`Too Many Requests\`"})}
              else if (err == "Error: Not Found") {return Mprofil.edit({content:`Clan inexistant`})}
              else {return Mprofil.edit({content:`Erreur: ${err}`})}});
              var data = await profil.body[0]} else {var data = await profil.body[0]};
              if (data == undefined) return;
              if (data !== undefined) {
          await Mprofil.edit({content: `Recherche du Clan intitulé ${data.name} réussi\nRecherche du Chef de ${data.name}, veuillez patienter` })}

          const CI1= data.leaderId; 
        await new Promise(resolve => setTimeout(resolve, 5000))
        const PseudoIdb = await superagent.get(`https://api.wolvesville.com/players/${CI1}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {Mprofil.edit({content: "Erreur a la 2ème requêtes\n\`2ème tentatives en cours...\`"})}
          else {return Mprofil.edit({content: `Erreur: ${err}`})}}); 
          var objErr= JSON.stringify(PseudoIdb);

          if (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 5000))
            const PseudoIdb = await superagent.get(`https://api.wolvesville.com/players/${CI1}`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {return Mprofil.edit({content: "Veuillez retaper la commande, impossible de trouver le Pseudo du joueur: \`Too Many Requests\`"})}
            else {return Mprofil.edit({content: `Erreur: ${err}`})}}); 
           var PseudoId = await PseudoIdb.body;} else {var PseudoId = await PseudoIdb.body;}


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
        var Mprofil= await interaction.channel.send({content:`Recherche du Clan intitulé: ${nom}...`, ephemeral:true, fetchReply: true})
        const profil = await superagent.get(`https://api.wolvesville.com/clans/search?name=${nom}`) 
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {interaction.editReply({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
            else if (err == "Error: Not Found") {return interaction.editReply({content:`Clan inexistant`})}
            else {return interaction.editReply({content:`Erreur: ${err}`})}});
            var objErr= JSON.stringify(profil);

            if (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 5000))
              const profil = await superagent.get(`https://api.wolvesville.com/clans/search?name=${nom}`)
            .set( 'Authorization', process.env.WOV_TOKEN)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .catch((err) => {
              if (err == "Error: Too Many Requests") {return interaction.editReply({content:"Veuillez retaper la commande, impossible de trouver le clan: \`Too Many Requests\`"})}
              else if (err == "Error: Not Found") {return interaction.editReply({content:`Clan inexistant`})}
              else {return interaction.editReply({content:`Erreur: ${err}`})}});
              var data = await profil.body[0]} else {var data = await profil.body[0]};
              if (data == undefined) return;
              if (data !== undefined) {
          await interaction.editReply({content: `Recherche du Clan intitulé ${data.name} réussi\nRecherche du Chef de ${data.name}, veuillez patienter` })}

          const CI1= data.leaderId; 
        await new Promise(resolve => setTimeout(resolve, 5000))
        const PseudoIdb = await superagent.get(`https://api.wolvesville.com/players/${CI1}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {interaction.editReply({content: "Erreur a la 2ème requêtes\n\`2ème tentatives en cours...\`"})}
          else {return interaction.editReply({content: `Erreur: ${err}`})}}); 
          var objErr= JSON.stringify(PseudoIdb);

          if (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 5000))
            const PseudoIdb = await superagent.get(`https://api.wolvesville.com/players/${CI1}`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {return interaction.editReply({content: "Veuillez retaper la commande, impossible de trouver le Pseudo du joueur: \`Too Many Requests\`"})}
            else {return interaction.editReply({content: `Erreur: ${err}`})}}); 
           var PseudoId = await PseudoIdb.body;} else {var PseudoId = await PseudoIdb.body;}


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