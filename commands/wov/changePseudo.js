const { MessageEmbed } = require('discord.js');
const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const {readFileSync, readdirSync} = require ("fs");
const dayjs = require ('dayjs');

module.exports = {
    name: "chg",
    category: 'wov',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'chg [pseudo]', 
    examples: ['chg Frictus'],
    description: 'Permet de vérifier qui a changé de pseudo',
       async run (client, message, args) {
       const timestamp = `${dayjs().add(-1, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`; 

       const tryRequests = await message.channel.send('Requête en cours')
       var Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
       .set( 'Authorization', process.env.WOV_TOKEN)
       .set('Content-Type', 'application/json')
       .set('Accept', 'application/json')
       .catch((err) => {
         if (err == "Error: Too Many Requests") {tryRequests.edit({content:`Erreur a la 1ère requête\n\`2ème tentatives en cours...\``})} 
         else {tryRequests.edit({content:`Erreur: ${err}`});return console.log(err)}}); 

       var objErr= JSON.stringify(Messageclan);
       if (objErr !== undefined) {await tryRequests.edit({content:`Vérification en cours...`}); var body= Messageclan.body}

       var i =2
       while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
         var Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
       .set( 'Authorization', process.env.WOV_TOKEN)
       .set('Content-Type', 'application/json')
       .set('Accept', 'application/json')
       .catch((err) => {
         if (err == "Error: Too Many Requests") {tryRequests.edit({content:`Erreur, tentatives: \`${i}\` `})}
         else {tryRequests.edit({content:`Erreur: ${err}`});return console.log(err)};});
       var objErr= JSON.stringify(Messageclan)
       try{var body= Messageclan.body}catch(err) {};var i = i+1} 
        tryRequests.delete()

        var k =0
        var n = 0
        var msg = null
        while ( k < body.length) { var k = k+1
            var objBody = Messageclan.body[n]; var n =n +1
        try {
            var exPseudoD = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestamp}/${objBody.playerId}.json`, 'utf-8'))} catch (err) {}
            
        var newPseudo = objBody.username
        var exPseudo = exPseudoD.Pseudo
        
        if ( exPseudo != newPseudo) {
            var msgi = `\`\`${exPseudo}\`\` a changé son pseudo en \`\`${newPseudo}\`\``
            var msg = `${msg + msgi}\n- - - - - -\n`}
        }
        if (msg.slice(0,4) == "null") {var msgf = msg.slice(4)} else {var msgf = msg}
        message.channel.send(msgf)
  
       },
       options:[
        {
            name: "pseudo",
            description: "taper le pseudo pour voir son profil wov",
            type: "STRING",
            required: true,
        }],

       async runSlash(client, interaction) { 
        var pseudo = interaction.options.getString('pseudo');
        const timestamp = `${dayjs().add(-1, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`; 
 
        const tryRequests = await interaction.reply('Requête en cours')
        var Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {interaction.editReply({content:`Erreur a la 1ère requête\n\`2ème tentatives en cours...\``})} 
          else {interaction.editReply({content:`Erreur: ${err}`});return console.log(err)}}); 
 
        var objErr= JSON.stringify(Messageclan);
        if (objErr !== undefined) {await interaction.editReply({content:`Vérification en cours...`}); var body= Messageclan.body}
 
        var i =2
        while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
          var Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {interaction.editReply({content:`Erreur, tentatives: \`${i}\` `})}
          else {interaction.editReply({content:`Erreur: ${err}`});return console.log(err)};});
        var objErr= JSON.stringify(Messageclan)
        try{var body= Messageclan.body}catch(err) {};var i = i+1} 

        var k =0
        var n = 0
        var msg = null
        while ( k < body.length) { var k = k+1
            var objBody = Messageclan.body[n]; var n =n +1
        try {
            var exPseudoD = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestamp}/${objBody.playerId}.json`, 'utf-8'))} catch (err) {}

        var newPseudo = objBody.username
        var exPseudo = exPseudoD.Pseudo
        
        if ( exPseudo != newPseudo) {
        var msgi = `\`\`${exPseudo}\`\` a changé son pseudo en \`\`${newPseudo}\`\``
        var msg = `${msg + msgi}\n- - - - - -\n`}
        }
        if (msg.slice(0,4) == "null") {var msgf = msg.slice(4)} else {var msgf = msg}
        interaction.channel.send(msgf)
       }
}