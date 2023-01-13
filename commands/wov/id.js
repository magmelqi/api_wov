const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();

module.exports = {
    name: "id",
    category: 'wov',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'id [Pseudo]',
    examples: ['id Hqrmonie'],
    description: "Voir l'id' du pseudo",
      run: async(client, message, args) => {
        let member = message.mentions.members.first();
        if (args[0] == undefined && member == undefined) return message.reply('merci d\'entrer un \`pseudo\` apres le nom de la commande');

        if (member == undefined) {var nom = args[0]
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

          Mprofil.edit({content:`L'id de ${nom} est:\n${profil.body.id}`})
        
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
            interaction.editReply({content:`L'id de ${nom} est:\n${profil.body.id}`})
}}    