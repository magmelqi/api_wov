const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();

module.exports = {
  name: "listact",
  category: 'quête',
  permissions: ['BAN_MEMBERS'],
  ownerOnly: true,
  usage: 'listact',
  examples: ['listact'],
  description: "Liste des membres qui ont activer leur participation à la quête",
      run: async(client, message, args) => {
        var Minfo = await message.channel.send(`Recherche de la liste des membres..`)
        var Merr = await message.channel.send(`- - - - - -`)
        var Username = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
            if (err == "Error: Too Many Requests") {Merr.edit({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
            else {return Merr.edit({content:`Erreur: ${err}`})}});
        var objErr= JSON.stringify(Username);
    
        if (objErr !== undefined) {var User = Username.body}

       var i = 2
       while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
        var Username = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
            if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
            else if (err == "Error: Not Found") {return Merr.edit({content:`Pseudo inexistant`})}
            else {return Merr.edit({content:`Erreur: ${err}`})}});
       var objErr= JSON.stringify(Username);
        try {var User = await Username.body;}catch(err) {}; var i = i+1} 
            
        Merr.delete(); Minfo.delete()

        const embed = new MessageEmbed()
        .setAuthor({name : `Liste des participants`})
        .setDescription(`- - - - - - - - - - - -`)
        .setColor('WHITE')
        .setTimestamp();
        var h =0
        var k =0
        while(Username.body[k] !== undefined) {
        var User = await Username.body[k]; var nom = User.username;

        if (User.participateInClanQuests == true) { var h =h+1
            embed.addFields({name:`${nom}`, value: `- - - - - - - - - - - -`, inline:true })
            
    
              
            var n = n+1;}var k = k+1};embed.setFooter({text:`Nombre de participants: ${h}`})
            message.channel.send({embeds : [embed]});
    },
        runSlash: async(client, interaction) => {
            interaction.reply({content:`Recherche de la liste des membres..`, ephemeral:true})

        var Username = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
            if (err == "Error: Too Many Requests") {interaction.editReply({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
            else {return interaction.editReply({content:`Erreur: ${err}`})}});
        var objErr= JSON.stringify(Username);
    
        if (objErr !== undefined) {var User = Username.body}

       var h =0
       var i = 2
       while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
        var Username = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
            if (err == "Error: Too Many Requests") {interaction.editReply({content:`Erreur, tentatives: \`${i}\``})}
            else {return interaction.editReply({content:`Erreur: ${err}`})}});
       var objErr= JSON.stringify(Username);
        try {var User = await Username.body;}catch(err) {}; var i = i+1} 
      

        const embed = new MessageEmbed()
        .setAuthor({name : `Liste des participants`})
        .setColor('WHITE')
        .setDescription(`- - - - - - - - - - - -`)
        .setTimestamp();

        var k =0
        while(Username.body[k] !== undefined) {
        var User = await Username.body[k]; var nom = User.username;

        if (User.participateInClanQuests == true) { var h = h+1
            embed.addFields({name:`${nom}`, value: `- - - - - - - - - - - -`, inline:true })
            
    
              
            var n = n+1;}var k = k+1};embed.setFooter({text:`Nombre de participants: ${h}`})
            interaction.editReply({content:`Liste trouvée:`});interaction.channel.send({embeds : [embed]});
    }
    }