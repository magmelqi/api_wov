const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const {readFileSync} = require ("fs");
const dayjs = require ('dayjs');

module.exports = {
    name: "xp",
    category: 'xp',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'xp', 
    examples: ['xp'],
    description: 'Donne la liste de ceux sous les 2000xp apres une semaine',
       async run (client, message, args) {
        const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return message.channel.send(`Erreur a la 1ére requête: ${err}`)}); 
        console.log ('Commande xp fait'); var  clan = (Messageclan.body);
    
        const member = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/info`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return message.channel.send(`Erreur a la 1ére requête: ${err}`)}); const  clan2 = (member.body); 
    
        var text = Messageclan.text
    
        const timestamp = `${dayjs().format("DD-MM-YYYY")}`;
        const timestampH = `${dayjs().add(-7, 'day').format("DD-MM-YYYY")}`; 
        const timestampA = `${dayjs().add(-2, 'day').format("DD-MM-YYYY")}`; 
    
        const memberCount = (clan2.memberCount);
      for (let i =0; i < memberCount; i++){ 
        var Mmf= /"participateInClanQuests":/g
        const MmDF = text.search(Mmf); var Mm1 = text.slice(0, MmDF+32);
        var quests = text.slice(MmDF+26,MmDF+30);
        if (quests == "true") {var Mm1 = text.slice(1, MmDF+31);var text = text.slice(MmDF+31)} else {var Mm1 = text.slice(1, MmDF+32);var text = text.slice(MmDF+32)}
        var data = JSON.parse(Mm1);


        try {
        var InfoA = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestamp}/${data.playerId}.json`, 'utf-8'))} catch (err) {message.channel.send(`Erreur ${data.username} n'a pas d'xp enregistré pour aujourd'hui: ${timestamp}`); var InfoA = 0}
         var Xp1 = InfoA.Xp


          var join = InfoA.Création; var joinT= JSON.stringify(join); var joinTf= joinT.slice(1,11);
          const timestampB= dayjs().add(-2, 'day').add(-1, 'hour').format("YYYY-MM-DD")
          const timestampC= dayjs().add(-7, 'day').add(-1, 'hour').format("YYYY-MM-DD")

          if (joinTf==timestampC) {
          try {
            var InfoB = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampH}/${data.playerId}.json`, 'utf-8'))} catch (err) {message.channel.send(`Erreur ${data.username} n'a pas d'xp enregistré il y a 1 semaine: ${timestampH}`); var InfoB = 0}
             var Xp2 = InfoB.Xp; var XpA = Xp1-Xp2;
    
            if (XpA < 2000) { message.channel.send(`+ ${data.username} a rejoins le \`${joinTf}\`, xp: \`${XpA}\``)} else {console.log(InfoA.Pseudo,  XpA)};}



          if (joinTf==timestampB ) {

          try {
          var InfoC = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampA}/${data.playerId}.json`, 'utf-8'))} catch (err) {message.channel.send(`Erreur ${data.username} n'a pas d'xp enregistré pour avant-hier: ${timestampA}`); var InfoC = 0}
          var Xp3 = InfoC.Xp; var XpB = Xp3
          if (XpB < 1000) { message.channel.send(`+ ${data.username} a rejoins le \`${joinTf}\`, xp: \`${XpB}\``)} else {console.log(InfoC.Pseudo,  XpB)};
        } 

        

      }
      try {
      message.channel.send(`-Dernier uptade pour les xp du \`${timestampH}\` effectué à \`${InfoB.Heure}\`\n-Dernier uptade pour les xp du \`${timestamp}\` effectué à \`${InfoA.Heure}\``)}catch (err) {}
       
       try {
        message.channel.send(`-Dernier uptade pour les xp du \`${timestampA}\` effectué à \`${InfoC.Heure}\`\n-Dernier uptade pour les xp du \`${timestamp}\` effectué à \`${InfoA.Heure}\``)}catch (err) {}
}}