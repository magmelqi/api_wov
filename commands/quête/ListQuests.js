const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const dayjs = require ('dayjs');
const {writeFileSync, unlinkSync, readdirSync} = require ("fs");

module.exports = {
    name: "liste",
    category: 'quête',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'liste',
    examples: ['liste'],
    description: 'Liste des participants de la quête',
      run: async(client, message, args) => {

        try {
          var Lister = readdirSync(`././Information/Quête/Member-Id`, 'utf-8')} catch (err) {return console.log(err);}
          var Lisetet = JSON.stringify(Lister);

          try {
            var ListerP = readdirSync(`././Information/Quête/Member-Pseudo`, 'utf-8')} catch (err) {return console.log(err);}
            var LisetetP = JSON.stringify(ListerP);

          for(let i=0; i < ListerP.length; i++)  {
    
              var Listef = /.json"/g; var ListeS = Lisetet.search(Listef)
              var Listes = Lisetet.slice(1, ListeS+6); var Lisetet = Lisetet.slice(ListeS+6); 
              try {var ListeO = JSON.parse(Listes);}catch(err) {console.log(err)}

              var ListefP = /.json"/g; var ListeSP = LisetetP.search(ListefP)
              var ListesP = LisetetP.slice(1, ListeSP+6); var LisetetP = LisetetP.slice(ListeSP+6);
              var ListeOP = JSON.parse(ListesP); 
            try {
                unlinkSync(`././Information/Quête/Member-Id/${ListeO}`, 'utf-8')}catch (err) {console.log(err)}
                unlinkSync(`././Information/Quête/Member-Pseudo/${ListeOP}`, 'utf-8')}


        const Questsactive = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/active`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(err)}); 
        const Clan = (Questsactive.body)
        const Partciipants= (Clan.participants);

        const heure = `${dayjs().format("HH:mm")}-heure anglaise`;
        
        var text = JSON.stringify(Partciipants)
        try {
        for (var i = 0; i < 20;i++){ 
            var Mmf = /},{"/g
            const MmDF = text.search(Mmf); var Mm1 = text.slice(1, MmDF+1);
            var text = text.slice(MmDF+1);
            
            var data = JSON.parse(Mm1);

            const info = {
                Pseudo: data.username,
                Id: data.playerId,
                Xp: data.xp,
                Heure: heure
              }

              const objectToJson = JSON.stringify(info)
          writeFileSync(`././Information/Quête/Member-Id/${data.playerId}.json`, objectToJson)
          writeFileSync(`././Information/Quête/Member-Pseudo/${data.username}.json`, objectToJson)
          message.channel.send(`\`${data.username}\` est présent dans la quête`)
        }} catch(err) {}
        var Mmf = /},{"/g
        const MmDF = text.search(Mmf);
        var Mm1 = text.slice(MmDF+2, -1); 
       
        
        var data = JSON.parse(Mm1);
        const info = {
            Pseudo: data.username,
            Id: data.playerId,
            Xp: data.xp,
            Heure: heure
          }

          const objectToJson = JSON.stringify(info)

          writeFileSync(`././Information/Quête/Member-Id/${data.playerId}.json`, objectToJson)
          writeFileSync(`././Information/Quête/Member-Pseudo/${data.username}.json`, objectToJson)
          message.channel.send(`\`${data.username}\` est présent dans la quête`)
        
    },
    async runSlash(client, interaction) { 
      interaction.reply({content: 'La liste arrive...', ephemeral: true})
      const Questsactive = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/active`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {interaction.channel.send(err)}); 
      const Clan = (Questsactive.body)
      const Partciipants= (Clan.participants);

      const heure = `${dayjs().format("HH:mm")}-heure anglaise`;
      
      var text = JSON.stringify(Partciipants)
      try {
      for (var i = 0; i < 50;i++){ 
          var Mmf = /},{"/g
          const MmDF = text.search(Mmf); var Mm1 = text.slice(1, MmDF+1);
          var text = text.slice(MmDF+1);
          
          var data = JSON.parse(Mm1);

          const info = {
              Pseudo: data.username,
              Id: data.playerId,
              Xp: data.xp,
              Heure: heure
            }

            const objectToJson = JSON.stringify(info)
        writeFileSync(`././Information/Quête/Member-Id/${data.playerId}.json`, objectToJson)
        writeFileSync(`././Information/Quête/Member-Pseudo/${data.username}.json`, objectToJson)
        interaction.channel.send(`\`${data.username}\` est présent dans la quête`)
      }} catch(err) {}
      var Mmf = /},{"/g
      const MmDF = text.search(Mmf);
      var Mm1 = text.slice(MmDF+2, -1); 
     
      
      var data = JSON.parse(Mm1);
      const info = {
          Pseudo: data.username,
          Id: data.playerId,
          Xp: data.xp,
          Heure: heure
        }

        const objectToJson = JSON.stringify(info)

        writeFileSync(`././Information/Quête/Member-Id/${data.playerId}.json`, objectToJson)
        writeFileSync(`././Information/Quête/Member-Pseudo/${data.username}.json`, objectToJson)
        interaction.channel.send(`\`${data.username}\` est présent dans la quête`)
       }

 }