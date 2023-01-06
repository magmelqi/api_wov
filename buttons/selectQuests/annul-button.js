const {readFileSync, readdirSync, unlinkSync} = require ("fs");
const { MessageEmbed, MessageAttachment } = require ('discord.js')

module.exports = {
    name: "annul-button",
       async runInteraction (client , interaction) {

        var nom = interaction.message.content
        var nomT = JSON.stringify(nom); var nomTF = nomT.slice(7, -1); var nomF = nomTF -1 +1;
        var nom = `Choix-${nomF}`;

        try {
            var InfoA = JSON.parse(readFileSync(`././Information/Quête-info/${nom}.json`, 'utf-8'))} catch (err) {return interaction.reply({content:`Erreur dans l'ouverture du fichier correspondant à la quête choisis ${nomF-1}.`, ephemeral:true})}

         try {
        var Lister = readdirSync(`././Information/Quête-info`, 'utf-8')} catch (err) {return console.log(err);}
        var Lisetet = JSON.stringify(Lister);

        for(let i=0; i < Lister.length; i++)  {
  
            var Listef = /.json"/g; var ListeS = Lisetet.search(Listef)
            var Listes = Lisetet.slice(1, ListeS+6); var Lisetet = Lisetet.slice(ListeS+6); 
            try {var ListeO = JSON.parse(Listes);}catch(err) {console.log(err)}

          try {
              unlinkSync(`././Information/Quête-info/${ListeO}`, 'utf-8')}catch (err) {console.log(err)}}

            await interaction.message.delete()

        try {interaction.reply({content:"  "})}catch(err) {}

       }
  }
  
