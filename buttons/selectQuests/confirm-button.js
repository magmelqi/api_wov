const {readFileSync, readdirSync, unlinkSync} = require ("fs");
const { MessageEmbed } = require ('discord.js')

module.exports = {
    name: "confirm-button",
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

            if (InfoA.Type == false) {var couleur = 'ff8000'} else {var couleur = 'FFC0CB'}
            const embed = new MessageEmbed()
            .setTitle('**__Skin sélectionné__**')
            .setImage(InfoA.Image)
            .setColor(couleur)
            .setFooter({text: "Sélection terminé"})
            .setTimestamp();
            await interaction.message.edit({content:`${nom}`,embeds: [embed]})
        const filter = msg =>  msg.author.id === interaction.user.id && msg.content.includes("O") || msg.content.includes("N");

        var A = false
        await interaction.reply({content:`${interaction.user.username}, souhaitez-vous réellement lancer la quête pour le skin du choix numéro ${nomF}? (o/n)`})
        .then(async() => {
           await interaction.channel.awaitMessages({ filter, max: 1, time: 5000, errors: ['time'] })
                .then(collected => {
                    if (collected.first().content == "O"){
                    interaction.followUp(`${collected.first().author.username} vient de confirmer le lancement de la quête à 21h00`); return A = true}
                    if (collected.first().content == "N"){
                        interaction.followUp(`${collected.first().author.username} - Annulation de la quête ${nomF}...`); return A = false}
                    
                })
                .catch(collected => {
                    interaction.channel.send("Le temps est écoulé.");
                });
        });
        await new Promise(resolve => setTimeout(resolve, 2000))
        if (A) {interaction.channel.send(`Lancement de la quête ${nomF}... \nR.I.P suite du code inexistante`); console.log(InfoA.Id)} else {interaction.channel.send(`Annulation du lancement de la quête réussie`)}


       }
  }
  
