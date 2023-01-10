const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const {writeFileSync, readFileSync, mkdirSync, existsSync, rmdirSync} = require ("fs");
const dayjs = require ('dayjs');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "xpadd",
    category: 'xp',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'xpadd', 
    examples: ['xpadd'],
    description: 'Actualise les xp des membres',
       async run (client, message, args) {
        const ancienTime = `${dayjs().add(-1, 'hour').add(-14, 'day').format("DD-MM-YYYY")}`;
        if (existsSync(`././Information/xp/Member-Id/${ancienTime}`)){
            rmdirSync(`././Information/xp/Member-Id/${ancienTime}`, { recursive: true, force: true })
      }
      if (existsSync(`././Information/xp/Member-Pseudo/${ancienTime}`)){
        rmdirSync(`././Information/xp/Member-Pseudo/${ancienTime}`, { recursive: true, force: true })
      }

         const tryRequests = await message.channel.send('Requête en cours')
        var Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {tryRequests.edit({content:`Erreur a la 1ère requête\n\`2ème tentatives en cours...\``})} 
          else {tryRequests.edit({content:`Erreur: ${err}`});return console.log(err)}}); 
        console.log ('Commande xpadd faite');
        var objErr= JSON.stringify(Messageclan);
        if (objErr !== undefined) {tryRequests.edit({content:`Calcul en cours...`}); var text= Messageclan.text}

        var i =2
        while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
          var Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {tryRequests.edit({content:`Erreur, tentatives: \`${i}\` `})}
          else {tryRequests.edit({content:`Erreur: ${err}`});return console.log(err)};});
        var objErr= JSON.stringify(Messageclan)
        try{var text= Messageclan.text}catch(err) {};var i = i+1} 
    
    
        const timestamp = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`; 
        const heure = `${dayjs().add(-1, 'hour').format("HH:mm")}-heure anglaise`;
        var Mln = null; var Mlc = null; var MlS = null; var Mml = null; var MLS = null

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

        const vérificationH = `${dayjs().add(-1, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
        const vérification = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`; 

        try {
          var LoupB = JSON.parse(readFileSync(`././Information/xp/Member-Id/${vérificationH}/${data.playerId}.json`, 'utf-8'))} catch (err) { var LoupB = 0}
      try {
          var LoupA = JSON.parse(readFileSync(`././Information/xp/Member-Id/${vérification}/${data.playerId}.json`, 'utf-8'))} catch (err) { var LoupA = 0}
  

        if (LoupB.Xp < 20000 && LoupA.Xp >= 20000) { console.log('ln')
      message.channel.send({content:`\n${data.username} vient de dépasser les \`\`20 000xp\`\`, obtient donc le rôle de \`\`Loup Novice\`\``})}

    if (LoupB.Xp < 50000 && LoupA.Xp >= 50000) { console.log('lc')
    message.channel.send({content:`\n${data.username} vient de dépasser les \`\`50 000xp\`\`, obtient donc le rôle de \`\`Loup Confirmé\`\``})}

    if (LoupB.Xp < 100000 && LoupA.Xp >= 100000) { console.log('ls')
    message.channel.send({content:`\n${data.username} vient de dépasser les \`\`100 000xp\`\`, obtient donc le rôle de \`\`Loup Sage\`\``})}

    if (LoupB.Xp < 250000 && LoupA.Xp >= 250000) { console.log('lS')
    message.channel.send({content:`\n${data.username} vient de dépasser les \`\`250 000xp\`\`, obtient donc le rôle de \`\`Loup Supérieur\`\``})}

    if (LoupB.Xp < 500000 && LoupA.Xp >= 500000) { console.log('ml')
    message.channel.send({content: `\n${data.username} vient de dépasser les \`\`500 000xp\`\`, obtient donc le rôle de \`\`Maître Loup\`\``})}

    if (LoupB.Xp < 1000000 && LoupA.Xp >= 1000000) { console.log('LS')
    message.channel.send({content:`\n${data.username} vient de dépasser les \`\`1 000 000xp\`\`, obtient donc le rôle de \`\`Loup Seigneur\`\``})}

    var i = i}}catch(err){}
    if (Mln = "null") {var Mln =' '}; if (Mlc = "null") {var Mlc =' '}; if (Mls = "null") {var Mls =' '}; if (MlS = "null") {var MlS =' '}; 
    if (Mml = "null") {var Mml =' '}; if (MLS = "null") {var MLS =' '}
    message.channel.send({content:`Update des xp de \`${i}\` membres`})
    },

    async runSlash(client, interaction) { 
      const ancienTime = `${dayjs().add(-1, 'hour').add(-14, 'day').format("DD-MM-YYYY")}`;
        if (existsSync(`././Information/xp/Member-Id/${ancienTime}`)){
            rmdirSync(`././Information/xp/Member-Id/${ancienTime}`, { recursive: true, force: true })
      }
      if (existsSync(`././Information/xp/Member-Pseudo/${ancienTime}`)){
        unlinkSync(`././Information/xp/Member-Pseudo/${ancienTime}`, { recursive: true, force: true })
      }
      var Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {
        if (err == "Error: Too Many Requests") {interaction.reply({content:`Erreur a la 1ère requête\n\`2ème tentaives en cours...\``, ephemeral:true})}
        else{interaction.reply({content:`Erreur: ${err}`, ephemeral:true}); return console.log(err)}}); 
      console.log ('Commande xpadd fait'); 
      var objErr= JSON.stringify(Messageclan);
      if (objErr !== undefined) {interaction.reply(`Calcul en cours...`); var text= Messageclan.text}

      var i = 2
      while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
        var Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {
        if (err == "Error: Too Many Requests") {interaction.editReply({content:`Erreur, tentatives: \`${i}\` `, ephemeral:true})}
        else {interaction.editReply({content:`Erreur: ${err}`, ephemeral:true});return console.log(err)};});
      var objErr= JSON.stringify(Messageclan);
      try {var text= Messageclan.text}catch(err) {}; var i = i+1} 

  
      const timestamp = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`; 
      const heure = `${dayjs().add(-1, 'hour').format("HH:mm")}-heure anglaise`;
      var Mln = null; var Mlc = null; var MlS = null; var Mml = null; var MLS = null
    
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

      const vérificationH = `${dayjs().add(-1, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
        const vérification = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`; 

      try {
        var LoupB = JSON.parse(readFileSync(`././Information/xp/Member-Id/${vérificationH}/${data.playerId}.json`, 'utf-8'))} catch (err) { var LoupB = 0}
    try {
        var LoupA = JSON.parse(readFileSync(`././Information/xp/Member-Id/${vérification}/${data.playerId}.json`, 'utf-8'))} catch (err) { var LoupA = 0}

    if (LoupB.Xp < 20000 && LoupA.Xp >= 20000) { console.log('ln')
      interaction.channel.send({content:`\n${data.username} vient de dépasser les \`\`20 000xp\`\`, obtient donc le rôle de \`\`Loup Novice\`\``})}

    if (LoupB.Xp < 50000 && LoupA.Xp >= 50000) { console.log('lc')
    interaction.channel.send({content:`\n${data.username} vient de dépasser les \`\`50 000xp\`\`, obtient donc le rôle de \`\`Loup Confirmé\`\``})}

    if (LoupB.Xp < 100000 && LoupA.Xp >= 100000) { console.log('ls')
    interaction.channel.send({content:`\n${data.username} vient de dépasser les \`\`100 000xp\`\`, obtient donc le rôle de \`\`Loup Sage\`\``})}

    if (LoupB.Xp < 250000 && LoupA.Xp >= 250000) { console.log('lS')
    interaction.channel.send({content:`\n${data.username} vient de dépasser les \`\`250 000xp\`\`, obtient donc le rôle de \`\`Loup Supérieur\`\``})}

    if (LoupB.Xp < 500000 && LoupA.Xp >= 500000) { console.log('ml')
    interaction.channel.send({content: `\n${data.username} vient de dépasser les \`\`500 000xp\`\`, obtient donc le rôle de \`\`Maître Loup\`\``})}

    if (LoupB.Xp < 1000000 && LoupA.Xp >= 1000000) { console.log('LS')
    interaction.channel.send({content:`\n${data.username} vient de dépasser les \`\`1 000 000xp\`\`, obtient donc le rôle de \`\`Loup Seigneur\`\``})}

    var i = i}}catch(err){}
    if (Mln = "null") {var Mln =' '}; if (Mlc = "null") {var Mlc =' '}; if (Mls = "null") {var Mls =' '}; if (MlS = "null") {var MlS =' '}; 
    if (Mml = "null") {var Mml =' '}; if (MLS = "null") {var MLS =' '}
    interaction.channel.send({content:`Update des xp de \`${i}\` membres`})
  }
  }