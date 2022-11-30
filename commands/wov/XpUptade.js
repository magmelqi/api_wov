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
        console.log ('Commande xpadd fait'); 
    
        const member = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/info`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(`Erreur a la 2éme requête: ${err}`); console.log(err)}); const  clan2 = (member.body); 
    
        var text = Messageclan.text
    
        const timestamp = `${dayjs().format("DD-MM-YYYY")}`; console.log(timestamp)
        const timestampH = `${dayjs().add(-1, 'day').format("DD-MM-YYYY")}`
        console.log(timestampH);
        const heure = `${dayjs().format("HH:mm")}-heure anglaise`;
    
        const memberCount = (clan2.memberCount);
       
      for (var i = 0; i < memberCount;i++){ 
        var Mmf= /"participateInClanQuests":/g
        const MmDF = text.search(Mmf); var Mm1 = text.slice(0, MmDF+32);
        var quests = text.slice(MmDF+26,MmDF+30);
        if (quests == "true") {var Mm1 = text.slice(1, MmDF+31);var text = text.slice(MmDF+31)} else {var Mm1 = text.slice(1, MmDF+32);var text = text.slice(MmDF+32)}
        var data = JSON.parse(Mm1);
    
        const info = {
          Pseudo: data.username,
          Id: data.playerId,
          Niveau: data.level,
          Avatar: data.profileIconId,
          Xp: data.xp,
          Participation: data.participateInClanQuests,
          Création: data.creationTime,
          Heure: heure
        }
        
        const objectToJson = JSON.stringify(info)
        if (!existsSync(`./Member/Member-Id/${timestamp}`)){
          mkdirSync(`./Member/Member-Id/${timestamp}`, { recursive: true });
      }
      if (!existsSync(`./Member/Member-Pseudo/${timestamp}`)){
        mkdirSync(`./Member/Member-Pseudo/${timestamp}`, { recursive: true });
    }
        writeFileSync(`./Member/Member-Id/${timestamp}/${data.playerId}.json`, objectToJson)
        writeFileSync(`./Member/Member-Pseudo/${timestamp}/${data.username}.json`, objectToJson)
        const Xp = JSON.parse(readFileSync(`./Member/Member-Id/${timestamp}/${data.playerId}.json`, 'utf-8')); console.log(Xp.Pseudo, Xp.Xp)
     var nb = i+1}message.channel.send(`Uptade des xp de ${nb} membres sur ${memberCount} membres`)
    }}