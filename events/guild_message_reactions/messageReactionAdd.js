const { MessageEmbed } = require("discord.js");
const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();

const prefix = '?';
const ownerId = '385172057433964556';

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

        if (emojiName === '') {logChannel.send({ embeds: [embedP]}), member.send('Vous voulez participer  la quête gemme !')}
        if (emojiName === '') {logChannel.send({ embeds: [embedN]}), member.send('Vous ne voulez pas participer  la quête gemme !')}

        if (emojiName === '') {logChannel.send({ embeds: [embedPOr1]}), member.send('Vous voulez participer  la quête OR 1 !')}
        if (emojiName === '') {logChannel.send({ embeds: [embedNOr1]}), member.send('Vous ne voulez pas participer  la quête OR 1 !')}

        if (emojiName === '') {logChannel.send({ embeds: [embedPOr2]}), member.send('Vous voulez participer  la quête OR 2 !')}
        if (emojiName === '') {logChannel.send({ embeds: [embedNOr2]}), member.send('Vous ne voulez pas participer  la quête OR 2 !')}

        if (emojiName === '') {logChannel.send({ embeds: [embedPOr3]}), member.send('Vous voulez participer  la quête OR 3 !')}
        if (emojiName === '') {logChannel.send({ embeds: [embedNOr3]}), member.send('Vous ne voulez pas participer  la quête OR 3 !')}

        if (emojiName === '✅') {logChannel.send(`Veut participer: ${name}`)
        console.log(name)
        const Username = await superagent.get(`https://api.wolvesville.com/players/search?username=${name}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return message.channel.send(`Le pseudo: "${nom}" n'existe pas.\nou ${err}`)}); 
        const User = await Username.body
        const UserId=JSON.stringify(User); 
        var idn = UserId.slice(7, 43); var idn1 = idn.trim(); console.log(idn)

        const Quests = await superagent.put(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members/${idn1}/participateInQuests`)
        .send({participateInQuests: true})
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return message.channel.send(`${nom} n'est pas présent(e) dans le clan\nou ${err}`)}); 
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