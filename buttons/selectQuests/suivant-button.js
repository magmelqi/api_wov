const {readFileSync} = require ("fs");
const { MessageEmbed } = require ('discord.js')

module.exports = {
    name: "suivant-button",
       async runInteraction (client , interaction) {
        var nom = interaction.message.content
        var nomT = JSON.stringify(nom); var nomTF = nomT.slice(7, -1); var nomF = nomTF -1 +2;
        var nom = `Choix-${nomF}`;
        
        try {
            var InfoA = JSON.parse(readFileSync(`././Quête-info/${nom}.json`, 'utf-8'))} catch (err) {interaction.reply({content:`Il n'y a pas plus haut que le choix ${nomF-1}.`, ephemeral:true})}

            if (InfoA.Type == false) {var couleur = 'ff8000'} else {var couleur = 'FFC0CB'}

        const embed = new MessageEmbed()
        .setTitle('Choix du skin')
        .setImage(InfoA.Image)
        .setColor(couleur)
        .setFooter({text: "Sélection en cours"})
        .setTimestamp();
           interaction.reply({content:`Visualisation du choix ${nomF}`, ephemeral:true})
        await interaction.message.edit({content:`${nom}`,embeds: [embed]})
       }
  }
  
