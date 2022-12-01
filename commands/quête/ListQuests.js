const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const dayjs = require ('dayjs');
const {writeFileSync} = require ("fs");

module.exports = {
    name: "liste",
    category: 'quête',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'liste',
    examples: ['liste'],
    description: 'Voir les quêtes achetable + sondage',
      run: async(client, message, args) => {
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

 }