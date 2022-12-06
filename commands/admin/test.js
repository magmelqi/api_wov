const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();


module.exports = {
    name: "test",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'test [taille]',
    examples: ['test 1 | test 2 | test 3'],
    description: 'Commande test',
     async run (client, message, args) { 
        if (!args[0] || !args[0].match(/^(1|2|3)$/)) return message.reply('merci d\'entrer un évenement valide (`1`/`2`/`3`)');

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
        const debutS2 = text.search(debut2); const finS2 = text.search(fin2); var lien2 = text.slice(debutS2+14, finS2); 

        if (args[0] == '1') { message.channel.send(`${lien2}.png`)}
        if (args[0] == '2') { message.channel.send(`${lien2}@2x.png`)}
        if (args[0] == '3') { message.channel.send(`${lien2}@3x.png`)}

    },
    options: [
        {
            name: 'taille',
            description: 'Choisir une taille pour l\'émoji',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: '1',
                    value: 'taille1',
                },
                {
                    name: '2',
                    value: 'taille2',
                },
                {
                    name: '3',
                    value: 'taille3',
                }
            ]
        }
    ],

    runSlash: async(client, interaction) => { 
        const evtChoices = interaction.options.getString('taille');

        const Messageclan = await superagent.get(`https://api.wolvesville.com/items/emojis`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {interaction.reply({content: `Erreur a la 1ère requête: ${err}`, ephemeral: true}); console.log(err)});
        interaction.reply({content: `Exécution en cours`, ephemeral: true})
        const body = Messageclan.body; const text = JSON.stringify(body)
        var debut= /"urlAnimation":"/g; var fin = /.json"/g 
        const debutS = text.search(debut); const finS = text.search(fin); var lien = text.slice(debutS+15, finS+6);
        const lienO = JSON.parse(lien); console.log(lienO)

        var debut2= /"urlPreview":"/g; var fin2 = /.png"/g 
        const debutS2 = text.search(debut2); const finS2 = text.search(fin2); var lien2 = text.slice(debutS2+14, finS2);

        if (evtChoices == 'taille1') {interaction.channel.send(`${lien2}.png`);}
        if (evtChoices == 'taille2') {interaction.channel.send(`${lien2}@2x.png`);}
        if (evtChoices == 'taille3') {interaction.channel.send(`${lien2}@3x.png`);}

       }}
