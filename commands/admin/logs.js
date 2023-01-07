const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const {writeFileSync, readFileSync} = require ("fs");

module.exports = {
    name: "log",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'log', 
    examples: ['log'],
    description: 'Envoie les logs du clan',
    async run (client, message, args) {
        if (!args[0] || !args[0].match(/^(Wolves|test)$/)) return message.reply('merci d\'entrer un évenement valide (`\Wolves`/`test\`)');

      if (args[0] == "Wolves") {
      var logChannel = client.channels.cache.get('');}
      else if (args[0] == "test") {
        var logChannel = client.channels.cache.get('1061297491712163920')
      };  

        var queteLogChannel = client.channels.cache.get('1058381353336438865')

      console.log('on');
    var Merr = await message.channel.send("On"); 
    test54 =async() => {

      var logs = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/logs`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
      else {return Merr.edit({content:`Erreur: ${err}`})}}); 
      var objErr= JSON.stringify(logs);

      if (objErr !== undefined) {var obj= logs.text; var objbody2 = logs.body}
      var i = 2
      while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
        var logs = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/logs`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => { if (err == "Error: Too Many Requests") {Merr.edit({content:`Erreur, tentatives: \`${i}\``})}
      else {return Merr.edit({content:`Erreur: ${err}`})}});
      var objErr= JSON.stringify(logs); 
      var obj= logs.text; var objbody2 = logs.body} 
      
      var InfoLastest = JSON.parse(readFileSync(`././Information/Date/Log.json`, 'utf-8'))
      var AncienMessage = InfoLastest.date
        var n = 0; 

        while (logs.body[n].creationTime !== AncienMessage && n !== 199){var n = n+1;};
        var n =n-1

      while( n !== -1 ){ 
        var objbody = logs.body[n];var n = n-1

        var  HlastOnline = objbody.creationTime.slice(11, 13)-1+2

            var annéeLO =  objbody.creationTime.slice(0, 4); var moisLO = objbody.creationTime.slice(5, 7); var jourLO= objbody.creationTime.slice(8, 10);

            if (HlastOnline == 24) {var HlastOnline = "00"; var jourLO = jourLO-1+2
            if (moisLO == 1 && jourLO == 32) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 2 && jourLO == 29) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 3 && jourLO == 32) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 4 && jourLO == 31) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 5 && jourLO == 32) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 6 && jourLO == 31) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 7 && jourLO == 32) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 8 && jourLO == 32) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 9 && jourLO == 31) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 10 && jourLO == 32) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 11 && jourLO == 31) {moisLO = moisLO-1+2; jourLO = "01"};
            if (moisLO == 12 && jourLO == 32) {moisLO = "01"; jourLO = "01"; var annéeLO = annéeLO-1+2};
           };

            var DlastOnline = `${jourLO}/${moisLO}/${annéeLO}`
           const embed = new MessageEmbed();

           if (objbody.action == "PLAYER_JOINED") {
            embed.setTitle('Un nouveau membre à rejoins le clan')
            embed.setColor('GREEN')
            embed.addFields({name:"Pseudo", value: `-${objbody.playerUsername}`},
            {name:"Rejoins le",value:`-${DlastOnline} à ${HlastOnline}h${objbody.creationTime.slice(14,16)}`})
            embed.setTimestamp();

            logChannel.send({embeds: [embed]})
           }
           else if (objbody.action == "PLAYER_LEFT") {
            embed.setTitle('Un ancien membre à quitté le clan')
            embed.setColor('RED')
            embed.addFields({name:"Pseudo", value: `-${objbody.playerUsername}`},
            {name:"Quitté le",value:`${DlastOnline} à ${HlastOnline}h${objbody.creationTime.slice(14,16)}`})
            embed.setTimestamp();

            logChannel.send({embeds: [embed]})
           }
           else if (objbody.action == "PLAYER_KICKED") {
            embed.setTitle(`Un membre à été exclus par ${objbody.playerUsername}`)
            embed.setColor('DARK_GREY')
            embed.addFields({name:"Pseudo", value: `-${objbody.targetPlayerUsername}`},
            {name:"Exclus le", value:`${DlastOnline} à ${HlastOnline}h${objbody.creationTime.slice(14,16)}`},
            {name:"Raison:", value:`-${objbody.comment}`})
            embed.setTimestamp();

            logChannel.send({embeds: [embed]})
           }
           else if (objbody.action == "PLAYER_QUEST_PARTICIPATION_ENABLED") {
            try {var BOT = objbody.playerBotOwnerUsername}catch(err) {}
            if (BOT == undefined) {var Player = objbody.playerUsername}
            
            embed.setTitle(`Participation activée: ${Player ?? ""}`)
            embed.setColor('GREEN')
            embed.addFields({name:"Pseudo", value: `-${objbody.targetPlayerUsername}`},
            {name:"Fais le",value:`-${DlastOnline} à ${HlastOnline}h${objbody.creationTime.slice(14,16)}`})
            embed.setTimestamp();

            queteLogChannel.send({embeds: [embed]})
           }
           else if (objbody.action == "PLAYER_QUEST_PARTICIPATION_DISABLED") {
            try {var BOT = objbody.playerBotOwnerUsername}catch(err) {}
            if (BOT == undefined) {var Player = objbody.playerUsername}

            embed.setTitle(`Participation désactivée: ${Player ?? ""}`)
            embed.setColor('RED')
            embed.addFields({name:"Pseudo", value: `-${objbody.targetPlayerUsername}`},
            {name:"Fais le",value:`-${DlastOnline} à ${HlastOnline}h${objbody.creationTime.slice(14,16)}`})
            embed.setTimestamp();

            queteLogChannel.send({embeds: [embed]})
           }
           else if (objbody.action == "BLACKLIST_ADDED") {
            embed.setTitle(`Un membre à été ajouté sur la liste noir par ${objbody.playerUsername}`)
            embed.setColor('DARK_RED')
            embed.addFields({name:"Pseudo", value: `-${objbody.targetPlayerUsername}`},
            {name:"Fais le",value:`${DlastOnline} à ${HlastOnline}h${objbody.creationTime.slice(14,16)}`})
            embed.setTimestamp();

            logChannel.send({embeds: [embed]})
           }
           else {console.log(objbody.action); logChannel.send(`Log: nouvelle action pas pris en charge: ${objbody.action}`)}
      }

        const info = {
          date: logs.body[0].creationTime
        }
        const objectToJson = JSON.stringify(info)
        writeFileSync(`././Information/Date/Log.json`, objectToJson)
        }
        
        test54()
        setInterval(() =>{test54()}, 60000)
      },   
}