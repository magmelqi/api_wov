const { MessageEmbed } = require("discord.js");
const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();


module.exports = {
    name: "messageReactionAdd",
    once: false,
    async execute(client, messageReaction, user) {
        const message = messageReaction.message;
        const emojiName = messageReaction.emoji.name;
        const member = message.guild.members.cache.get(user.id)
        const name = member.displayName; const nameId = member.id; console.log(name, nameId)
        if(member.user.bot) return;

        if (messageReaction.partial) {
            try {
            await messageReaction.fetch();
        }catch (err) {console.log ('impossible de récupérer les messages')
        return}
    }
    const embedP1 = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${name} => quête 1`)
        .setColor('#21ff81')
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp();

        const embedN1 = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${name} => quête 1`)
        .setColor('#dc143c')
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp();

    const embedP2 = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${name} => quête 2`)
        .setColor('#21ff81')
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp();

        const embedN2 = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${name} => quête 2`)
        .setColor('#dc143c')
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp();

    const embedP3 = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${name} => quête 3`)
        .setColor('#21ff81')
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp();

        const embedN3 = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${name} => quête 3`)
        .setColor('#dc143c')
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp();

    const embedP4 = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${name} => quête 4`)
        .setColor('#21ff81')
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp();

        const embedN4 = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${name} => quête 4`)
        .setColor('#dc143c')
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp();

    const embedP5 = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${name} => quête 5`)
        .setColor('#21ff81')
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp();

        const embedN5 = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${name} => quête 5`)
        .setColor('#dc143c')
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp();

        const embedP6 = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${name} => quête 6`)
        .setColor('#21ff81')
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp();

        const embedN6 = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${name} => quête 6`)
        .setColor('#dc143c')
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp();



        const logChannel = client.channels.cache.get('1044258472121860126');
        const regleChannel = client.channels.cache.get('817787093182054430');
        const evieChannel = client.channels.cache.get('992016663698473050');
        const quete1Channel = client.channels.cache.get('1054396949844992060');
        const quete2Channel = client.channels.cache.get('1054398219561484348');
        const quete3Channel = client.channels.cache.get('1054398333831106591');
        const quete4Channel = client.channels.cache.get('1054398377858715699');
        const quete5Channel = client.channels.cache.get('1054399284721745950');
        const quete6Channel = client.channels.cache.get('1054745511317483611');

        if (emojiName === '👍🏻' && message.channel.id == '724241714373722163') {quete1Channel.send({ embeds: [embedP1]})}
        if (emojiName === '👎🏻' && message.channel.id == '724241714373722163') {quete1Channel.send({ embeds: [embedN1]})}

        if (emojiName === '👍' && message.channel.id == '724241714373722163') {quete2Channel.send({ embeds: [embedP2]})}
        if (emojiName === '👎' && message.channel.id == '724241714373722163') {quete2Channel.send({ embeds: [embedN2]})}

        if (emojiName === '👍🏼' && message.channel.id == '724241714373722163') {quete3Channel.send({ embeds: [embedP3]})}
        if (emojiName === '👎🏼' && message.channel.id == '724241714373722163') {quete3Channel.send({ embeds: [embedN3]})}

        if (emojiName === '👍🏽' && message.channel.id == '724241714373722163') {quete4Channel.send({ embeds: [embedP4]})}
        if (emojiName === '👎🏽' && message.channel.id == '724241714373722163') {quete4Channel.send({ embeds: [embedN4]})}

        if (emojiName === '👍🏾' && message.channel.id == '724241714373722163') {quete5Channel.send({ embeds: [embedP5]})}
        if (emojiName === '👎🏾' && message.channel.id == '724241714373722163') {quete5Channel.send({ embeds: [embedN5]})}

        if (emojiName === '👍🏿' && message.channel.id == '724241714373722163') {quete6Channel.send({ embeds: [embedP6]})}
        if (emojiName === '👎🏿' && message.channel.id == '724241714373722163') {quete6Channel.send({ embeds: [embedN6]})}

        //1054738041383694397 laîques
        //776035119151841283 rôle
        //724298399376998440 règle
        if (emojiName === '✅' || emojiName === '💘' || emojiName === '💗' || emojiName === '💖') {
            if (nameId == "567787590997114885" && message.channel.id == '817761804041322536' || nameId == "567787590997114885" && message.channel.id == '994618797363306496' || nameId == "567787590997114885" && message.channel.id == '1005050826777182269') {evieChannel.send(`${name} vient de claim un perso 👀`)}}

        if (emojiName === '✅') {
            if (message.channel.id == '724216612206542889'){
                if (message.id == '1054738041383694397') {regleChannel.send(`${name} a accepté les règles concernant la laïcité.`)}
                else if (message.id == '776035119151841283') {regleChannel.send(`${name} a accepté les règles des rôles.`)}
                else if (message.id == '724298399376998440') {regleChannel.send(`${name} a accepté les règles d'usage`)}}};
         
      
         if (emojiName === '☑️' && message.channel.id == '817290280242774036') { 
            const voteLogChannel = client.channels.cache.get('1058381353336438865');
           const Mdebut = await voteLogChannel.send(`Recherche d'un profil au nom de "${name}":`)
            await new Promise(resolve => setTimeout(resolve, 1000))
         console.log(name); const Mname = await voteLogChannel.send(`- - - - - -`)
                                   
         var Username = await superagent.get(`https://api.wolvesville.com/players/search?username=${name}`)
         .set( 'Authorization', process.env.WOV_TOKEN)
         .set('Content-Type', 'application/json')
         .set('Accept', 'application/json')
         .catch((err) => {
             if (err == "Error: Too Many Requests") {Mname.edit({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
             else if (err == "Error: Not Found") {return Mname.edit({content:`Pseudo inexistant, veuillez avoir votre pseudo wov identique à celui de discord`})}
             else {return Mname.edit({content:`${err}, \nveuillez avertir: <@385172057433964556>`})}});
         var objErr= JSON.stringify(Username);
     
         if (objErr !== undefined) {var User = Username.body; var UserId=JSON.stringify(User);}
        var i = 2
        while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
         var Username = await superagent.get(`https://api.wolvesville.com/players/search?username=${name}`)
         .set( 'Authorization', process.env.WOV_TOKEN)
         .set('Content-Type', 'application/json')
         .set('Accept', 'application/json')
         .catch((err) => {
             if (err == "Error: Too Many Requests") {Mname.edit({content:`Erreur, tentatives: \`${i}\``})}
             else if (err == "Error: Not Found") {return Mname.edit({content:`Pseudo inexistant, veuillez avoir votre pseudo wov identique à celui de discord`})}
             else {return Mname.edit({content:`${err}, \nveuillez avertir: <@385172057433964556>`})}});
        var objErr= JSON.stringify(Username);
         try {var User = await Username.body; var UserId=JSON.stringify(User);;}catch(err) {}; var i = i+1} 
         Mname.edit({content:`Profil de ${name} trouvé avec succés`})
         Mdebut.edit(`Activation de votre partipation:`)
         await new Promise(resolve => setTimeout(resolve, 1000))
         Mname.edit(`- - - - - -`)
    
         var idn = UserId.slice(7, 43); var idn1 = idn.trim(); console.log(idn)
         
         
         var Quests = await superagent.put(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members/${idn1}/participateInQuests`)
         .send({participateInQuests: true})
         .set( 'Authorization', process.env.WOV_TOKEN)
         .set('Content-Type', 'application/json')
         .set('Accept', 'application/json')
         .catch((err) => {
           if (err == "Error: Too Many Requests") {Mname.edit({content:"Erreur a la 2ème requêtes\n\`2ème tentatives en cours...\`"})}
           else if (err == "Error: Not Found") {return Mname.edit({content:`Pseudo: ${name} n'est pas présent dans le clan.`})}
           else {return Mname.edit({content:`${err}, \nveuillez avertir: <@385172057433964556>`})}});
           var objErr= JSON.stringify(Quests);
     
           if (objErr !== undefined) {var Clan =  Quests.body; var obj=JSON.stringify(Clan);}
          var i = 2
          while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
             var Quests = await superagent.put(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members/${idn1}/participateInQuests`)
           .send({participateInQuests: true})
           .set( 'Authorization', process.env.WOV_TOKEN)
           .set('Content-Type', 'application/json')
           .set('Accept', 'application/json')
           .catch((err) => {
               if (err == "Error: Too Many Requests") {Mname.edit({content:`Erreur, tentatives: \`${i}\``})}
               else if (err == "Error: Not Found") {return Mname.edit({content:`Pseudo: ${name} n'est pas présent dans le clan.`})}
               else {return Mname.edit({content:`${err}, \nveuillez avertir: <@385172057433964556>`})}});
          var objErr= JSON.stringify(Quests);
           try {var Clan =  Quests.body; var obj=JSON.stringify(Clan);}catch(err) {}; var i = i+1}
   
            Mdebut.delete()
         var CNb= /name/g
         var CNf= /","level"/g;
 
         const CNDB = obj.search(CNb); const CNDF = obj.search(CNf); const CN1 = obj.slice(CNDB+7, CNDF)
         console.log (`Pseudo: ${CN1}`);
 
         var PIQb= /"participateInClanQuests":/g
 
         const PIQB = obj.search(PIQb); const PIQ1 = obj.slice(PIQB+26, PIQB+30)
         console.log (`Participation à la quête: ${PIQ1}`);
 
         const embed = new MessageEmbed()
               .setAuthor({name : `Statut de participation`})
               .setColor('WHITE')
               .addFields({ name: 'Pseudo', value: `${CN1}`, inline: false}, { name: 'Participation à la quête:', value: `${PIQ1}`, inline: false})
               .setThumbnail(User.equippedAvatar.url)
               .setTimestamp()
               .setFooter({text: 'Quête'});
               Mname.edit({content: ' ', embeds : [embed]});member.send({ embeds: [embed]})

     }
 
     
   }}