const superagent = require('superagent').agent();
const { MessageEmbed, Interaction } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const Clanauthorized = new MessageChannel;

module.exports = {
    name: "bot",
    category: 'wov',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'bot',
    examples: ['bot'],
    description: 'Voir les clans affiliés au bot',
      run: async(client, message, args) => {
        const Mprofil = await message.channel.send('Recherche en cours...')
        const Clanauthorized = await superagent.get('https://api.wolvesville.com/clans/authorized/')
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) =>  {
          if (err == "Error: Too Many Requests") {Mprofil.edit({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
        else {return Mprofil.edit({content:`Erreur: ${err}`})}}); 
        console.log ('Commande bot fait');
        var objErr= JSON.stringify(Clanauthorized);

        if (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 5000))
          const Clanauthorized = await superagent.get('https://api.wolvesville.com/clans/authorized/')
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) =>  {
          if (err == "Error: Too Many Requests") {return Mprofil.edit({content:"Veuillez retaper la commande, impossible de trouver les clans affilés au bot \`Too Many Requests\`"})}
        else {return Mprofil.edit({content:`Erreur: ${err}`})}}); 
         var obj= await Clanauthorized.text;} else { var obj= await Clanauthorized.text;}

        const emebed = new MessageEmbed()
        .setTitle('Clan connecté au bot:')
        .setColor('WHITE')

        for (var i=0; Clanauthorized.body[i] !== undefined;i++) {var i =i;
        var fin = /"memberCount":/g; var finR = obj.search(fin);var test = obj.slice(finR+16,finR+17);
        if (test == "}") {var finS = obj.slice(1, finR+17)} else {obj.slice(1, fin+16)};

        var data = JSON.parse(finS)
        var creationTime = data.creationTime 
        var TimeObj = JSON.stringify(creationTime); 
        var jour = TimeObj.slice(1, 11);var heure = TimeObj.slice(12, 17); 
        
        emebed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - - - - -', value: `Clan numéro: ${i+1}`},{name: "nom du clan:", value: data.name, inline: true},{name: "Id:", value: data.id, inline:true},{name: "clan crée le", value: `${jour} à ${heure}`, inline: true});}
        emebed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - - - - -', value: `Nombre de clan connecté au bot: ${i}` })
        Mprofil.edit({content: " ", embeds: [emebed]})

  },
  runSlash: async(client, interaction) => {
     await interaction.reply({content:'Recherche en cours...', ephemeral:true,fetchReply: true})
    const Clanauthorized = await superagent.get('https://api.wolvesville.com/clans/authorized/')
    .set( 'Authorization', process.env.WOV_TOKEN)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .catch((err) =>  {
      if (err == "Error: Too Many Requests") {interaction.editReply({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`", ephemeral:true})}
    else {return interaction.editReply({content:`Erreur: ${err}`, ephemeral:true})}}); 
    console.log ('Commande bot fait');
    var objErr= JSON.stringify(Clanauthorized);

    if (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 5000))
      const Clanauthorized = await superagent.get('https://api.wolvesville.com/clans/authorized/')
    .set( 'Authorization', process.env.WOV_TOKEN)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .catch((err) =>  {
      if (err == "Error: Too Many Requests") {return interaction.editReply({content:"Veuillez retaper la commande, impossible de trouver les clans affilés au bot \`Too Many Requests\`", ephemeral:true})}
    else {return interaction.editReply({content:`Erreur: ${err}`, ephemeral:true})}}); 
     var obj= await Clanauthorized.text;} else { var obj= await Clanauthorized.text;}

    const emebed = new MessageEmbed()
    .setTitle('Clan connecté au bot:')
    .setColor('WHITE')

    for (var i=0; Clanauthorized.body[i] !== undefined;i++) {var i =i;
    var fin = /"memberCount":/g; var finR = obj.search(fin);var test = obj.slice(finR+16,finR+17);
    if (test == "}") {var finS = obj.slice(1, finR+17)} else {obj.slice(1, fin+16)};

    var data = JSON.parse(finS)
    var creationTime = data.creationTime 
    var TimeObj = JSON.stringify(creationTime); 
    var jour = TimeObj.slice(1, 11);var heure = TimeObj.slice(12, 17); 
    
    emebed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - - - - -', value: `Clan numéro: ${i+1}`},{name: "nom du clan:", value: data.name, inline: true},{name: "Id:", value: data.id, inline:true},{name: "clan crée le", value: `${jour} à ${heure}`, inline: true});}
    emebed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - - - - -', value: `Nombre de clan connecté au bot: ${i}` })
    interaction.editReply({content: " ", embeds: [emebed]})
}}
