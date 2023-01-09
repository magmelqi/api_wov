const { MessageEmbed } = require ('discord.js')
const {readFileSync, readdirSync} = require ("fs");

module.exports = {
    name: "return-button",
       async runInteraction (client , interaction) {
        var nom = interaction.message.content
        var nomT = JSON.stringify(nom); var nomTF = nomT.slice(7, -1); var nomF = nomTF -1;
        var nom = `Choix-${nomF}`; var nomb = 0
        

        try {
            var InfoA = JSON.parse(readFileSync(`././Information/Quête-info/${nom}.json`, 'utf-8'))} catch (err) {console.log(err); nomb = 1}
         
            if (nomb != 0) {var nom = nomb; 
              var Lister = readdirSync(`././Information/Quête-info`, 'utf-8')
                var InfoA = JSON.parse(readFileSync(`././Information/Quête-info/Choix-${Lister.length}.json`, 'utf-8')); var nom = `Choix-${Lister.length}`}
         
            if (InfoA.Type == false) {var couleur = 'ff8000'} else {var couleur = 'FFC0CB'}

        const embed = new MessageEmbed()
        .setTitle('Choix du skin')
        .setImage(InfoA.Image)
        .setColor(couleur)
        .setFooter({text: "Sélection en cours"})
        .setTimestamp();
        try{ interaction.reply({content:"  ", ephemeral:true})}catch(err) {}
        await interaction.message.edit({content: nom, embeds: [embed]})
       
  }
}