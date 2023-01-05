const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const {writeFileSync, readdirSync, unlinkSync } = require ("fs");
const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();

const buttons2 = new MessageActionRow()
.addComponents(
  new MessageButton()
  .setCustomId('return-button')
  .setLabel('⏪')
  .setStyle('PRIMARY'),

  new MessageButton()
  .setCustomId('confirm-button')
  .setLabel('✔️')
  .setStyle('SUCCESS'),

  new MessageButton()
  .setCustomId('annul-button')
  .setLabel('✖️')
  .setStyle('DANGER'),

  new MessageButton()
  .setCustomId('suivant-button')
  .setLabel('⏩')
  .setStyle('PRIMARY'),
)
     
module.exports = {
  name: "selectq",
  category: 'admin',
  permissions: ['BAN_MEMBERS'],
  ownerOnly: false,
  usage: 'selectq', 
  examples: ['selectq'],
  description: 'Commande selectq',
     async run (client, message, args) {

      try {
        var Lister = readdirSync(`././Information/Quête-info`, 'utf-8')} catch (err) {return console.log(err);}
        var Lisetet = JSON.stringify(Lister);

        for(let i=0; i < Lister.length; i++)  {
  
            var Listef = /.json"/g; var ListeS = Lisetet.search(Listef)
            var Listes = Lisetet.slice(1, ListeS+6); var Lisetet = Lisetet.slice(ListeS+6); 
            try {var ListeO = JSON.parse(Listes);}catch(err) {console.log(err)}

          try {
              unlinkSync(`././Information/Quête-info/${ListeO}`, 'utf-8')}catch (err) {console.log(err)}}


      const tryRequests = await message.channel.send('Requête en cours')
      var Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/available`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {
        if (err == "Error: Too Many Requests") {tryRequests.edit({content:`Erreur a la 1ère requête\n\`2ème tentatives en cours...\``})} 
        else {tryRequests.edit({content:`Erreur: ${err}`});return console.log(err)}}); 
      console.log ('Commande xpadd faite');
      var objErr= JSON.stringify(Messageclan);
      if (objErr !== undefined) {tryRequests.edit({content:`Calcul en cours...`}); var text= Messageclan.text}

      var i =2
      while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
        var Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/available`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {
        if (err == "Error: Too Many Requests") {tryRequests.edit({content:`Erreur, tentatives: \`${i}\` `})}
        else {tryRequests.edit({content:`Erreur: ${err}`});return console.log(err)};});
      var objErr= JSON.stringify(Messageclan)
      try{var text= Messageclan.text}catch(err) {};var i = i+1}
        
      var n = 0
        while (Messageclan.body[n] != undefined) {var body = Messageclan.body[n]; var n = n +1
          var image = body.promoImageUrl
          var type = body.purchasableWithGems;
          var id = body.id
          const info = {
            Image: image,
            Type: type,
            Id: id
          }; const objectToJson = JSON.stringify(info)

          writeFileSync(`././Information/Quête-info/Choix-${n}.json`, objectToJson)
        }




      var body = Messageclan.body[0];
      var image = body.promoImageUrl
      var type = body.purchasableWithGems;

        if (type == false) {var couleur = 'ff8000'} else {var couleur = 'FFC0CB'}

      const embed = new MessageEmbed()
      .setTitle('Choix du skin')
      .setColor(couleur)
      .setImage(image)
      .setTimestamp();
       tryRequests.edit({ content: 'Choix-1', embeds: [embed], components: [buttons2]})
  
     },
     async runSlash (client , interaction) {
      await interaction.reply({ content: 'Choix-1', components: [buttons]})
     }
}
