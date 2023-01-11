const { MessageEmbed } = require('discord.js')
const {readFileSync, readdirSync, writeFileSync} = require ("fs");
const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();


module.exports = {
  name: "absence",
  category: 'xp',
  permissions: ['BAN_MEMBERS'],
  ownerOnly: false,
  usage: 'absence [pseudo] [Jusqu\'a quand] [raison]',
  examples: ['absence bidule 30/02/1111 ban'],
  description: "La commande absence pour signaler une absence",
    async run (client, message, args) {
        let member = message.mentions.members.first();
        if (args[0] == undefined && member == undefined) return message.reply('merci d\'entrer un \`pseudo\` après le nom de la commande');
        if (args[1] == undefined) {return message.reply("merci de rentrer la date du dernier jour d'absence après le pseudo.")}
        if (args[2] == undefined) {return message.reply("merci de rentrer la raison de l'absence après la date.")}
        if (args[3] != undefined) {var raisonT = `${args[2]} ${args[3]}`} else {var raisonT = args[2]}

        if (member == undefined) {var nom = args[0]
        } else {var nom = member.displayName}

        try {
          var InfoA = JSON.parse(readFileSync(`././Information/xp/absence/${nom}.json`, 'utf-8'))} catch (err) {}

          if (InfoA != undefined) {
        const filter = msg =>  msg.author.id === message.author.id && msg.content.includes("O") || msg.content.includes("N") || msg.content.includes("o") || msg.content.includes("n");

        var A = false
        await message.reply({content:`\`${nom}\` à déjà une absence signalée jusqu'au \`${InfoA.dateLimite}\` pour la raison \`${InfoA.raison}\`, souhaitez-vous réellement \`remplacer\` l'absence ? (o/n)`})
        .then(async() => {
           await message.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] })
                .then(collected => {
                    if (collected.first().content == "O" || collected.first().content == "o"){return A = true}
                    if (collected.first().content == "N" || collected.first().content == "n"){return A = false}
                    
                })
                .catch(collected => {
                    message.channel.send("Le temps est écoulé.");
                });
              });
            } else {var A = true}

              if (A) {

        var Mprofil= await message.channel.send(`Recherche des informations de ${nom}...`)
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
       
                if (InfoA == undefined) {
              const info = {
                Pseudo: data.username,
                PlayerId: data.id,
                dateLimite: args[1],
                raison: raisonT
              };  const objectToJson = JSON.stringify(info)
              writeFileSync(`././Information/xp/absence/${data.username}.json`, objectToJson)
              Mprofil.edit(`Absence de \`${data.username}\` jusqu'au \`${args[1]}\` pour la raison \`${raisonT}\` crée avec succés`)
            } else {
              const info = {
                Pseudo: data.username,
                PlayerId: data.id,
                dateLimite: args[1],
                raison: raisonT
              };  const objectToJson = JSON.stringify(info)
              writeFileSync(`././Information/xp/absence/${data.username}.json`, objectToJson)
              Mprofil.edit(`Absence de \`${data.username}\` jusqu'au \`${args[1]}\` pour la raison \`${raisonT}\` remplacé avec succés`)
            }
            }

    },
    options:[
      {
          name: "pseudo",
          description: "tapez le pseudo",
          type: "STRING",
          required: true,
      },
      {
          name: "date",
          description: "tapez la date du dernier jour d'absence",
          type: "STRING",
          required: true,
      },
      {
          name: "raison",
          description: "tapez la raison de l'absence",
          type: "STRING",
          required: true,
      },
    ],

    async runSlash (client, interaction) {
      const nom = interaction.options.getString('pseudo');
      const date = interaction.options.getString('date');
      const raisonT = interaction.options.getString('raison');

      try {
        var InfoA = JSON.parse(readFileSync(`././Information/xp/absence/${nom}.json`, 'utf-8'))} catch (err) {}

        if (InfoA != undefined) {
      const filter = msg =>  msg.author.id === interaction.user.id && msg.content.includes("O") || msg.content.includes("N") || msg.content.includes("o") || msg.content.includes("n");

      var A = false
      await interaction.reply({content:`\`${nom}\` à déjà une absence signalée jusqu'au \`${InfoA.dateLimite}\` pour la raison \`${InfoA.raison}\`, souhaitez-vous réellement \`remplacer\` l'absence ? (o/n)`})
      .then(async() => {
         await interaction.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] })
              .then(collected => {
                  if (collected.first().content == "O" || collected.first().content == "o"){return A = true}
                  if (collected.first().content == "N" || collected.first().content == "n"){return A = false}
                  
              })
              .catch(collected => {
                  interaction.channel.send("Le temps est écoulé.");
              });
            });
          } else {var A = true}

            if (A) {

      var profil = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`) 
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {interaction.editReply({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
          else if (err == "Error: Not Found") {return interaction.editReply({content:`Pseudo inexistant`})}
          else {return interaction.editReply({content:`Erreur: ${err}`})}});
          var objErr= JSON.stringify(profil);

          if (objErr !== undefined) {var data = profil.body}
          var i = 2
          while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
            var profil = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {interaction.editReply({content: `Erreur sur la recherche du \`profil\`, tentatives: \`${i}\``})}
            else if (err == "Error: Not Found") {return interaction.editReply({content:`Pseudo inexistant`})}
            else {return interaction.editReply({content:`Erreur: ${err}`})}});
            var objErr= JSON.stringify(profil);
            try {var data = await profil.body}catch(err) {}; var i = i+1}
     
              if (InfoA == undefined) {
            const info = {
              Pseudo: data.username,
              PlayerId: data.id,
              dateLimite: date,
              raison: raisonT
            };  const objectToJson = JSON.stringify(info)
            writeFileSync(`././Information/xp/absence/${data.username}.json`, objectToJson)
            interaction.editReply(`Absence de \`${data.username}\` jusqu'au \`${date}\` pour la raison \`${raisonT}\` crée avec succés`)
          } else {
            const info = {
              Pseudo: data.username,
              PlayerId: data.id,
              dateLimite: date,
              raison: raisonT
            };  const objectToJson = JSON.stringify(info)
            writeFileSync(`././Information/xp/absence/${data.username}.json`, objectToJson)
            interaction.editReply(`Absence de \`${data.username}\` jusqu'au \`${date}\` pour la raison \`${raisonT}\` remplacé avec succés`)
          }
          }

  },
};
