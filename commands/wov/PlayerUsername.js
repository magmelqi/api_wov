const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const axios = require('axios')

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
        const profil = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`) 
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {Mprofil.edit({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
            else if (err == "Error: Not Found") {return Mprofil.edit({content:`Pseudo inexistant`})}
            else {return Mprofil.edit({content:`Erreur: ${err}`})}});
            var objErr= JSON.stringify(profil);

            if (objErr == undefined) {Mprofil.edit({content:`Recherche du profil de ${nom}, veuillez patienter`})
              await new Promise(resolve => setTimeout(resolve, 5000))
              const profil = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
            .set( 'Authorization', process.env.WOV_TOKEN)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .catch((err) => {
              if (err == "Error: Too Many Requests") {return Mprofil.edit({content:"Veuillez retaper la commande, impossible de trouver le profil du joueur: \`Too Many Requests\`"})}
              else if (err == "Error: Not Found") {return Mprofil.edit({content:`Pseudo inexistant`})}
              else {return Mprofil.edit({content:`Erreur: ${err}`})}});
              var data = await profil.body} else {var data = await profil.body}
              if (data == undefined) return;
              if (data !== undefined) {
          await Mprofil.edit({content: `Recherche du profil de ${nom} réussi\nRecherche du clan de ${nom}, veuillez patienter` })}

          const CI1= data.clanId
        if (CI1 === undefined) {var PP = "Pas de clan"} 
        else {await new Promise(resolve => setTimeout(resolve, 5000))
        const ClanIdb = await superagent.get(`https://api.wolvesville.com/clans/${CI1}/info`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {Mprofil.edit({content: "Erreur a la 2ème requêtes\n\`2ème tentatives en cours...\`"})}
          else {return Mprofil.edit({content: `Erreur: ${err}`})}}); 
          var objErr= JSON.stringify(ClanIdb);

          if (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 5000))
            const ClanIdb = await superagent.get(`https://api.wolvesville.com/clans/${CI1}/info`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {return Mprofil.edit({content: "Veuillez retaper la commande, impossible de trouver le clan du joueur: \`Too Many Requests\`"})}
            else {return Mprofil.edit({content: `Erreur: ${err}`})}}); 
           var ClanId = await ClanIdb.text;} else {var ClanId = await ClanIdb.text;}


        var CNb= /name/g
        var CNf= /","description/g
        const CNDB = ClanId.search(CNb); const CNDF = ClanId.search(CNf); var CN1 = ClanId.slice(CNDB+7, CNDF);
        var CN2 = CN1.slice(0, 13);
        if (CN2 == "Wolves Legion") {var CN1= "Wolves Legion 🐺"; var tigre = "  🐅" }}

        try{
          const embed = new MessageEmbed()
          .setAuthor({name : `Profil WOV`})
          .setColor('WHITE')
          .setDescription(`${data.personalMessage ?? "Vide"}`)
          .addFields({ name: `Pseudo`, value: `${data.username} ${tigre ?? ""}`, inline: true}, { name: 'Niveau:', value: `${data.level}`},{ name: 'Dernière connexion:', value: `${data.lastOnline.slice(0, -14)} à ${data.lastOnline.slice(11, 13)-1+2}h${data.lastOnline.slice(14,16)}`},{ name: 'Création du compte:', value: `${data.creationTime.slice(0, -14)} à ${data.creationTime.slice(11, 13)-1+2}h${data.creationTime.slice(14,16)}`},{ name: `Clan:`, value: `${CN1 ?? PP}`})
          .setThumbnail()
          .setImage(`${data.equippedAvatar.url}`)
          .setTimestamp()
      
            Mprofil.edit({ content: ' ', embeds: [embed]}),console.log(`Pseudo: ${nom} Clan: ${CN1 ?? "Pas de clan"}`), console.log ('Commande profil faite');
      
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
        const profil = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`) 
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {interaction.reply({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`", ephemeral:true})}
          else if (err == "Error: Not Found") {return interaction.reply({content:`Pseudo inexistant`, ephemeral:true})}
          else {return interaction.reply({content:`Erreur: ${err}`, ephemeral: true})}});
          var objErr= JSON.stringify(profil);
          if (objErr !== undefined) {var Mprofil= await interaction.reply({content:`Recherche du profil de ${nom}...`, ephemeral:true,fetchReply: true})}

          if (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 5000))
            const profil = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {return interaction.editReply({content:"Veuillez retaper la commande, impossible de trouver le profil du joueur: \`Too Many Requests\`", ephemeral:true})}
            else if (err == "Error: Not Found") {return interaction.editReply({content:`Pseudo inexistant`, ephemeral:true})}
            else {return interaction.editReply({content:`Erreur: ${err}`, ephemeral:true})}});
            var data = await profil.body} else {var data = await profil.body}
        
          await interaction.editReply({content:`Recherche du clan de ${nom}, veuillez patienter`, ephemeral: true})
          const CI1= data.clanId
        if (CI1 === undefined) {var PP = "Pas de clan"} 
        else {await new Promise(resolve => setTimeout(resolve, 5000))
        const ClanIdb = await superagent.get(`https://api.wolvesville.com/clans/${CI1}/info`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {interaction.editReply({content:"Erreur a la 2ème requêtes\n\`2ème tentatives en cours...\`", ephemeral:true})}
          else {return interaction.editReply({content:`Erreur ${err}`, ephemeral:true})}});
          var objErr= JSON.stringify(ClanIdb);

          if (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 5000))
            const ClanIdb = await superagent.get(`https://api.wolvesville.com/clans/${CI1}/info`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {return interaction.editReply({content: "Veuillez retaper la commande, impossible de trouver le clan du joueur: \`Too Many Requests\`"})}
            else {return interaction.editReply({content: `Erreur: ${err}`})}}); 
           var ClanId = await ClanIdb.text;} else {var ClanId = await ClanIdb.text;}



        var CNb= /name/g
        var CNf= /","description/g
        const CNDB = ClanId.search(CNb); const CNDF = ClanId.search(CNf); var CN1 = ClanId.slice(CNDB+7, CNDF); 
        var CN2 = CN1.slice(0, 13);
        if (CN2 == "Wolves Legion") {var CN1= "Wolves Legion 🐺"; var tigre = "  🐅" }}

        try{
          const embed = new MessageEmbed()
          .setAuthor({name : `Profil WOV`})
          .setColor('WHITE')
          .setDescription(`${data.personalMessage ?? "Vide"}`)
          .addFields({ name: `Pseudo`, value: `${data.username} ${tigre ?? ""}`, inline: true}, { name: 'Niveau:', value: `${data.level}`},{ name: 'Dernière connexion:', value: `${data.lastOnline.slice(0, -14)} à ${data.lastOnline.slice(11, 13)-1+2}h${data.lastOnline.slice(14,16)}`},{ name: 'Création du compte:', value: `${data.creationTime.slice(0, -14)} à ${data.creationTime.slice(11, 13)-1+2}h${data.creationTime.slice(14,16)}`},{ name: `Clan:`, value: `${CN1 ?? PP}`})
          .setThumbnail()
          .setImage(`${data.equippedAvatar.url}`)
          .setTimestamp()
      
            await interaction.channel.send({embeds: [embed] });console.log(`Pseudo: ${nom} Clan: ${CN1 ?? "Pas de clan"}`), console.log ('Commande profil faite');
      
      } catch (err) {console.log(err)} return
}}    