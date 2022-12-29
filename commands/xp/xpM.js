const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const dayjs = require ('dayjs');
const { xpAdd } = require('../../models/index')

module.exports = {
    name: "xpaddM",
    category: 'xp',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: true,
    usage: 'xpaddM', 
    examples: ['xpaddM'],
    description: 'Actualise les xp des membres',
       async run (client, message, args) {
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
    
       try {
      for (var i = 0; i < Messageclan.body.length;i++){ 
        var Mmf= /"participateInClanQuests":/g
        const MmDF = text.search(Mmf); var Mm1 = text.slice(0, MmDF+32);
        var quests = text.slice(MmDF+26,MmDF+30);
        if (quests == "true") {var Mm1 = text.slice(1, MmDF+31);var text = text.slice(MmDF+31)} else {var Mm1 = text.slice(1, MmDF+32);var text = text.slice(MmDF+32)}
        var data = JSON.parse(Mm1);

        const heure = `${dayjs().add(-1, 'hour').format("HH:mm")}`;
        const xpData = await xpAdd.findOne({ Id: data.playerId }); console.log(xpData.Pseudo, xpData.xp)

        if (!xpData) {
        const createdXp= await new xpAdd({ Pseudo: data.username, Id: data.playerId, xp: data.xp, date: heure });
        createdXp.save().then(g => console.log(data.username, data.xp))
      }else if (xpData.date != heure || xpData.xp != data.xp) { try {xpData.overwrite({ Pseudo: data.username, Id: data.playerId, xp: data.xp, date: heure});await xpData.save()}catch(err) {console.log(err)}};

     i= i}} catch (err) {}message.channel.send({content:`Update des xp de \`${i}\` membres`})
    },

    async runSlash(client, interaction) { 
      
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
     try {
    for (var i = 0; i < 50;i++){ 
      var Mmf= /"participateInClanQuests":/g
      const MmDF = text.search(Mmf); var Mm1 = text.slice(0, MmDF+32);
      var quests = text.slice(MmDF+26,MmDF+30);
      if (quests == "true") {var Mm1 = text.slice(1, MmDF+31);var text = text.slice(MmDF+31)} else {var Mm1 = text.slice(1, MmDF+32);var text = text.slice(MmDF+32)}
      var data = JSON.parse(Mm1);
  
      const heure = `${dayjs().add(-1, 'hour').format("HH:mm")}`;
        const xpData = await xpAdd.findOne({ Id: data.playerId }); console.log(xpData.Pseudo, xpData.xp)

        if (!xpData) {
        const createdXp= await new xpAdd({ Pseudo: data.username, Id: data.playerId, xp: data.xp, date: heure });
        createdXp.save().then(g => console.log(data.username, data.xp))
      }else if (xpData.date != heure || xpData.xp != data.xp) { try {xpData.overwrite({ Pseudo: data.username, Id: data.playerId, xp: data.xp, date: heure});await xpData.save()}catch(err) {console.log(err)}};
    var i = i}}catch(err){}interaction.channel.send(`Update des xp de \`${i}\` membres`)
  }
  }