const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const {writeFileSync, readFileSync, mkdirSync, existsSync} = require ("fs");
const dayjs = require ('dayjs');

module.exports = {
    name: "xpadd",
    category: 'admin',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'xpadd', 
    examples: ['xpadd'],
    description: 'Actualise les xp des membres',
       async run (client, message, args) {
        const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(`Erreur a la 1ére requête: ${err}`); console.log(err)}); 
        console.log ('Commande message clan fait'); 
    
        const member = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/info`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(`Erreur a la 2éme requête: ${err}`); console.log(err)}); const  clan2 = (member.body); 
    
        var text = Messageclan.text
    
        const timestamp = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`; console.log(timestamp)
        const timestampH = `${dayjs().add(-1, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`
        console.log(timestampH)
    
        const memberCount = (clan2.memberCount);
       
      for (var i = 0; i < memberCount;i++){ 
        var Mmf= /"participateInClanQuests":/g
        const MmDF = text.search(Mmf); var Mm1 = text.slice(0, MmDF+32);
        var quests = text.slice(MmDF+26,MmDF+30);
        if (quests == "true") {var Mm1 = text.slice(1, MmDF+31);var text = text.slice(MmDF+31)} else {var Mm1 = text.slice(1, MmDF+32);var text = text.slice(MmDF+32)}
        var data = JSON.parse(Mm1);
    
        const info = {
          pseudo: data.username,
          id: data.playerId,
          niveau: data.level,
          Avatar: data.profileIconId,
          xp: data.xp
        }
        
        const objectToJson = JSON.stringify(info)
        if (!existsSync(`./Member/${timestamp}`)){
          mkdirSync(`./Member/${timestamp}`, { recursive: true });
      }
        writeFileSync(`./Member/${timestamp}/${data.username}.json`, objectToJson)
        const Xp = JSON.parse(readFileSync(`./Member/${timestamp}/${data.username}.json`, 'utf-8')); console.log(Xp.pseudo, Xp.xp)
     var nb = i+1}message.channel.send(`Uptade des xp de ${nb} membres sur ${memberCount} membres`)
    }}