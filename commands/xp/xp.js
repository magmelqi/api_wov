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
    
            if (XpA < 2000) { emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`+\`❌\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${XpA}\` sur \`2000\`xp requis`});console.log(InfoA.Pseudo, `${XpA} = ${Xp1} - ${Xp2}`)} else {console.log(InfoA.Pseudo, `${XpA} = ${Xp1} - ${Xp2}`)};



          if (joinTf==timestampB ) {

          try {
          var InfoC = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampA}/${xpPseudoO}.json`, 'utf-8'))} catch (err) {message.channel.send(`Erreur ${InfoA.Pseudo} n'a pas d'xp enregistré pour avant-hier: ${timestampA}`); var InfoC = 0}
          
          if (Xp1 > 1000) {emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`+\`✅\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${Xp1}\` sur \`1000\`xp requis`});console.log(InfoC.Pseudo,  Xp1)} 
          else {
            emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`+\`❌\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${Xp1}\` sur \`1000\`xp requis`});console.log(InfoC.Pseudo,  Xp1)}
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
     
             if (XpA < 2000) { emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`+\`❌\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${XpA}\` sur \`2000\`xp requis`});console.log(InfoA.Pseudo, `${XpA} = ${Xp1} - ${Xp2}`)} else {console.log(InfoA.Pseudo, `${XpA} = ${Xp1} - ${Xp2}`)};
 
 
 
           if (joinTf==timestampB ) {
 
           try {
           var InfoC = JSON.parse(readFileSync(`././Information/xp/Member-Id/${timestampA}/${xpPseudoO}.json`, 'utf-8'))} catch (err) {interaction.editReply({content:`Erreur ${InfoA.Pseudo} n'a pas d'xp enregistré pour avant-hier: ${timestampA}`, ephemeral:true}); var InfoC = 0}
           
           if (Xp1 > 1000) {emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`+\`✅\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${Xp1}\` sur \`1000\`xp requis`});console.log(InfoC.Pseudo,  Xp1)} 
           else {
             emebed.addFields({name: '- - - - - - - - - - - - - - - - - - - - - - - - - -',value:`+\`❌\` \`${InfoA.Pseudo}\` a rejoins le \`${joinTf}\`, \nxp: \`${Xp1}\` sur \`1000\`xp requis`});console.log(InfoC.Pseudo,  Xp1)}
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