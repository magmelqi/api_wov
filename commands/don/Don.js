const dotenv = require('dotenv'); dotenv.config();
const {readFileSync, readdirSync} = require ("fs");
const prefix = '?';

module.exports = {
    name: "don",
    category: 'don',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'don', 
    examples: ['don'],
    description: `Donne la liste des personnes ayant fait un don pour le clan (Pour uptade la liste: ${prefix}donadd)`,
       async run (client, message, args) {
        try {
          var DOr = readdirSync(`././Information/Or/Member-Id`, 'utf-8')} catch (err) {return console.log(err);}
          var Ort = JSON.stringify(DOr); 
      
      
          for(let i=0; i < DOr.length; i++)  {
      
            var Orf = /.json"/g; var OrS = Ort.search(Orf)
            var Ors = Ort.slice(1, OrS+6); var Ort = Ort.slice(OrS+6); 
            var OrO = JSON.parse(Ors); 
      
            try {
            var Or = JSON.parse(readFileSync(`././Information/Or/Member-Id/${OrO}`, 'utf-8'))} catch (err) {return message.channel.send(`Erreur de lecture dans les fichiers`);}
      
            try {
              var Gemme = JSON.parse(readFileSync(`././Information/Gemme/Member-Id/${OrO}`, 'utf-8'))} catch (err) {}
      
                  try {
              if (Or.Or > 499 && Gemme.Gemme > 0) {message.channel.send(`\`${Or.Pseudo}\` posséde: \`${Or.Or}\` or et \`${Gemme.Gemme}\` gemme`);}
              else if (Gemme.Gemme > 0) {message.channel.send(`\`${Or.Pseudo}\` posséde: \`${Gemme.Gemme}\` gemme`);}
              else if (Or.Or > 499 ) {message.channel.send(`\`${Or.Pseudo}\` posséde: \`${Or.Or}\` or`);}
                  }catch (err) {}
            var Or = 0; var Gemme = 0
          }},
          async runSlash(client, interaction) { 

            interaction.reply({content: 'Affichage des dons suffisant pour la quête', ephemeral: true})
            try {
              var DOr = readdirSync(`././Information/Or/Member-Id`, 'utf-8')} catch (err) {return console.log(err);}
              var Ort = JSON.stringify(DOr); 
          
          
              for(let i=0; i < DOr.length; i++)  {
          
                var Orf = /.json"/g; var OrS = Ort.search(Orf)
                var Ors = Ort.slice(1, OrS+6); var Ort = Ort.slice(OrS+6); 
                var OrO = JSON.parse(Ors); 
          
                try {
                var Or = JSON.parse(readFileSync(`././Information/Or/Member-Id/${OrO}`, 'utf-8'))} catch (err) {return interaction.channel.send(`Erreur de lecture dans les fichiers`);}
          
                try {
                  var Gemme = JSON.parse(readFileSync(`././Information/Gemme/Member-Id/${OrO}`, 'utf-8'))} catch (err) {}
          
                      try {
                  if (Or.Or > 499 && Gemme.Gemme > 0) {interaction.channel.send(`\`${Or.Pseudo}\` posséde: \`${Or.Or}\` Or et \`${Gemme.Gemme}\` gemme`);}
                  else if (Gemme.Gemme > 0) {interaction.channel.send(`\`${Or.Pseudo}\` posséde: \`${Gemme.Gemme}\` gemme`);}
                  else if (Or.Or > 499 ) {interaction.channel.send(`\`${Or.Pseudo}\` posséde: \`${Or.Or}\` Or`);}
                      }catch (err) {}
                var Or = 0; var Gemme = 0 }
        }
      }