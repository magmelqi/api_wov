const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const {readFileSync, readdirSync} = require ("fs");
const prefix = JSON.parse(readFileSync(`././Information/prefix/prefix.json`, 'utf-8'))

module.exports = {
    name: "don",
    category: 'don',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'don', 
    examples: ['don'],
    description: `Donne la liste des personnes ayant fait un don pour le clan (Pour uptade la liste: ${prefix.prefix}donadd)`,
       async run (client, message, args) {
        try {
          var DOr = readdirSync(`././Information/Or/Member-Id`, 'utf-8')} catch (err) {return console.log(err);}
          var Ort = JSON.stringify(DOr); 
      
          const embed = new MessageEmbed()
          .setTitle(`Liste des dons présent`)
          .setTimestamp();
          var n = 0
          for(let i=0; i < DOr.length; i++)  {
      
            var Orf = /.json"/g; var OrS = Ort.search(Orf)
            var Ors = Ort.slice(1, OrS+6); var Ort = Ort.slice(OrS+6); 
            var OrO = JSON.parse(Ors); 
      
            try {
            var Or = JSON.parse(readFileSync(`././Information/Or/Member-Id/${OrO}`, 'utf-8'))} catch (err) {return message.channel.send(`Erreur de lecture dans les fichiers`);}
      
            try {
              var Gemme = JSON.parse(readFileSync(`././Information/Gemme/Member-Id/${OrO}`, 'utf-8'))} catch (err) {}
      
                  try {
              if (Or.Or > 499 && Gemme.Gemme > 0) {embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`\`${Or.Pseudo}\` posséde: \`${Or.Or}\` or et \`${Gemme.Gemme}\` gemme`});var n = n + 1}
              else if (Gemme.Gemme > 0) {embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`\`${Or.Pseudo}\` posséde: \`${Gemme.Gemme}\` gemme`});var n = n + 1}
              else if (Or.Or > 499 ) {embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`\`${Or.Pseudo}\` posséde: \`${Or.Or}\` or`});var n = n + 1}
                  }catch (err) {}
            var Or = 0; var Gemme = 0
          }; embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value: `${n} ayant 500 or ou 1 diamant en banque`})
          message.channel.send({embeds: [embed]})
        },
          async runSlash(client, interaction) { 

            interaction.reply({content: 'Affichage des dons suffisant pour la quête', ephemeral: true})
            try {
              var DOr = readdirSync(`././Information/Or/Member-Id`, 'utf-8')} catch (err) {return console.log(err);}
              var Ort = JSON.stringify(DOr); 
          
          
              const embed = new MessageEmbed()
              .setTitle(`Liste des dons présent`)
              .setTimestamp();
              var n = 0
              for(let i=0; i < DOr.length; i++)  {
          
                var Orf = /.json"/g; var OrS = Ort.search(Orf)
                var Ors = Ort.slice(1, OrS+6); var Ort = Ort.slice(OrS+6); 
                var OrO = JSON.parse(Ors); 
          
                try {
                var Or = JSON.parse(readFileSync(`././Information/Or/Member-Id/${OrO}`, 'utf-8'))} catch (err) {return interaction.channel.send(`Erreur de lecture dans les fichiers`);}
          
                try {
                  var Gemme = JSON.parse(readFileSync(`././Information/Gemme/Member-Id/${OrO}`, 'utf-8'))} catch (err) {}
          
                      try {
                  if (Or.Or > 499 && Gemme.Gemme > 0) {embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`\`${Or.Pseudo}\` posséde: \`${Or.Or}\` Or et \`${Gemme.Gemme}\` gemme`});var n = n + 1}
                  else if (Gemme.Gemme > 0) {embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`\`${Or.Pseudo}\` posséde: \`${Gemme.Gemme}\` gemme`});var n = n + 1}
                  else if (Or.Or > 499 ) {embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value:`\`${Or.Pseudo}\` posséde: \`${Or.Or}\` Or`});var n = n + 1}
                      }catch (err) {}
                var Or = 0; var Gemme = 0 }
                embed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -', value: `${n} ayant 500 or ou 1 diamant en banque`})
          interaction.channel.send({embeds: [embed]})
        }
      }