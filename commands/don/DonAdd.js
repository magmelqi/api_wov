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
        var Atime = data.creationTime; var AtimeT = JSON.stringify(Atime); var annéeA= AtimeT.slice(1,5)
          var moisA= AtimeT.slice(6,8); var jourA= AtimeT.slice(9,11); var heureA= AtimeT.slice(12,14); var minuteA= AtimeT.slice(15,17)
          var secondeA= AtimeT.slice(18,20); console.log(`Dernier don: Année: ${annéeA}, mois: ${moisA}, jour: ${jourA}, heure: ${heureA}, minute: ${minuteA}, seconde: ${secondeA}`)

        try {var InfoOr={"Or":0,"Création":"0000-00-00T00:00:00.000Z"}; 
          var InfoOr = JSON.parse(readFileSync(`././Information/Or/Member-Id/${data.playerId}.json`, 'utf-8'))} catch (err) {}
          var time = InfoOr.Création; var timeT = JSON.stringify(time); var annéeOr= timeT.slice(1,5) 
          var moisOr= timeT.slice(6,8); var jourOr= timeT.slice(9,11); var heureOr= timeT.slice(12,14); var minuteOr= timeT.slice(15,17)
          var secondeOr= timeT.slice(18,20); console.log(`Donnée-or: Année: ${annéeOr}, mois: ${moisOr}, jour: ${jourOr}, heure: ${heureOr}, minute: ${minuteOr}, seconde: ${secondeOr}`)

          if (annéeA > annéeOr || moisA > moisOr || moisA == moisOr && jourA > jourOr || moisA == moisOr && jourA == jourOr && heureA > heureOr || moisA == moisOr && jourA == jourOr && heureA == heureOr && minuteA > minuteOr || moisA == moisOr && jourA == jourOr && heureA == heureOr && minuteA == minuteOr && secondeA > secondeOr ) {
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
        console.log(Or.Pseudo, Or.Or); message.channel.send(`${Or.Pseudo}: ${Or.Or}`)}}else {message.channel.send(`Le don d'or de ${InfoOr.Pseudo} a déjà été comptabilisé`)}
        
        try {var InfoGemme={"Gemme":0,"Création":"0000-00-00T00:00:00.000Z"}
          var InfoGemme = JSON.parse(readFileSync(`././Information/Gemme/Member-Id/${data.playerId}.json`, 'utf-8'))} catch (err) {}
          var time = InfoGemme.Création; var timeT = JSON.stringify(time); var annéeGemme= timeT.slice(1,5) 
          var moisGemme= timeT.slice(6,8); var jourGemme= timeT.slice(9,11); var heureGemme= timeT.slice(12,14); var minuteGemme= timeT.slice(15,17)
          var secondeGemme= timeT.slice(18,20); console.log(`Donnée-gemme: Année: ${annéeGemme}, mois: ${moisGemme}, jour: ${jourGemme}, heure: ${heureGemme}, minute: ${minuteGemme}, seconde: ${secondeGemme}`)

          if (annéeA > annéeGemme || moisA > moisGemme || moisA == moisGemme && jourA > jourGemme || moisA == moisGemme && jourA == jourGemme && heureA > heureGemme || moisA == moisGemme && jourA == jourGemme && heureA == heureGemme && minuteA > minuteGemme || moisA == moisGemme && jourA == jourGemme && heureA == heureGemme && minuteA == minuteGemme && secondeA > secondeGemme ) {
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
          console.log(Gems.Pseudo, Gems.gems); message.channel.send(`${Gems.Pseudo}: ${Gems.gems}`)}}else {message.channel.send(`Le don de gemme de ${InfoGemme.Pseudo} a déjà été comptabilisé`)}

     var nb = i}}
     if (nb > 1) {message.channel.send(`Uptade des dons de ${nb} membres`)} else {
     message.channel.send(`Uptade des dons de ${nb} membre`)}
    }}