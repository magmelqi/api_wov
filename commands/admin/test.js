const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();


module.exports = {
    name: "test",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'test',
    examples: ['test'],
    description: 'Commande test',
     async run (client, message, args) { 
        const Messageclan = await superagent.get(`https://api.wolvesville.com/items/emojis`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {console.log(`Erreur a la 1ère requête: ${err}`); console.log(err)}); 
        const body = Messageclan.body; const text = JSON.stringify(body)
        var debut= /"urlAnimation":"/g; var fin = /.json"/g 
        const debutS = text.search(debut); const finS = text.search(fin); var lien = text.slice(debutS+15, finS+6);
        const lienO = JSON.parse(lien); console.log(lienO)

        var debut2= /"urlPreview":"/g; var fin2 = /.png"/g 
        const debutS2 = text.search(debut2); const finS2 = text.search(fin2); var lien2 = text.slice(debutS2+13, finS2+5);
        const lienO2 = JSON.parse(lien2); 
        message.channel.send(lienO2);

    },

    runSlash: async(client, interaction) => { 
        interaction.reply({content: `émojis envoyé`, ephemeral: true})
        const Messageclan = await superagent.get(`https://api.wolvesville.com/items/emojis`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {console.log(`Erreur a la 1ère requête: ${err}`); console.log(err)}); 
        const body = Messageclan.body; const text = JSON.stringify(body)
        var debut= /"urlAnimation":"/g; var fin = /.json"/g 
        const debutS = text.search(debut); const finS = text.search(fin); var lien = text.slice(debutS+15, finS+6);
        const lienO = JSON.parse(lien); console.log(lienO)

        var debut2= /"urlPreview":"/g; var fin2 = /.png"/g 
        const debutS2 = text.search(debut2); const finS2 = text.search(fin2); var lien2 = text.slice(debutS2+13, finS2+5);
        const lienO2 = JSON.parse(lien2); 
        interaction.channel.send(lienO2);

       }}
