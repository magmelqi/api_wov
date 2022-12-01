const superagent = require('superagent').agent();
const { MessageEmbed, MessageManager } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const Username = new MessageChannel;

module.exports = {
    name: "qfalse",
    category: 'quête',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'qfalse [Pseudo]',
    examples: ['qfalse Ewwen'],
    description: "Désactivé la partcipation aux quêtes du pseudo",
      run: async(client, message, args) => {
        var nom = message.content.substring(8).trim()
        console.log(nom)
        const Username = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return message.channel.send(`Le pseudo: "${nom}" n'existe pas.\nou ${err}`)}); 
        const User = await Username.body
        const UserId=JSON.stringify(User); 
        var idn = UserId.slice(7, 43); var idn1 = idn.trim();

        const Quests = await superagent.put(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members/${idn1}/participateInQuests`)
        .send({participateInQuests: false})
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

        const PIQB = obj.search(PIQb); const PIQ1 = obj.slice(PIQB+26, PIQB+31)
        console.log (`Participation à la quête: ${PIQ1}`);

        message.channel.send(`Pseudo: ${CN1}`); message.channel.send(`Participation à la quête: ${PIQ1}`)
        const embed = new MessageEmbed()
          .setAuthor({name : `Statut de participation`})
          .setColor('WHITE')
          .addFields({ name: 'Pseudo', value: `${CN1}`, inline: false}, { name: 'Participation à la quête:', value: `${PIQ1}`, inline: false})
          .setThumbnail()
          .setTimestamp();

          message.channel.send({ embeds : [embed]})
 },
 options:[
  {
      name: "pseudo",
      description: "taper le pseudo pour désativer sa participation à la quête",
      type: "STRING",
      required: true,
  }],
    runSlash: async(client, interaction) => {
      const nom = interaction.options.getString('pseudo');
      console.log(nom)
        const Username = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return interaction.reply(`Le pseudo: "${nom}" n'existe pas.\nou ${err}`)}); 
        const User = await Username.body
        const UserId=JSON.stringify(User); 
        var idn = UserId.slice(7, 43); var idn1 = idn.trim(); console.log(idn)

        const Quests = await superagent.put(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/members/${idn1}/participateInQuests`)
        .send({participateInQuests: false})
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return interaction.reply(`${nom} n'est pas présent(e) dans le clan\nou ${err}`)}); 
        const Clan = await Quests.body
        const obj=JSON.stringify(Clan); 
       
        var CNb= /name/g
        var CNf= /","level"/g;

        const CNDB = obj.search(CNb); const CNDF = obj.search(CNf); const CN1 = obj.slice(CNDB+7, CNDF)
        console.log (`Pseudo: ${CN1}`);

        var PIQb= /"participateInClanQuests":/g

        const PIQB = obj.search(PIQb); const PIQ1 = obj.slice(PIQB+26, PIQB+31)
        console.log (`Participation à la quête: ${PIQ1}`);

        const embed = new MessageEmbed()
          .setAuthor({name : `Statut de participation`})
          .setColor('WHITE')
          .addFields({ name: 'Pseudo', value: `${CN1}`, inline: false}, { name: 'Participation à la quête:', value: `${PIQ1}`, inline: false})
          .setThumbnail()
          .setTimestamp();

          interaction.reply({ embeds : [embed]})
}
}