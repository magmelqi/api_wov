const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    name: "test",
    category: 'admin',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: true,
    usage: 'test ',
    examples: ['test'],
    description: 'Commande test',
     async run (client, message, args) {

        const tryRequests = await message.channel.send('Requête en cours')
        var Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {tryRequests.edit({content:`Erreur a la 1ère requête\n\`2ème tentatives en cours...\``})} 
          else {tryRequests.edit({content:`Erreur: ${err}`});return console.log(err)}}); 
        console.log ('Commande xpadd faite');
        var objErr= JSON.stringify(Messageclan);
        if (objErr !== undefined) {tryRequests.edit({content:`Calcul en cours...`}); var body= Messageclan.body}
 
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


        var n =0
        var msg = null
        const embed = new MessageEmbed()
        while (n != 5) {var objBody = Messageclan.body[n]; var n = n +1
           try { var msg = `${msg + objBody.username}\n`}catch(err) {}
            
        };
        try {message.channel.send(msg)}catch (err) {}
    },

    runSlash: async(client, interaction) => { 
       }}
