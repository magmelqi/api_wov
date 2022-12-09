const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const {writeFileSync, readFileSync, readdirSync} = require ("fs");
const dayjs = require ('dayjs');

module.exports = {
  name: "tracker",
  category: 'secret',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: true,
  usage: 'tracker',
  examples: ['tracker'],
  description: "Suspens",
    async run (client, message, args) {
        setInterval(async() => {
        var nom = message.content.substring(9).trim(); console.log(nom)
        const Messageclan = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(`Erreur a la 1ère requête: ${err}`); console.log(err)});
        const body = Messageclan.body
        var name = body.username
        var connexion = body.lastOnline
        var connexionT = JSON.stringify(connexion); var heure = connexionT.slice(9, 11); var minute = connexionT.slice(12, 14)
        console.log(heure, minute); var Co = `${heure}:${minute}`; console.log(Co)

        const heureD = dayjs().format("HH:mm"); const min = dayjs().format("mm")

        if (heure == heureD && minute-1+6 > min-1+1 || heure == heureD-1 && minute > 55) {return}
        else if (heure !== heureD || minute !== min) {message.channel.send(`${name} s'est connecté`)}
        else if (minute+13 > min && heure == heureD || heure == heureD-1 && minute > 55 && 13 > min > 05) {message.channel.send(`${name} s'est déconnecté`)}},300000)
    },
    async runSlash (client, interaction) {
  },
};
