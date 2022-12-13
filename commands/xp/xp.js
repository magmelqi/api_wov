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
        .catch((err) => {message.channel.send(`Erreur a la 1ère requête\n\`2ème tentatives en cours...\``); console.log(err)}); 
        console.log ('Commande xpadd faite');
        var objErr= JSON.stringify(Messageclan);
        if (objErr !== undefined) {message.channel.send(`Affichage en cours...`)}

        setTimeout(async()=> {var objErr= JSON.stringify(Messageclan);
        if (objErr == undefined) {console.log('yo')
          const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(`Erreur a la 2ème requêtes\n\`3ème tentatives en cours...\` Ah bah il y en a pas flemme de mettre une 3ème requêtes`);return console.log(err)}); 
        var text= Messageclan.text} else {var text= Messageclan.text}

    
        const timestamp = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`;
        const timestampH = `${dayjs().add(-9, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`; 
        const timestampA = `${dayjs().add(-3, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`; 
    
        try {
      for (let i =0; i < 50; i++){ 
        var Mmf= /"participateInClanQuests":/g
        const MmDF = text.search(Mmf); var Mm1 = text.slice(0, MmDF+32);
        var quests = text.slice(MmDF+26,MmDF+30);
        if (quests == "true") {var Mm1 = text.slice(1, MmDF+31);var text = text.slice(MmDF+31)} else {var Mm1 = text.slice(1, MmDF+32);var text = text.slice(MmDF+32)}
        var data = JSON.parse(Mm1);


        try {
        var InfoA = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestamp}/${data.playerId}.json`, 'utf-8'))} catch (err) {message.channel.send(`Erreur ${data.username} n'a pas d'xp enregistré pour aujourd'hui: ${timestamp}`); var InfoA = 0}
         var Xp1 = InfoA.Xp


          var join = InfoA.Création; var joinT= JSON.stringify(join); var joinTf= joinT.slice(1,11);
          const timestampB= dayjs().add(-3, 'day').add(-1, 'hour').format("YYYY-MM-DD")

          
          try {
            var InfoB = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampH}/${data.playerId}.json`, 'utf-8'))} catch (err) { var InfoB = 0}
             var Xp2 = InfoB.Xp; var XpA = Xp1-Xp2;
    
            if (XpA < 2000) { message.channel.send(`+\`❌\` \`${data.username}\` a rejoins le \`${joinTf}\`, \nxp: \`${XpA}\` sur \`2000\`xp requis`)} else {console.log(InfoA.Pseudo,  Xp1)};



          if (joinTf==timestampB ) {

          try {
          var InfoC = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampA}/${data.playerId}.json`, 'utf-8'))} catch (err) {message.channel.send(`Erreur ${data.username} n'a pas d'xp enregistré pour avant-hier: ${timestampA}`); var InfoC = 0}
          
          if (Xp1 > 1000) {message.channel.send(`+\`✅\` \`${data.username}\` a rejoins le \`${joinTf}\`, \nxp: \`${Xp1}\` sur \`1000\`xp requis`);console.log(InfoC.Pseudo,  Xp1)} 
          else {
           message.channel.send(`+\`❌\` \`${data.username}\` a rejoins le \`${joinTf}\`, \nxp: \`${Xp1}\` sur \`1000\`xp requis`);console.log(InfoC.Pseudo,  Xp1)}
        } 
      }}catch(err) {}

      try {
        message.channel.send(`-Dernier update pour les xp du \`${timestamp}\` effectué à \`${InfoA.Heure}\``)
      }catch(err) {}

      try {
      message.channel.send(`-Dernier update pour les xp du \`${timestampH}\` effectué à \`${InfoB.Heure}\``)
    }catch (err) {}},5000)

       },
       async runSlash(client, interaction) { 
        
        const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {interaction.reply({content:`Erreur a la 1ère requête\n\`2ème tentatives en cours...\``, ephemeral: true}); console.log(err)}); 
        console.log ('Commande xpadd faite');
        var objErr= JSON.stringify(Messageclan);
        if (objErr !== undefined) {interaction.reply(`Affichage en cours...`)}

        setTimeout(async()=> {var objErr= JSON.stringify(Messageclan);
        if (objErr == undefined) {console.log('yo')
          const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {interaction.followUp({content:`Erreur a la 2ème requêtes\n\`3ème tentatives en cours...\` Ah bah il y en a pas flemme de mettre une 3ème requêtes`, ephemeral: true});return console.log(err)}); 
        var text= Messageclan.text} else {var text= Messageclan.text}
    
        const timestamp = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`;
        const timestampH = `${dayjs().add(-9, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`; 
        const timestampA = `${dayjs().add(-3, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`; 
    
      try {
      for (let i =0; i < 50; i++){ 
        var Mmf= /"participateInClanQuests":/g
        const MmDF = text.search(Mmf); var Mm1 = text.slice(0, MmDF+32);
        var quests = text.slice(MmDF+26,MmDF+30);
        if (quests == "true") {var Mm1 = text.slice(1, MmDF+31);var text = text.slice(MmDF+31)} else {var Mm1 = text.slice(1, MmDF+32);var text = text.slice(MmDF+32)}
        var data = JSON.parse(Mm1);


        try {
        var InfoA = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestamp}/${data.playerId}.json`, 'utf-8'))} catch (err) {interaction.channel.send(`Erreur ${data.username} n'a pas d'xp enregistré pour aujourd'hui: ${timestamp}`); var InfoA = 0}
         var Xp1 = InfoA.Xp


          var join = InfoA.Création; var joinT= JSON.stringify(join); var joinTf= joinT.slice(1,11);
          const timestampB= dayjs().add(-3, 'day').add(-1, 'hour').format("YYYY-MM-DD")

          
          try {
            var InfoB = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampH}/${data.playerId}.json`, 'utf-8'))} catch (err) { var InfoB = 0}
             var Xp2 = InfoB.Xp; var XpA = Xp1-Xp2;
    
            if (XpA < 2000) { interaction.channel.send(`+\`❌\` \`${data.username}\` a rejoins le \`${joinTf}\`, \nxp: \`${XpA}\` sur \`2000\`xp requis`)} else {console.log(InfoA.Pseudo,  Xp1)};



          if (joinTf==timestampB ) {

          try {
          var InfoC = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampA}/${data.playerId}.json`, 'utf-8'))} catch (err) {interaction.channel.send(`Erreur ${data.username} n'a pas d'xp enregistré pour avant-hier: ${timestampA}`); var InfoC = 0}
          
          if (Xp1 > 1000) {interaction.channel.send(`+\`✅\` \`${data.username}\` a rejoins le \`${joinTf}\`, \nxp: \`${Xp1}\` sur \`1000\`xp requis`);console.log(InfoC.Pseudo,  Xp1)} 
          else {
           interaction.channel.send(`+\`❌\` \`${data.username}\` a rejoins le \`${joinTf}\`, \nxp: \`${Xp1}\` sur \`1000\`xp requis`);console.log(InfoC.Pseudo,  Xp1)}
        } 
      }

      try {
        interaction.channel.send(`-Dernier update pour les xp du \`${timestamp}\` effectué à \`${InfoA.Heure}\``)
      }catch(err) {}

      try {
      interaction.channel.send(`-Dernier update pour les xp du \`${timestampH}\` effectué à \`${InfoB.Heure}\``)
    }catch (err) {}}catch(err) {}},5000)
      

       }
}