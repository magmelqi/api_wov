const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const {readFileSync} = require ("fs");
const dayjs = require ('dayjs');

module.exports = {
    name: "xp",
    category: 'wov',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'xp', 
    examples: ['xp'],
    description: 'Donne la liste de ceux sont les 2000xp',
       async run (client, message, args) {
        const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(`Erreur a la 1ére requête: ${err}`); console.log(err)}); 
        console.log ('Commande xp fait'); var  clan = (Messageclan.body);
    
        const member = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/info`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(`Erreur a la 1ére requête: ${err}`); console.log(err)}); const  clan2 = (member.body); 
    
        var text = Messageclan.text
    
        const timestamp = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`; console.log(timestamp)
        const timestampH = `${dayjs().add(-1, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`
        console.log(timestampH)
    
        const memberCount = (clan2.memberCount);
      for (let i =0; i < memberCount; i++){ 
        var Mmf= /"participateInClanQuests":/g
        const MmDF = text.search(Mmf); var Mm1 = text.slice(0, MmDF+32);
        var quests = text.slice(MmDF+26,MmDF+30);
        if (quests == "true") {var Mm1 = text.slice(1, MmDF+31);var text = text.slice(MmDF+31)} else {var Mm1 = text.slice(1, MmDF+32);var text = text.slice(MmDF+32)}
        var data = JSON.parse(Mm1);

        try {
        var XpU = JSON.parse(readFileSync(`./Member/Member-Id/${timestamp}/${data.playerId}.json`, 'utf-8'))} catch (err) {message.channel.send(`Erreur ${data.username} n'a pas d'xp enregistré pour aujourd'hui: ${timestamp}`); var XpU = 0}

        try {
        var XpH = JSON.parse(readFileSync(`./Member/Member-Id/${timestampH}/${data.username}.json`, 'utf-8'))} catch (err) {message.channel.send(`Erreur ${data.username} n'a pas d'xp enregistré pour hier: ${timestampH}`); var XpH = 0}
        
        var XpA = XpU.Xp-XpH.xp;
        if (XpA < 2001) { message.channel.send(`+ ${data.username}: ${XpA}`)} else {console.log(XpU.Pseudo,  XpA)};
      }message.channel.send(`-Dernier uptade pour les xp du \`${timestampH}\` effectué à \`${XpH.Heure}\`\n-Dernier uptade pour les xp du \`${timestamp}\` effectué à \`${XpU.Heure}\``)}

}