const {readFileSync, readdirSync, unlinkSync} = require ("fs");
const { MessageEmbed, Formatters, MessageAttachment } = require ('discord.js');
const dayjs = require("dayjs");
const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();

module.exports = {
    name: "confirm-button",
       async runInteraction (client , interaction) {

        var a = 1
        var questsActive = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/active`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {interaction.channel.reply({content:`Erreur, 2ème tentatives`}); return a = 1}
          if (err == "Error: Not Found") {return a = 2} 
          else {interaction.channel.reply({content:`Erreur: ${err}`, ephemeral:true}); console.log(err); return a = 3}});
        var objErr= JSON.stringify(questsActive);
        if (objErr != undefined) {var body = questsActive.body}
  
        var i =2
        while (objErr == undefined && a == 1) {await new Promise(resolve => setTimeout(resolve, 1000))
          var questsActive = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/active`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {interaction.channel.editReply({content:`Erreur, tentatives: \`${i}\` `})}
          if (err == "Error: Not Found") {return a = 2}
          else {interaction.channel.editReply({content:`Erreur: ${err}`}); console.log(err); return a = 3};});
        var objErr= JSON.stringify(questsActive)
        try{var text= questsActive.text}catch(err) {};var i = i+1}

            if ( a == 1) {
                const embed = new MessageEmbed()
                .setTitle('**__Quête déjà en cours__**')
                .setImage(body.quest.promoImageUrl)
                .setColor('BLUE')
                .setFooter({text: "Quête actif"})
                .setTimestamp();
                await interaction.message.edit({embeds: [embed]})
                interaction.reply({content:' '})
            }else if (a == 2){
        

        var nom = interaction.message.content
        var nomT = JSON.stringify(nom); var nomTF = nomT.slice(7, -1); var nomF = nomTF -1 +1;
        var nom = `Choix-${nomF}`;

        try {
            var InfoA = JSON.parse(readFileSync(`././Information/Quête-info/${nom}.json`, 'utf-8'))} catch (err) {return interaction.reply({content:`Erreur dans l'ouverture du fichier correspondant à la quête choisis ${nomF-1}.`, ephemeral:true})}

            const embed = new MessageEmbed()
            .setTitle('**__Skin sélectionné__**')
            .setImage(InfoA.Image)
            .setColor('GREEN')
            .setFooter({text: "Sélection terminé"})
            .setTimestamp();
            await interaction.message.edit({content:`${nom}`,embeds: [embed]})
        const filter = msg =>  msg.author.id === interaction.user.id && msg.content.includes("O") || msg.content.includes("N") || msg.content.includes("o") || msg.content.includes("n");

        var A = false
        await interaction.reply({content:`${interaction.user.username}, souhaitez-vous réellement lancer la quête pour le skin du choix numéro ${nomF}? (o/n)`})
        .then(async() => {
           await interaction.channel.awaitMessages({ filter, max: 1, time: 5000, errors: ['time'] })
                .then(collected => {
                    if (collected.first().content == "O" || collected.first().content == "o"){
                    interaction.followUp(`${collected.first().author.username} vient de confirmer le lancement de la quête à 21h00`); return A = true}
                    if (collected.first().content == "N" || collected.first().content == "n"){
                        interaction.followUp(`${collected.first().author.username} - Annulation de la quête ${nomF}...`); return A = false}
                    
                })
                .catch(collected => {
                    interaction.channel.send("Le temps est écoulé.");
                });
        });
        await new Promise(resolve => setTimeout(resolve, 2000))
        if (A) {
            try {
                var Lister = readdirSync(`././Information/Quête-info`, 'utf-8')} catch (err) {}
                var Lisetet = JSON.stringify(Lister);
        
                for(let i=0; i < Lister.length; i++)  {
          
                    var Listef = /.json"/g; var ListeS = Lisetet.search(Listef)
                    var Listes = Lisetet.slice(1, ListeS+6); var Lisetet = Lisetet.slice(ListeS+6); 
                    try {var ListeO = JSON.parse(Listes);}catch(err) {console.log(err)}
        
                  try {
                      unlinkSync(`././Information/Quête-info/${ListeO}`, 'utf-8')}catch (err) {}}

                     var jour = `${dayjs().format("ddd")}`; var j = 0

      while (jour != "Tue") { var j = j +1
             var jour = `${dayjs().add(+j, 'day').format("ddd")}`;
      };
      var date = `${dayjs().add(+j, 'day').format("YYYY-MM-DD")}`
      
         const realativeTempsF = Formatters.time(dayjs(`${date}T20:00`).unix(), Formatters.TimestampStyles.RelativeTime)
         const TempsF = Formatters.time(dayjs(`${date}T20:00`).unix(), Formatters.TimestampStyles.ShortDateTime); 

         var heure = `${dayjs().format("HH")}`;
              var h = 0
              while (heure != 20) { var h = h +1
                     var heure = heure -1 +2
                     if ( heure == 24) {var heure = 0}
              };var h = h-1
              var Hmili = h*60*60*1000; 

              var min = `${dayjs().format("mm")}`
              var m = 0
              while (min != 00) { var m = m +1;
                     var min = min -1 + 2
                     if ( min == 60) {var min = 0}
              };var m = m -1
              var mMili = m*60*1000;

              var sec = `${dayjs().format("ss")}`
              var s = 0
              while (sec != 00) { var s = s +1;
                     var sec = sec -1 + 2
                     if ( sec == 60) {var sec = 0}
              }; var s = 60 - s +1
              var sMili = s*1000;
              var jMili = j*24*60*60*1000

              var Mili = jMili+ Hmili + mMili - sMili
                    
              interaction.channel.send(`Lancement de la quête ${nomF}...\n${TempsF} (${realativeTempsF})`); console.log(InfoA.Id)
                    console.log(Mili)
                    if (Mili < 540000) {return interaction.channel.send('Erreur: veuillez lancer la commande avant 20h50')}
                    else {var image = new MessageAttachment(InfoA.Image)
                      var  Mili = Mili - 600000
              await new Promise(resolve => setTimeout(resolve, Mili))
            interaction.channel.send({content:"Lancement de la quête dans `\`\`10 min\`\`\nPour l'annuler faite la commande reload (?reload)", files:[image]})
            await new Promise(resolve => setTimeout(resolve, 540000))
            interaction.channel.send("Lancement de la quête dans `\`\`1 min\`\`\nPour l'annuler faite la commande reload (?reload)")
            await new Promise(resolve => setTimeout(resolve, 60000))
            var  QuestsClaim = await superagent.post(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/claim`)
            .send({questId: InfoA.Id})
            .set( 'Authorization', process.env.WOV_TOKEN)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .catch((err) => { if (err == "Error: Too Many Requests") {interaction.channel.send({content:`Erreur, veuillez reconfirmer la quête`})}
            else {return interaction.channel.send({content:`Erreur: ${err}`})}}); 
        interaction.channel.send(`La quête a été lancé !`)
        const QuêteChannel =  client.channels.cache.get('817290280242774036')//817290280242774036
        QuêteChannel.send(`Quête lancée ! <:panda_youpi:724242729046900756>`)}
        interaction.message.delete()
        } else {interaction.channel.send(`Annulation du lancement de la quête réussie`)}


       }}
  }
  
