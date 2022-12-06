const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();

module.exports = {
    name: "quests",
    category: 'quête',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'quests',
    examples: ['quests'],
    description: 'Voir les quêtes achetable + sondage',
      run: async(client, message, args) => {
        const Questsavailable = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/available`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(`Erreur a la 1ère requête: ${err}`)}); 
        const Clan = await Questsavailable.body
        var imageB1=JSON.stringify(Clan); 
        console.log ("Commande quests fait")

        try {
        for (var i = 0; i < 6; i++) {

        var debut= /"purchasableWithGems":/g
        
        var imageD1 = imageB1.search(debut);
        var purchasableWithGems = imageB1.slice(imageD1+22, imageD1+26);

        if (purchasableWithGems == "true") {var image1 = imageB1.slice(1, imageD1+27); var imageB1= imageB1.slice(imageD1+27)} 
        else {var image1 = imageB1.slice(1, imageD1+28); var imageB1= imageB1.slice(imageD1+28)};
        var text = JSON.parse(image1)

        if (purchasableWithGems == "true" && i == 0) {
        const embed1 = new MessageEmbed()
       .setTitle(`Skin gemme`)
       .setColor('#FF69B4')
       .setDescription("Oui 👍🏻 Non 👎🏻")
       .setImage(text.promoImageUrl)
       .setTimestamp()
    const poll1 = await message.channel.send({ embeds : [embed1], fetchReply: true});
     poll1.react('👍🏻');
     poll1.react('👎🏻');}
            
     if (purchasableWithGems == "true" && i == 1) {
        const embed2 = new MessageEmbed()
          .setTitle("Skin gemme 2")
          .setColor('#FF69B4')
          .setDescription("Oui 👍 Non 👎")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll2 = await message.channel.send({ embeds : [embed2], fetchReply: true});
        poll2.react('👍');
        poll2.react('👎');} else if (i == 1) {var i = i+1}


     if (purchasableWithGems == "fals" && i == 2) {
        const embed3 = new MessageEmbed()
          .setTitle("Skin or 1")
          .setColor('#FFA500')
          .setDescription("Oui 👍🏼 Non 👎🏼")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll3 = await message.channel.send({ embeds : [embed3], fetchReply: true});
        poll3.react('👍🏼');
        poll3.react('👎🏼');}


     if (purchasableWithGems == "fals" && i == 3) {
        const embed4 = new MessageEmbed()
          .setTitle("Skin or 2")
          .setColor('#FFA500')
          .setDescription("Oui 👍🏽 Non 👎🏽")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll4 = await message.channel.send({ embeds : [embed4], fetchReply: true});
        poll4.react('👍🏽');
        poll4.react('👎🏽');}


     if (purchasableWithGems == "fals" && i == 4) {
        const embed5 = new MessageEmbed()
          .setTitle("Skin or 3")
          .setColor('#FFA500')
          .setDescription("Oui 👍🏾 Non 👎🏾")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll5 = await message.channel.send({ embeds : [embed5], fetchReply: true});
        poll5.react('👍🏾');
        poll5.react('👎🏾');}
    }}catch (err) {}
    const embed6 = new MessageEmbed()
          .setTitle("Avez-vous déjà payé les 500 or pour la quête ? (Si quête or)")
          .setColor('WHITE')
          .setDescription("Oui 👍🏿 Non 👎🏿")
          .setTimestamp()
       const poll6 = await message.channel.send({ embeds : [embed6], fetchReply: true});
        poll6.react('👍🏿');
        poll6.react('👎🏿');

        message.channel.send('Coucou <@&806912965496143882> voilà pour vous !')
     
       },

       async runSlash(client, interaction) { interaction.reply({content: `Exécution en cours...`, ephemeral: true})

        const Questsavailable = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/available`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {interaction.channel.send(`Erreur a la 1ère requête: ${err}`)}); 
        const Clan = await Questsavailable.body
        var imageB1=JSON.stringify(Clan); 
        console.log ("Commande quests fait")

        try {
        for (var i = 0; i < 6; i++) {

        var debut= /"purchasableWithGems":/g
        
        var imageD1 = imageB1.search(debut);
        var purchasableWithGems = imageB1.slice(imageD1+22, imageD1+26);

        if (purchasableWithGems == "true") {var image1 = imageB1.slice(1, imageD1+27); var imageB1= imageB1.slice(imageD1+27)} 
        else {var image1 = imageB1.slice(1, imageD1+28); var imageB1= imageB1.slice(imageD1+28)};
        var text = JSON.parse(image1)

        if (purchasableWithGems == "true" && i == 0) {
        const embed1 = new MessageEmbed()
       .setTitle(`Skin gemme`)
       .setColor('#FF69B4')
       .setDescription("Oui 👍🏻 Non 👎🏻")
       .setImage(text.promoImageUrl)
       .setTimestamp()
    const poll1 = await interaction.channel.send({ embeds : [embed1], fetchReply: true});
     poll1.react('👍🏻');
     poll1.react('👎🏻');}
            
     if (purchasableWithGems == "true" && i == 1) {
        const embed2 = new MessageEmbed()
          .setTitle("Skin gemme 2")
          .setColor('#FF69B4')
          .setDescription("Oui 👍 Non 👎")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll2 = await interaction.channel.send({ embeds : [embed2], fetchReply: true});
        poll2.react('👍');
        poll2.react('👎');} else if (i == 1) {var i = i+1}


     if (purchasableWithGems == "fals" && i == 2) {
        const embed3 = new MessageEmbed()
          .setTitle("Skin or 1")
          .setColor('#FFA500')
          .setDescription("Oui 👍🏼 Non 👎🏼")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll3 = await interaction.channel.send({ embeds : [embed3], fetchReply: true});
        poll3.react('👍🏼');
        poll3.react('👎🏼');}


     if (purchasableWithGems == "fals" && i == 3) {
        const embed4 = new MessageEmbed()
          .setTitle("Skin or 2")
          .setColor('#FFA500')
          .setDescription("Oui 👍🏽 Non 👎🏽")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll4 = await interaction.channel.send({ embeds : [embed4], fetchReply: true});
        poll4.react('👍🏽');
        poll4.react('👎🏽');}


     if (purchasableWithGems == "fals" && i == 4) {
        const embed5 = new MessageEmbed()
          .setTitle("Skin or 3")
          .setColor('#FFA500')
          .setDescription("Oui 👍🏾 Non 👎🏾")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll5 = await interaction.channel.send({ embeds : [embed5], fetchReply: true});
        poll5.react('👍🏾');
        poll5.react('👎🏾');}
    }}catch (err) {}
    const embed6 = new MessageEmbed()
          .setTitle("Avez-vous déjà payé les 500 or pour la quête ? (Si quête or)")
          .setColor('WHITE')
          .setDescription("Oui 👍🏿 Non 👎🏿")
          .setTimestamp()
       const poll6 = await interaction.channel.send({ embeds : [embed6], fetchReply: true});
        poll6.react('👍🏿');
        poll6.react('👎🏿');

        interaction.channel.send('Coucou <@&806912965496143882> voilà pour vous !') 
      }
      }
