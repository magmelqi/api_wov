const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const {readFileSync, readdirSync} = require ("fs");
const dayjs = require ('dayjs');

module.exports = {
    name: "xp",
    category: 'xp',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'xp', 
    examples: ['xp'],
    description: 'Donne la liste de ceux sous les 2000xp apres une semaine',
       async run (client, message, args) { 
        const timestamp = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`;
       const timestampH = `${dayjs().add(-8, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`; 
       const timestampA = `${dayjs().add(-3, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;

        const xpPseudoTT = readdirSync(`Information/xp/Member-Id/${timestamp}`);
        var xpPseudot = JSON.stringify(xpPseudoTT) 

        const emebed = new MessageEmbed()
        .setTitle(`XP-${timestamp}`)
        .setColor('WHITE')
        .setDescription(`Xp du ${timestampH} au ${timestamp} -> 2000xp\nXp du ${timestampA} au ${timestamp} -> 1000xp`)
        .setThumbnail()
        .setTimestamp()
        try {
          for(let i=0; i < xpPseudoTT.length; i++)  {
            
            var xpPseudof = /.json"/g; var xpPseudoS = xpPseudot.search(xpPseudof)
            var xpPseudos = xpPseudot.slice(1, xpPseudoS+6); 
            var xpPseudoO = xpPseudos.slice(1, -6); 
            var xpPseudot = xpPseudot.slice(xpPseudoS+6)

        try {
        var InfoA = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestamp}/${xpPseudoO}.json`, 'utf-8'))} catch (err) {message.channel.send(`Erreur n'a pas d'xp enregistré pour aujourd'hui: ${timestamp}`); var InfoA = 0}
         var Xp1 = InfoA.Xp


          var join = InfoA.Création; var joinT= JSON.stringify(join); var joinTf= joinT.slice(1,11);
          const timestampB= dayjs().add(-3, 'day').add(-1, 'hour').format("YYYY-MM-DD")

          
          try {
            var InfoB = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampH}/${xpPseudoO}.json`, 'utf-8'))} catch (err) { var InfoB = 0}
             var Xp2 = InfoB.Xp; var XpA = Xp1-Xp2;
    
            if (XpA < 2000) {console.log(InfoA.Pseudo, `${XpA} = ${Xp1} - ${Xp2}`)
            var n = 0

            try { var timestampL2 = `${dayjs().add(-1, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
            var InfoJ1s = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL2}/${xpPseudoO}.json`, 'utf-8'))}catch(err) {}

            try { var timestampL1 = `${dayjs().add(-9, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
              var InfoJ1 = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL1}/${xpPseudoO}.json`, 'utf-8'))
            var xpJ1 =  InfoJ1s.Xp - InfoJ1.Xp}catch(err) {}

            if (xpJ1 == undefined) {var xpJ2 = 2000}
            else if (xpJ1 > 1999) {var xpJ2 = 2000}
            else if (xpJ1 < 2000) { var n = n+1

              try { var timestampL21 = `${dayjs().add(-2, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
            var InfoJ2s = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL21}/${xpPseudoO}.json`, 'utf-8'))}catch(err) {}

            try { var timestampL11 = `${dayjs().add(-10, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
              var InfoJ2 = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL11}/${xpPseudoO}.json`, 'utf-8'))
            var xpJ2 =  InfoJ2s.Xp - InfoJ2.Xp}catch(err) {} 
          }

            if (xpJ2 == undefined ) {var xpJ3 = 2000}
            else if ( xpJ2 > 1999) {var xpJ3 = 2000}
            else if (xpJ2 < 2000) { var n = n+1

              try { var timestampL22 = `${dayjs().add(-3, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
            var InfoJ3s = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL22}/${xpPseudoO}.json`, 'utf-8'))}catch(err) {}

            try { var timestampL12 = `${dayjs().add(-11, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
              var InfoJ3 = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL12}/${xpPseudoO}.json`, 'utf-8'))
            var xpJ3 =  InfoJ3s.Xp - InfoJ3.Xp}catch(err) {}
          }

            if (xpJ3 == undefined) {var xpJ4 = 2000}
            else if (xpJ3 > 1999) {var xpJ4 = 2000}
            else if (xpJ3 < 2000) { var n = n+1

              try { var timestampL23 = `${dayjs().add(-4, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
            var InfoJ4s = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL23}/${xpPseudoO}.json`, 'utf-8'))}catch(err) {}

            try { var timestampL13 = `${dayjs().add(-12, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
              var InfoJ4 = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL13}/${xpPseudoO}.json`, 'utf-8'))
            var xpJ4 =  InfoJ4s.Xp - InfoJ4.Xp}catch(err) {}
          }

          if (xpJ4 == undefined) {var xpJ5 = 2000}
          else if (xpJ4 > 1999) {var xpJ5 = 2000}
          else if (xpJ4 < 2000) { var n = n+1 

            try { var timestampL24 = `${dayjs().add(-5, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
            var InfoJ5s = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL24}/${xpPseudoO}.json`, 'utf-8'))}catch(err) {}

            try { var timestampL14 = `${dayjs().add(-13, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
              var InfoJ5 = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL14}/${xpPseudoO}.json`, 'utf-8'))
            var xpJ5 =  InfoJ5s.Xp - InfoJ5.Xp}catch(err) {}
        }

        if (xpJ5 == undefined) {}
          else if ( xpJ5 > 1999) {}
          else if (xpJ5 < 2000) { var n = n+1 } 

          if ( n !==0) {
            if ( n == 1) {var xpvalue = `A du être avertis hier !`}
            else if ( n == 2) {var xpvalue = `A du être avertis avant-hier !`}
            else if ( n == 3) {var xpvalue = `A du être avertis, son exclusion approche !`}
            else if ( n == 4) {var xpvalue = `A du être avertis, son exclusion approche a grand pas !`}
            else if ( n == 5) {var xpvalue = `A exclure !`}
          emebed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - -', value: `+\`❌\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${XpA}\` sur \`2000\`xp requis\nSous les 2000 xp depuis ${n} jours\n${xpvalue}` })
        } else {emebed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - -', value: `+\`❌\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${XpA}\` sur \`2000\`xp requis\nA avertir !` })}

        } else {console.log(InfoA.Pseudo, `${XpA} = ${Xp1} - ${Xp2}`)};



          if (joinTf==timestampB ) {

          
          if (Xp1 > 1000) {emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`+\`✅\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${Xp1}\` sur \`1000\`xp requis`});console.log(InfoA.Pseudo,  Xp1)} 
          else {
            emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`+\`❌\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${Xp1}\` sur \`1000\`xp requis`});console.log(InfoA.Pseudo,  Xp1)}
        } 
      }}catch(err) {console.log(err)}

      try {
        emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`-Dernier update pour les xp du \`${timestamp}\` effectué à \`${InfoA.Heure}\``})
      }catch(err) {}

      try {
        emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`-Dernier update pour les xp du \`${timestampH}\` effectué à \`${InfoB.Heure}\``})
    }catch (err) {}
    message.channel.send({embeds: [emebed]})
  
       },
       async runSlash(client, interaction) { 
        interaction.reply({content:'Affichage en cours', ephemeral: true})
        const timestamp = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`;
        const timestampH = `${dayjs().add(-8, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`; 
        const timestampA = `${dayjs().add(-3, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
 
         const xpPseudoTT = readdirSync(`Information/xp/Member-Id/${timestamp}`);
         var xpPseudot = JSON.stringify(xpPseudoTT) 
 
         const emebed = new MessageEmbed()
         .setTitle(`XP-${timestamp}`)
         .setColor('WHITE')
         .setDescription(`Xp du ${timestampH} au ${timestamp} -> 2000xp\nXp du ${timestampA} au ${timestamp} -> 1000xp`)
         .setThumbnail()
         .setTimestamp()
         try {
           for(let i=0; i < xpPseudoTT.length; i++)  {
             
             var xpPseudof = /.json"/g; var xpPseudoS = xpPseudot.search(xpPseudof)
             var xpPseudos = xpPseudot.slice(1, xpPseudoS+6); 
             var xpPseudoO = xpPseudos.slice(1, -6); 
             var xpPseudot = xpPseudot.slice(xpPseudoS+6)
 
         try {
         var InfoA = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestamp}/${xpPseudoO}.json`, 'utf-8'))} catch (err) {interaction.editReply({content:`Erreur n'a pas d'xp enregistré pour aujourd'hui: ${timestamp}`, ephemeral:true}); var InfoA = 0}
          var Xp1 = InfoA.Xp
 
 
           var join = InfoA.Création; var joinT= JSON.stringify(join); var joinTf= joinT.slice(1,11);
           const timestampB= dayjs().add(-3, 'day').add(-1, 'hour').format("YYYY-MM-DD")
 
           
           try {
             var InfoB = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampH}/${xpPseudoO}.json`, 'utf-8'))} catch (err) { var InfoB = 0}
              var Xp2 = InfoB.Xp; var XpA = Xp1-Xp2;

              if (XpA < 2000) {console.log(InfoA.Pseudo, `${XpA} = ${Xp1} - ${Xp2}`)
              var n = 0
  
              try { var timestampL2 = `${dayjs().add(-1, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
              var InfoJ1s = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL2}/${xpPseudoO}.json`, 'utf-8'))}catch(err) {}
  
              try { var timestampL1 = `${dayjs().add(-9, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
                var InfoJ1 = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL1}/${xpPseudoO}.json`, 'utf-8'))
              var xpJ1 =  InfoJ1s.Xp - InfoJ1.Xp}catch(err) {}
  
              if (xpJ1 == undefined) {var xpJ2 = 2000}
              else if (xpJ1 > 1999) {var xpJ2 = 2000}
              else if (xpJ1 < 2000) { var n = n+1
  
                try { var timestampL21 = `${dayjs().add(-2, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
              var InfoJ2s = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL21}/${xpPseudoO}.json`, 'utf-8'))}catch(err) {}
  
              try { var timestampL11 = `${dayjs().add(-10, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
                var InfoJ2 = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL11}/${xpPseudoO}.json`, 'utf-8'))
              var xpJ2 =  InfoJ2s.Xp - InfoJ2.Xp}catch(err) {} 
            }
  
              if (xpJ2 == undefined ) {var xpJ3 = 2000}
              else if ( xpJ2 > 1999) {var xpJ3 = 2000}
              else if (xpJ2 < 2000) { var n = n+1
  
                try { var timestampL22 = `${dayjs().add(-3, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
              var InfoJ3s = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL22}/${xpPseudoO}.json`, 'utf-8'))}catch(err) {}
  
              try { var timestampL12 = `${dayjs().add(-11, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
                var InfoJ3 = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL12}/${xpPseudoO}.json`, 'utf-8'))
              var xpJ3 =  InfoJ3s.Xp - InfoJ3.Xp}catch(err) {}
            }
  
              if (xpJ3 == undefined) {var xpJ4 = 2000}
              else if (xpJ3 > 1999) {var xpJ4 = 2000}
              else if (xpJ3 < 2000) { var n = n+1
  
                try { var timestampL23 = `${dayjs().add(-4, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
              var InfoJ4s = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL23}/${xpPseudoO}.json`, 'utf-8'))}catch(err) {}
  
              try { var timestampL13 = `${dayjs().add(-12, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
                var InfoJ4 = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL13}/${xpPseudoO}.json`, 'utf-8'))
              var xpJ4 =  InfoJ4s.Xp - InfoJ4.Xp}catch(err) {}
            }
  
            if (xpJ4 == undefined) {var xpJ5 = 2000}
            else if (xpJ4 > 1999) {var xpJ5 = 2000}
            else if (xpJ4 < 2000) { var n = n+1 
  
              try { var timestampL24 = `${dayjs().add(-5, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
              var InfoJ5s = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL24}/${xpPseudoO}.json`, 'utf-8'))}catch(err) {}
  
              try { var timestampL14 = `${dayjs().add(-13, 'day').add(-1, 'hour').format("DD-MM-YYYY")}`;
                var InfoJ5 = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampL14}/${xpPseudoO}.json`, 'utf-8'))
              var xpJ5 =  InfoJ5s.Xp - InfoJ5.Xp}catch(err) {}
          }
  
          if (xpJ5 == undefined) {}
            else if ( xpJ5 > 1999) {}
            else if (xpJ5 < 2000) { var n = n+1 } 
  
            if ( n !==0) {
              if ( n == 1) {var xpvalue = `A du être avertis hier !`}
              else if ( n == 2) {var xpvalue = `A du être avertis avant-hier !`}
              else if ( n == 3) {var xpvalue = `A du être avertis, son exclusion approche !`}
              else if ( n == 4) {var xpvalue = `A du être avertis, son exclusion approche a grand pas !`}
              else if ( n == 5) {var xpvalue = `A exclure !`}
            emebed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - -', value: `+\`❌\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${XpA}\` sur \`2000\`xp requis\nSous les 2000 xp depuis ${n} jours\n${xpvalue}` })
          } else {emebed.addFields({name:'- - - - - - - - - - - - - - - - - - - - - - - - - -', value: `+\`❌\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${XpA}\` sur \`2000\`xp requis\nA avertir !` })}
  
          } else {console.log(InfoA.Pseudo, `${XpA} = ${Xp1} - ${Xp2}`)};
 
 
           if (joinTf==timestampB ) {
           
           if (Xp1 > 1000) {emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`+\`✅\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${Xp1}\` sur \`1000\`xp requis`});console.log(InfoA.Pseudo,  Xp1)} 
           else {
             emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`+\`❌\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${Xp1}\` sur \`1000\`xp requis`});console.log(InfoA.Pseudo,  Xp1)}
         } 
       }}catch(err) {console.log(err)}
 
       try {
         emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`-Dernier update pour les xp du \`${timestamp}\` effectué à \`${InfoA.Heure}\``})
       }catch(err) {}
 
       try {
         emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`-Dernier update pour les xp du \`${timestampH}\` effectué à \`${InfoB.Heure}\``})
     }catch (err) {}
     interaction.channel.send({embeds: [emebed]})
      

       }
}