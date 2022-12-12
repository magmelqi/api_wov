const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const {writeFileSync, readFileSync, mkdirSync, existsSync} = require ("fs");
const dayjs = require ('dayjs');

module.exports = {
    name: "xpadd",
    category: 'xp',
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
        .catch((err) => {message.channel.send(`Erreur a la 1ère requête\n\`2ème tentaive en cours...\``); console.log(err)}); 
        console.log ('Commande xpadd faite');
        var objErr= JSON.stringify(Messageclan);
        if (objErr !== undefined) {message.channel.send(`Calcul en cours...`)}

        setTimeout(async()=> {var objErr= JSON.stringify(Messageclan);
        if (objErr == undefined) {console.log('yo')
          const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(`Erreur a la 2ème requêtes\n\`3ème tentaives en cours...\` Ah bah il y en a pas flemme de mettre une 3ème requêtes`);return console.log(err)}); 
        var text= Messageclan.text} else {var text= Messageclan.text}
    
    
        const timestamp = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`; 
        const heure = `${dayjs().add(-1, 'hour').format("HH:mm")}-heure anglaise`;
    
       try {
      for (var i = 0; i < 50;i++){ 
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
        if (!existsSync(`././Information/xp/Member-Id/${timestamp}`)){
          mkdirSync(`././Information/xp/Member-Id/${timestamp}`, { recursive: true });
      }
      if (!existsSync(`././Information/xp/Member-Pseudo/${timestamp}`)){
        mkdirSync(`././Information/xp/Member-Pseudo/${timestamp}`, { recursive: true });
    }
        writeFileSync(`././Information/xp/Member-Id/${timestamp}/${data.playerId}.json`, objectToJson)
        writeFileSync(`././Information/xp/Member-Pseudo/${timestamp}/${data.username}.json`, objectToJson)
        const Xp = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestamp}/${data.playerId}.json`, 'utf-8')); console.log(Xp.Pseudo, Xp.Xp)
     i= i+1}} catch (err) {}message.channel.send(`Update des xp de \`${i}\` membres`)},5000)
    },

    async runSlash(client, interaction) { 
      
      const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {interaction.reply({content:`Erreur a la 1ère requête\n\`2ème tentaive en cours...\``, ephemeral:true}); console.log(err)}); 
      console.log ('Commande xpadd fait'); 
      var objErr= JSON.stringify(Messageclan);
      if (objErr !== undefined) {interaction.reply(`Calcul en cours...`)}

      setTimeout(async()=> {var objErr= JSON.stringify(Messageclan);
      if (objErr == undefined) {console.log('yo')
        const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {interaction.followUp({content:`Erreur a la 2ème requêtes\n\`3ème tentaives en cours...\` Ah bah il y en a pas flemme de mettre une 3ème requêtes`, ephemeral:true});return console.log(err)}); 
      var text= Messageclan.text} else {var text= Messageclan.text}

  
      const timestamp = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`; 
      const heure = `${dayjs().add(-1, 'hour').format("HH:mm")}-heure anglaise`;
     try {
    for (var i = 0; i < 50;i++){ 
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
      if (!existsSync(`././Information/xp/Member-Id/${timestamp}`)){
        mkdirSync(`././Information/xp/Member-Id/${timestamp}`, { recursive: true });
    }
    if (!existsSync(`././Information/xp/Member-Pseudo/${timestamp}`)){
      mkdirSync(`././Information/xp/Member-Pseudo/${timestamp}`, { recursive: true });
  }
      writeFileSync(`././Information/xp/Member-Id/${timestamp}/${data.playerId}.json`, objectToJson)
      writeFileSync(`././Information/xp/Member-Pseudo/${timestamp}/${data.username}.json`, objectToJson)
      const Xp = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestamp}/${data.playerId}.json`, 'utf-8')); console.log(Xp.Pseudo, Xp.Xp)
    var i = i+1}}catch(err){}interaction.channel.send(`Update des xp de \`${i}\` membres`)},5000)
  }
  }