const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const {writeFileSync, readFileSync} = require ("fs");
const dayjs = require ('dayjs');

module.exports = {
    name: "donadd",
    category: 'don',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'donadd', 
    examples: ['donadd'],
    description: 'Actualise l\'or et les gems des membres',
       async run (client, message, args) {
        const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/ledger`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {console.log(`Erreur a la 1ére requête: ${err}`); console.log(err)}); 
        console.log ('Commande banque fait'); 
    
        var text = Messageclan.text
    
        const timestamp = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`; console.log(timestamp)
        const heure = `${dayjs().format("HH:mm")}-heure anglaise`;

        var i = 0
      for (var type = "DONATE"; type == "DONATE";){var i =i+1;
        var Mmf= /"creationTime":/g
        const MmDF = text.search(Mmf); var Mm1 = text.slice(1, MmDF+42);
        var type = text.slice(MmDF+-8,MmDF-2); var text= text.slice(MmDF+42);
        if (type !== "DONATE") {console.log ("return")} else {
        var data = JSON.parse(Mm1);

        try {var InfoOr={"Or":0,"Création":"bouh"}
          var InfoOr = JSON.parse(readFileSync(`././Information/Or/Member-Id/${data.playerId}.json`, 'utf-8'))} catch (err) {}

          if (InfoOr.Création == data.creationTime) {message.channel.send(`Le don d'or de ${InfoOr.Pseudo} a déjà été comptabilisé`)}
          else if (InfoOr.Or > 0) {
            const info = {
              Pseudo: data.playerUsername,
              PlayerId: data.playerId,
              DonId: data.id,
              Or: data.gold+InfoOr.Or,
              Type: data.type,
              Création: data.creationTime,
              Heure: heure
            }
            const objectToJson = JSON.stringify(info)
    
            writeFileSync(`././Information/Or/Member-Id/${data.playerId}.json`, objectToJson)
            writeFileSync(`././Information/Or/Member-Pseudo/${data.playerUsername}.json`, objectToJson)
            const Or = JSON.parse(readFileSync(`././Information/Or/Member-Id/${data.playerId}.json`, 'utf-8')); 
            console.log(Or.Pseudo, Or.Or); message.channel.send(`${Or.Pseudo}: ${Or.Or}`)}
          
         else if (data.gold > 0) {
        const info = {
          Pseudo: data.playerUsername,
          PlayerId: data.playerId,
          DonId: data.id,
          Or: data.gold,
          Type: data.type,
          Création: data.creationTime,
          Heure: heure
        }
        const objectToJson = JSON.stringify(info)

        writeFileSync(`././Information/Or/Member-Id/${data.playerId}.json`, objectToJson)
        writeFileSync(`././Information/Or/Member-Pseudo/${data.playerUsername}.json`, objectToJson)
        const Or = JSON.parse(readFileSync(`././Information/Or/Member-Id/${data.playerId}.json`, 'utf-8')); 
        console.log(Or.Pseudo, Or.Or); message.channel.send(`${Or.Pseudo}: ${Or.Or}`)}
        
        try {var InfoGemme={"Gemme":0,"Création":"bouh"}
          var InfoGemme = JSON.parse(readFileSync(`././Information/Gemme/Member-Id/${data.playerId}.json`, 'utf-8'))} catch (err) {}

          if (InfoGemme.Création == data.creationTime) {message.channel.send(`Le don de gemme de ${InfoGemme.Pseudo} a déjà été comptabilisé`)}
          else if (InfoGemme.Gemme > 0) {
            const info = {
              Pseudo: data.playerUsername,
              PlayerId: data.playerId,
              DonId: data.id,
              Gemme: data.gems+InfoGemme.Gemme,
              Type: data.type,
              Création: data.creationTime,
              Heure: heure
            }
            const objectToJson = JSON.stringify(info)
    
            writeFileSync(`././Information/Gemme/Member-Id/${data.playerId}.json`, objectToJson)
            writeFileSync(`././Information/Gemme/Member-Pseudo/${data.playerUsername}.json`, objectToJson)
            const Gems = JSON.parse(readFileSync(`././Information/Gemme/Member-Id/${data.playerId}.json`, 'utf-8')); 
            console.log(Gems.Pseudo, Gems.gems); message.channel.send(`${Gems.Pseudo}: ${Gems.gems}`)}

        else if (data.gems > 0) {
          const info = {
            Pseudo: data.playerUsername,
            PlayerId: data.playerId,
            DonId: data.id,
            Gemme: data.gems,
            Type: data.type,
            Création: data.creationTime,
            Heure: heure
          }
          const objectToJson = JSON.stringify(info)
  
          writeFileSync(`././Information/Gemme/Member-Id/${data.playerId}.json`, objectToJson)
          writeFileSync(`././Information/Gemme/Member-Pseudo/${data.playerUsername}.json`, objectToJson)
          const Gems = JSON.parse(readFileSync(`././Information/Gemme/Member-Id/${data.playerId}.json`, 'utf-8')); 
          console.log(Gems.Pseudo, Gems.gems); message.channel.send(`${Gems.Pseudo}: ${Gems.gems}`)}

     var nb = i}}
     if (nb > 1) {message.channel.send(`Uptade des dons de ${nb} membres`)} else {
     message.channel.send(`Uptade des dons de ${nb} membre`)}
    }}