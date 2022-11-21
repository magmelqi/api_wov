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
        const { data } = await axios.get(`https://api.wolvesville.com/players/search?username=${nom}`, {
          headers: { 'Authorization': process.env.WOV_TOKEN, 'Content-Type': 'application/json', 'Accept': 'application/json'}}).catch((err) => {return message.channel.send(`Pseudo introuvable\nou ${err}`)}); 

          const CI1= data.clanId
        if (CI1 === undefined) {var PP = "Pas de clan"} 
        else {
        const ClanIdb = await superagent.get(`https://api.wolvesville.com/clans/${CI1}/info`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {console.log('Clan introuvable')});   
        const ClanId = await ClanIdb.text;
        var CNb= /name/g
        var CNf= /","description/g
        const CNDB = ClanId.search(CNb); const CNDF = ClanId.search(CNf); var CN1 = ClanId.slice(CNDB+7, CNDF)};


        try{
          const embed = new MessageEmbed()
          .setAuthor({name : `Profil WOV`})
          .setColor('WHITE')
          .setDescription(`${data.personalMessage ?? "Vide"}`)
          .addFields({ name: 'Pseudo', value: `${data.username}`, inline: true}, { name: 'Niveau:', value: `${data.level}`},{ name: 'Dernière connexion:', value: `${data.lastOnline.slice(0, -14)} à ${data.lastOnline.slice(11, 16)}`},{ name: 'Création du compte:', value: `${data.creationTime.slice(0, -14)} à ${data.creationTime.slice(11, 16)}`},{ name: 'Clan:', value: `${CN1 ?? PP}`})
          .setThumbnail()
          .setImage(`${data.equippedAvatar.url}`)
          .setTimestamp()
      
            message.channel.send({ embeds: [embed]}),console.log(`Pseudo: ${nom} Clan: ${CN1 ?? "Pas de clan"}`), console.log ('Commande username faite');
      
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
        const { data } = await axios.get(`https://api.wolvesville.com/players/search?username=${nom}`, {
          headers: { 'Authorization': process.env.WOV_TOKEN, 'Content-Type': 'application/json', 'Accept': 'application/json'}}).catch((err) => {return interaction.reply(`Pseudo introuvable\nou ${err}`)}); 

          const CI1= data.clanId
        if (CI1 === undefined) {var PP = "Pas de clan"} 
        else {
        const ClanIdb = await superagent.get(`https://api.wolvesville.com/clans/${CI1}/info`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {console.log('Trop de requet')});   
        const ClanId = await (`${ClanIdb.text}`);
        var CNb= /name/g
        var CNf= /","description/g
        const CNDB = ClanId.search(CNb); const CNDF = ClanId.search(CNf); var CN1 = ClanId.slice(CNDB+7, CNDF)};


        try{
          const embed = new MessageEmbed()
          .setAuthor({name : `Profil WOV`})
          .setColor('WHITE')
          .setDescription(`${data.personalMessage ?? "Vide"}`)
          .addFields({ name: 'Pseudo', value: `${data.username}`, inline: true}, { name: 'Niveau:', value: `${data.level}`},{ name: 'Dernière connexion:', value: `${data.lastOnline.slice(0, -14)} à ${data.lastOnline.slice(11, 16)}`},{ name: 'Création du compte:', value: `${data.creationTime.slice(0, -14)} à ${data.creationTime.slice(11, 16)}`},{ name: 'Clan:', value: `${CN1 ?? PP}`})
          .setThumbnail()
          .setImage(`${data.equippedAvatar.url}`)
          .setTimestamp()
      
            await interaction.reply({ embeds: [embed]}),console.log(`Pseudo: ${nom} Clan: ${CN1 ?? "Pas de clan"}`), console.log ('Commande username faite');
      
      } catch (err) {console.log(err)} return
}}    