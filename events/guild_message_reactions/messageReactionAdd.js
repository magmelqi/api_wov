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
        const name = member.displayName
        if(member.user.bot) return;

        if (messageReaction.partial) {
            try {
            await messageReaction.fetch();
        }catch (err) {console.log ('impossible de récupérer les messages')
        return}
    }
    const embedP = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête gemme`)
        .setColor('#21ff81')
        .setTimestamp();

        const embedN = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête gemme`)
        .setColor('#dc143c')
        .setTimestamp();

    const embedPOr1 = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête Or 1`)
        .setColor('#21ff81')
        .setTimestamp();

        const embedNOr1 = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête Or 1`)
        .setColor('#dc143c')
        .setTimestamp();

    const embedPOr2 = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête Or 2`)
        .setColor('#21ff81')
        .setTimestamp();

        const embedNOr2 = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête Or 2`)
        .setColor('#dc143c')
        .setTimestamp();

    const embedPOr3 = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête Or 3`)
        .setColor('#21ff81')
        .setTimestamp();

        const embedNOr3 = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête Or 3`)
        .setColor('#dc143c')
        .setTimestamp();


        const logChannel = client.channels.cache.get('1044258472121860126');
        const regleChannel = client.channels.cache.get('817787093182054430');
        const evieChannel = client.channels.cache.get('992016663698473050');

        if (emojiName === '') {logChannel.send({ embeds: [embedP]}), member.send('Vous voulez participer  la quête gemme !')}
        if (emojiName === '') {logChannel.send({ embeds: [embedN]}), member.send('Vous ne voulez pas participer  la quête gemme !')}

        if (emojiName === '') {logChannel.send({ embeds: [embedPOr1]}), member.send('Vous voulez participer  la quête OR 1 !')}
        if (emojiName === '') {logChannel.send({ embeds: [embedNOr1]}), member.send('Vous ne voulez pas participer  la quête OR 1 !')}

        if (emojiName === '') {logChannel.send({ embeds: [embedPOr2]}), member.send('Vous voulez participer  la quête OR 2 !')}
        if (emojiName === '') {logChannel.send({ embeds: [embedNOr2]}), member.send('Vous ne voulez pas participer  la quête OR 2 !')}

        if (emojiName === '') {logChannel.send({ embeds: [embedPOr3]}), member.send('Vous voulez participer  la quête OR 3 !')}
        if (emojiName === '') {logChannel.send({ embeds: [embedNOr3]}), member.send('Vous ne voulez pas participer  la quête OR 3 !')}
        console.log(message.channel.id)
        if (emojiName === '✅') {
            if (name == "🍪Evie_" && message.channel.id == '817761804041322536' || message.channel.id == '994618797363306496' || message.channel.id == '1005050826777182269') {evieChannel.send(`${name} vient de claim un perso 👀`)} 
            if (message.channel.id == '724216612206542889'){regleChannel.send(`${name} a accepté les règles.`)}};
            if (emojiName === '👀') {console.log('if');if (message.channel.id === '1044258472121860126') {logChannel.send(`${name} a accepté les règles.`)}}
         
      
         if (emojiName === '☑️' && message.channel.id == '817290280242774036') {
                                console.log(name)
        const Username = await superagent.get(`https://api.wolvesville.com/players/search?username=${name}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
            if (err == "Error: Too Many Requests") {return message.channel.send("Veuillez réagir une nouvelle fois")}
            else if (err == "Error: Not Found") {return message.channel.send(`Pseudo inexistant`)}
            else {return message.channel.send(`Erreur: ${err}`)}}); 
        const User = await Username.body
        const UserId=JSON.stringify(User); 
        var idn = UserId.slice(7, 43); var idn1 = idn.trim(); console.log(idn)

        const Quests = await superagent.put(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members/${idn1}/participateInQuests`)
        .send({participateInQuests: true})
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {return message.channel.send("Veuillez réagir une nouvelle fois")}
          else {return message.channel.send(`Erreur: ${err}`)}}); 
        const Clan = await Quests.body
        const obj=JSON.stringify(Clan); 
       
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
              .setThumbnail()
              .setTimestamp();
    
              message.channel.send({ embeds : [embed]})
    }

    
  }}