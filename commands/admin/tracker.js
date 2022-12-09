const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const {writeFileSync, readFileSync, readdirSync} = require ("fs");

module.exports = {
  name: "tracker",
  category: 'secret',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: true,
  usage: 'tracker',
  examples: ['tracker'],
  description: "Suspens",
    async run (client, message, args) {
        var nom = message.content.substring(9).trim(); console.log(nom)
        setInterval(async()=> {
        const Messageclan = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(`Erreur a la 1ère requête: ${err}`); console.log(err)});
        const body = Messageclan.body
        var name = body.username
        var connexion = body.lastOnline
        var connexionT = JSON.stringify(connexion); var heure = connexionT.slice(9, 11); var minute = connexionT.slice(12, 14)
        console.log(heure, minute); var Co = `${heure}:${minute}`

        const bodyConnexionAncienne = JSON.parse(readFileSync(`Information/secret/secret.json`, 'utf-8'))
        var connexionAncienne = bodyConnexionAncienne.lastOnline; var connexionAncienneT = JSON.stringify(connexionAncienne)
        var heureAncienne = connexionAncienneT.slice(1, 3); var minuteAncienne = connexionAncienneT.slice(4, 6)
        console.log(heureAncienne, minuteAncienne)

        if (heure == heureAncienne && minute == minuteAncienne || heure-1 == heureAncienne && minuteAncienne > 55 && minute < 05|| heure == heureAncienne && minute-1+1 < minuteAncienne-1+7) {return}
        else if (heure !== heureAncienne || minute !== minuteAncienne) {message.channel.send(`${name} s'est connecté`)
        const info = {
            Pseudo: name,
            lastOnline: Co
        };const objectToJson = JSON.stringify(info) ;writeFileSync(`././Information/secret/secret.json`, objectToJson)
    }
        else if (minute < minuteAncienne+13 && heure == heureAncienne || heure == heureAncienne && minuteAncienne > 55 && 13 > minute > 05)         
        {message.channel.send(`${name} s'est déconnecté`)}},10000)
    },
    async runSlash (client, interaction) {
  },
};
