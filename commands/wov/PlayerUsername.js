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
        const profil = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`) 
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {return message.channel.send("Veuillez retaper la commande")}
            else if (err == "Error: Not Found") {return message.channel.send(`Pseudo inexistant`)}
            else {return message.channel.send(`Erreur: ${err}`)}}); 
          const data = await profil.body

          const CI1= data.clanId
        if (CI1 === undefined) {var PP = "Pas de clan"} 
        else {
        const ClanIdb = await superagent.get(`https://api.wolvesville.com/clans/${CI1}/info`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {return message.channel.send("Veuillez retaper la commande")}
          else {return message.channel.send(`Erreur: ${err}`)}}); 
        const ClanId = await ClanIdb.text;
        var CNb= /name/g
        var CNf= /","description/g
        const CNDB = ClanId.search(CNb); const CNDF = ClanId.search(CNf); var CN1 = ClanId.slice(CNDB+7, CNDF)};
        var CN2 = CN1.slice(0, 13);
        if (CN2 == "Wolves Legion") {var CN1= "Wolves Legion 🐺"; var tigre = "  🐅" }

        try{
          const embed = new MessageEmbed()
          .setAuthor({name : `Profil WOV`})
          .setColor('WHITE')
          .setDescription(`${data.personalMessage ?? "Vide"}`)
          .addFields({ name: `Pseudo`, value: `${data.username} ${tigre ?? ""}`, inline: true}, { name: 'Niveau:', value: `${data.level}`},{ name: 'Dernière connexion:', value: `${data.lastOnline.slice(0, -14)} à ${data.lastOnline.slice(11, 13)-1+2}h${data.lastOnline.slice(14,16)}`},{ name: 'Création du compte:', value: `${data.creationTime.slice(0, -14)} à ${data.creationTime.slice(11, 13)-1+2}h${data.creationTime.slice(14,16)}`},{ name: `Clan:`, value: `${CN1 ?? PP}`})
          .setThumbnail()
          .setImage(`${data.equippedAvatar.url}`)
          .setTimestamp()
      
            message.channel.send({ embeds: [embed]}),console.log(`Pseudo: ${nom} Clan: ${CN1 ?? "Pas de clan"}`), console.log ('Commande profil faite');
      
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
            if (err == "Error: Too Many Requests") {return interaction.reply({content:"Veuillez retaper la commande", ephemeral:true})}
            else if (err == "Error: Not Found") {return interaction.reply({content:`Pseudo inexistant`, ephemeral:true})}
            else {return interaction.reply(`Erreur: ${err}`)}}); 
          const data = await profil.body

          const CI1= data.clanId
        if (CI1 === undefined) {var PP = "Pas de clan"} 
        else {
        const ClanIdb = await superagent.get(`https://api.wolvesville.com/clans/${CI1}/info`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {return interaction.reply({content:"Veuillez retaper la commande", ephemeral:true})}
          else {return interaction.reply({content:`Erreur ${err}`, ephemeral:true})}}); 
        const ClanId = await ClanIdb.text;
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
      
            await interaction.reply({ embeds: [embed]}),console.log(`Pseudo: ${nom} Clan: ${CN1 ?? "Pas de clan"}`), console.log ('Commande profil faite');
      
      } catch (err) {console.log(err)} return
}}    