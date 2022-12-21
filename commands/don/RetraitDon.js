const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const dayjs = require ('dayjs');
const {writeFileSync, readFileSync, readdirSync} = require ("fs");

module.exports = {
    name: "retraitdon",
    category: 'don',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'retraitdon',
    examples: ['retraitdon'],
    description: 'Retirer 500 or sur la banque des joueurs participants',
      run: async(client, message, args) => {
        try {
            var Lister = readdirSync(`././Information/Quête/Member-Id`, 'utf-8')} catch (err) {return console.log(err);}
            var Lisetet = JSON.stringify(Lister);

            for(let i=0; i < Lister.length; i++)  {
      
                var Listef = /.json"/g; var ListeS = Lisetet.search(Listef)
                var Listes = Lisetet.slice(1, ListeS+6); var Lisetet = Lisetet.slice(ListeS+6); 
                var ListeO = JSON.parse(Listes); 
                var pseudoF = JSON.parse(readFileSync(`././Information/Quête/Member-Id/${ListeO}`, 'utf-8'))
                var pseudo = pseudoF.Pseudo
                
          
                try {
                  var ListeMembre = JSON.parse(readFileSync(`././Information/Or/Member-Id/${ListeO}`, 'utf-8'))} catch (err) {message.channel.send(`Erreur de lecture dans le fichier ${pseudo} n'existe pas`);}
          
                      try { var or = 0; if (ListeMembre.Or > 499) {var or = 500} else {message.channel.send(`${ListeMembre.Pseudo} a seulement ${ListeMembre.Or} en banque`)}
                        const info = {
                            Pseudo: ListeMembre.Pseudo,
                            PlayerId: ListeMembre.PlayerId,
                            DonId: ListeMembre.DonId,
                            Or: ListeMembre.Or-or,
                            Type: ListeMembre.Type,
                            Création: ListeMembre.Création,
                            Heure: ListeMembre.Heure
                          }
                          const objectToJson = JSON.stringify(info)
                  
                          writeFileSync(`././Information/Or/Member-Id/${ListeMembre.PlayerId}.json`, objectToJson)
                          writeFileSync(`././Information/Or/Member-Pseudo/${ListeMembre.Pseudo}.json`, objectToJson)

                      }catch (err) {}
              }
    },

 }