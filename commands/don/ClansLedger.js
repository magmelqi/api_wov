const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const axios = require('axios')

module.exports = {
    name: "donlist",
    category: 'don',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'donlist',
    examples: ['donlist'],
    description: 'La liste des donations récente du clan',
      run: async(client, message, args) => {
        const obj = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/ledger`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {console.log(err)});
        console.log ('Commande dons fait');
        const Clan = await obj.body
        var dons=obj.text 

       for(var Type1 ='DONATE';Type1 == 'DONATE';){
            var Typeb= /","type":"/g
            var Typef= /","creationTime"/g
            var TypeDB = dons.search(Typeb); var TypeDF = dons.search(Typef); var Type1 = dons.slice(TypeDB+10, TypeDF);

        if(Type1 == 'CLAN_QUEST'){
        var ORb= /"gold":/g
            var ORf= /,"gems":/g
            var ORDB = dons.search(ORb); var ORDF = dons.search(ORf); var OR1 = dons.slice(ORDB+7, ORDF);
          
            var Gemmeb= /,"gems":/g
            var Gemmef= /,"playerUsername":"/g; 
            var GemmeDB = dons.search(Gemmeb); var GemmeDF = dons.search(Gemmef); var Gemme1 = dons.slice(GemmeDB+8, GemmeDF); 
          
            var Pseudob= /"playerUsername":"/g
            var Pseudof= /","clanQuestId":"/g; 
            var PseudoDB = dons.search(Pseudob); var PseudoDF = dons.search(Pseudof); var Pseudo1 = dons.slice(PseudoDB+18, PseudoDF);
          
            var Créeb= /","creationTime"/g
            var Créef= /"},{"id":"/g
            var CréeDB = dons.search(Créeb); var CréeDF = dons.search(Créef); var Crée1 = dons.slice(CréeDB+18, CréeDF-14); var Crée2= dons.slice(CréeDF-13, CréeDF-8); var dons= dons.slice(CréeDF+9)

            if (OR1 >0 || OR1 <0) {var color = '#FFA500'}; if (Gemme1 >0 || Gemme1 <0) {var color = '#FF69B4'};

            const embed2 = new MessageEmbed()
          .setAuthor({name : `Dons WOV`})
          .setColor(color)
          .setThumbnail()
          .setTimestamp()
          .setDescription(`${Pseudo1}`)
          .addFields({name: 'Type d\'action:', value: `${Type1}`},{name: 'Or:', value: `${OR1}`},{name:'gemme:', value: `${Gemme1}`},{name: 'fais le:', value:`${Crée1} à ${Crée2}`}); console.log(Type1)
        
            message.channel.send({ embeds: [embed2]})}
 
            else{
              var ORb= /"gold":/g
            var ORf= /,"gems":/g
            var ORDB = dons.search(ORb); var ORDF = dons.search(ORf); var OR1 = dons.slice(ORDB+7, ORDF);
          
            var Gemmeb= /,"gems":/g
            var Gemmef= /,"playerId"/g; 
            var GemmeDB = dons.search(Gemmeb); var GemmeDF = dons.search(Gemmef); var Gemme1 = dons.slice(GemmeDB+8, GemmeDF); 
          
            var Pseudob= /"playerUsername":"/g
            var Pseudof= /","type":"/g; 
            var PseudoDB = dons.search(Pseudob); var PseudoDF = dons.search(Pseudof); var Pseudo1 = dons.slice(PseudoDB+18, PseudoDF);
          
            var Créeb= /","creationTime"/g
            var Créef= /"},{"id":"/g
            var CréeDB = dons.search(Créeb); var CréeDF = dons.search(Créef); var Crée1 = dons.slice(CréeDB+18, CréeDF-14); var Crée2= dons.slice(CréeDF-13, CréeDF-8); var dons= dons.slice(CréeDF+9)

            if (OR1 >0 || OR1 <0) {var color = '#FFA500'}; if (Gemme1 >0 || Gemme1 <0) {var color = '#FF69B4'};

            const embed2 = new MessageEmbed()
          .setAuthor({name : `Dons WOV`})
          .setColor(color)
          .setThumbnail()
          .setTimestamp()
          .setDescription(`${Pseudo1}`)
          .addFields({name: 'Type d\'action:', value: `${Type1}`},{name: 'Or:', value: `${OR1}`},{name:'gemme:', value: `${Gemme1}`},{name: 'fais le:', value:`${Crée1} à ${Crée2}`}); console.log(Type1)
        
            message.channel.send({ embeds: [embed2]})}}
          },
      runSlash: async (client, interaction) => {
        const Messageclan = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/ledger`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return interaction.reply(err)}); 
        console.log ('Commande dons fait');
        const Clan = await Messageclan.body
        const obj=JSON.stringify(Clan); 
      }
    }