const {readFileSync} = require ("fs");
const { MessageEmbed } = require ('discord.js')

module.exports = {
    name: "suivant-button",
       async runInteraction (client , interaction) {
        var nom = interaction.message.content
        var nomT = JSON.stringify(nom); var nomTF = nomT.slice(7, -1); var nomF = nomTF -1 +2;
        var nom = `Choix-${nomF}`; var nomb = 0
        
        try {
            var InfoA = JSON.parse(readFileSync(`././Information/Quête-info/${nom}.json`, 'utf-8'))} catch (err) { nomb = `Choix-1`}
            if (nomb != 0) {var nom = nomb;var InfoA = JSON.parse(readFileSync(`././Information/Quête-info/${nom}.json`, 'utf-8'))}

            if (InfoA.Type == false) {var couleur = 'ff8000'} else {var couleur = 'FFC0CB'}

        const embed = new MessageEmbed()
        .setTitle('Choix du skin')
        .setImage(InfoA.Image)
        .setColor(couleur)
        .setFooter({text: "Sélection en cours"})
        .setTimestamp();
        try { interaction.reply({content:"  ", ephemeral:true}) }catch(err) {}
        await interaction.message.edit({content:`${nom}`,embeds: [embed]})
       }
  }
  