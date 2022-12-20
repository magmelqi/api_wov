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
         var Mquests = await message.channel.send(`Affichage des quêtes...`)
        var Questsavailable = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/available`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
         if (err == "Error: Too Many Requests") {Mquests.edit({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
         else {return Mquests.edit({content:`Erreur: ${err}`})}});
        var objErr= JSON.stringify(Questsavailable);
        
        if (objErr !== undefined) {var Clan = Questsavailable.body; var imageB1=JSON.stringify(Clan)}
        var i = 2
        while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
          var Questsavailable = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/available`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) =>  {
          if (err == "Error: Too Many Requests") {Mquests.edit({content:`Erreur, tentatives: \`${i}\``})}
        else {return Mquests.edit({content:`Erreur: ${err}`})}});
        var objErr= JSON.stringify(Questsavailable);
         try {var Clan = await Questsavailable.body; var imageB1=JSON.stringify(Clan);}catch(err) {}; var i = i+1} 
        
         if (Clan == undefined) {return}
        if (Clan !== undefined) {Mquests.delete()}
        console.log ("Commande quests fait")

        try {var orVar = 1; var gemmeVar = 1
        for (var i = 0; i < 6; i++) {

        var debut= /"purchasableWithGems":/g
        
        var imageD1 = imageB1.search(debut);
        var purchasableWithGems = imageB1.slice(imageD1+22, imageD1+26);

        if (purchasableWithGems == "true") {var image1 = imageB1.slice(1, imageD1+27); var imageB1= imageB1.slice(imageD1+27)} 
        else {var image1 = imageB1.slice(1, imageD1+28); var imageB1= imageB1.slice(imageD1+28)};
        var text = JSON.parse(image1);

        if (purchasableWithGems == "fals" && i == 0 &&text.promoImageUrl !== undefined) { 
        const embed1 = new MessageEmbed()
       .setTitle(`Skin or ${orVar}`)
       .setColor('#FFA500')
       .setDescription("Oui 👍🏻 Non 👎🏻")
       .setImage(text.promoImageUrl)
       .setTimestamp()
    const poll1 = await message.channel.send({ embeds : [embed1], fetchReply: true});
     poll1.react('👍🏻');
     poll1.react('👎🏻'); var orVar = orVar+1}

     if (purchasableWithGems == "true" && i == 0 &&text.promoImageUrl !== undefined) { 
      const embed1 = new MessageEmbed()
     .setTitle(`Skin gemme ${gemmeVar}`)
     .setColor('#FF69B4')
     .setDescription("Oui 👍🏻 Non 👎🏻")
     .setImage(text.promoImageUrl)
     .setTimestamp()
  const poll1 = await message.channel.send({ embeds : [embed1], fetchReply: true});
   poll1.react('👍🏻');
   poll1.react('👎🏻'); var gemmeVar = gemmeVar+1}
            
     if (purchasableWithGems == "true" && i == 1 &&text.promoImageUrl !== undefined) {
        const embed2 = new MessageEmbed()
          .setTitle(`Skin gemme ${gemmeVar}`)
          .setColor('#FF69B4')
          .setDescription("Oui 👍 Non 👎")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll2 = await message.channel.send({ embeds : [embed2], fetchReply: true});
        poll2.react('👍');
        poll2.react('👎');var gemmeVar = gemmeVar+1}

        if (purchasableWithGems == "fals" && i == 1 &&text.promoImageUrl !== undefined) {
         const embed2 = new MessageEmbed()
           .setTitle(`Skin or ${orVar}`)
           .setColor('#FFA500')
           .setDescription("Oui 👍 Non 👎")
           .setImage(text.promoImageUrl)
           .setTimestamp()
        const poll2 = await message.channel.send({ embeds : [embed2], fetchReply: true});
         poll2.react('👍');
         poll2.react('👎');var orVar = orVar+1}


     if (purchasableWithGems == "fals" && i == 2 &&text.promoImageUrl !== undefined) {
        const embed3 = new MessageEmbed()
          .setTitle(`Skin or ${orVar}`)
          .setColor('#FFA500')
          .setDescription("Oui 👍🏼 Non 👎🏼")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll3 = await message.channel.send({ embeds : [embed3], fetchReply: true});
        poll3.react('👍🏼');
        poll3.react('👎🏼');var orVar = orVar+1}

   if (purchasableWithGems == "true" && i == 2 &&text.promoImageUrl !== undefined) {
        const embed3 = new MessageEmbed()
          .setTitle(`Skin gemme ${gemmeVar}`)
          .setColor('#FF69B4')
          .setDescription("Oui 👍🏼 Non 👎🏼")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll3 = await message.channel.send({ embeds : [embed3], fetchReply: true});
        poll3.react('👍🏼');
        poll3.react('👎🏼');var gemmeVar = gemmeVar+1}


     if (purchasableWithGems == "fals" && i == 3 &&text.promoImageUrl !== undefined) {
        const embed4 = new MessageEmbed()
          .setTitle(`Skin or ${orVar}`)
          .setColor('#FFA500')
          .setDescription("Oui 👍🏽 Non 👎🏽")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll4 = await message.channel.send({ embeds : [embed4], fetchReply: true});
        poll4.react('👍🏽');
        poll4.react('👎🏽');var orVar = orVar+1}


     if (purchasableWithGems == "fals" && i == 4 &&text.promoImageUrl !== undefined) {
        const embed5 = new MessageEmbed()
          .setTitle(`Skin or ${orVar}`)
          .setColor('#FFA500')
          .setDescription("Oui 👍🏾 Non 👎🏾")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll5 = await message.channel.send({ embeds : [embed5], fetchReply: true});
        poll5.react('👍🏾');
        poll5.react('👎🏾');var orVar = orVar+1}

        if (purchasableWithGems == "fals" && i == 5 &&text.promoImageUrl !== undefined) { 
         const embed6 = new MessageEmbed()
        .setTitle(`Skin or ${orVar}`)
        .setColor('#FFA500')
        .setDescription("Oui 👍🏿 Non 👎🏿")
        .setImage(text.promoImageUrl)
        .setTimestamp()
       const poll6 = await message.channel.send({ embeds : [embed6], fetchReply: true});
          poll6.react('👍🏿');
          poll6.react('👎🏿'); var orVar = orVar+1}
       }}catch (err) {}

    const embed7 = new MessageEmbed()
        .setTitle("Avez-vous déjà payé les 500 or pour la quête ? (Si quête or)")
        .setColor('WHITE')
        .setDescription("Oui ✅ Non ❌")
        .setTimestamp()
     const poll7 = await message.channel.send({ embeds : [embed7], fetchReply: true});
      poll7.react('✅');
      poll7.react('❌');

        message.channel.send('Coucou <@&806912965496143882> voilà pour vous !') 
     
       },

       async runSlash(client, interaction) {
         interaction.reply({content: `Exécution en cours...`, ephemeral: true})
        var Questsavailable = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/available`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
         if (err == "Error: Too Many Requests") {interaction.editReply({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
         else {return interaction.editReply({content:`Erreur: ${err}`})}});
        var objErr= JSON.stringify(Questsavailable);
        
        var i = 2
        while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
          var Questsavailable = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/available`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) =>  {
          if (err == "Error: Too Many Requests") {interaction.editReply({content:`Erreur, tentatives: \`${i}\``})}
        else {return interaction.editReply({content:`Erreur: ${err}`})}});
        var objErr= JSON.stringify(Questsavailable);
         try {var Clan = await Questsavailable.body; var imageB1=JSON.stringify(Clan);}catch(err) {}; var i = i+1}
        console.log ("Commande quests fait")

        if (Clan == undefined) {return}
        if (Clan !== undefined) {interaction.editReply({content:`Requête réussie`, ephemeral:true})}
        try {var orVar = 1; var gemmeVar = 1
         for (var i = 0; i < 6; i++) {
 
         var debut= /"purchasableWithGems":/g
         
         var imageD1 = imageB1.search(debut);
         var purchasableWithGems = imageB1.slice(imageD1+22, imageD1+26);
 
         if (purchasableWithGems == "true") {var image1 = imageB1.slice(1, imageD1+27); var imageB1= imageB1.slice(imageD1+27)} 
         else {var image1 = imageB1.slice(1, imageD1+28); var imageB1= imageB1.slice(imageD1+28)};
         var text = JSON.parse(image1);
 
         if (purchasableWithGems == "fals" && i == 0 &&text.promoImageUrl !== undefined) { 
         const embed1 = new MessageEmbed()
        .setTitle(`Skin Or ${orVar}`)
        .setColor('#FFA500')
        .setDescription("Oui 👍🏻 Non 👎🏻")
        .setImage(text.promoImageUrl)
        .setTimestamp()
     const poll1 = await interaction.channel.send({ embeds : [embed1], fetchReply: true});
      poll1.react('👍🏻');
      poll1.react('👎🏻'); var orVar = orVar+1}
 
      if (purchasableWithGems == "true" && i == 0 &&text.promoImageUrl !== undefined) { 
       const embed1 = new MessageEmbed()
      .setTitle(`Skin gemme ${gemmeVar}`)
      .setColor('#FF69B4')
      .setDescription("Oui 👍🏻 Non 👎🏻")
      .setImage(text.promoImageUrl)
      .setTimestamp()
   const poll1 = await interaction.channel.send({ embeds : [embed1], fetchReply: true});
    poll1.react('👍🏻');
    poll1.react('👎🏻'); var gemmeVar = gemmeVar+1}
             
      if (purchasableWithGems == "true" && i == 1 &&text.promoImageUrl !== undefined) {
         const embed2 = new MessageEmbed()
           .setTitle(`Skin gemme ${gemmeVar}`)
           .setColor('#FF69B4')
           .setDescription("Oui 👍 Non 👎")
           .setImage(text.promoImageUrl)
           .setTimestamp()
        const poll2 = await interaction.channel.send({ embeds : [embed2], fetchReply: true});
         poll2.react('👍');
         poll2.react('👎');var gemmeVar = gemmeVar+1}

         if (purchasableWithGems == "fals" && i == 1 &&text.promoImageUrl !== undefined) {
            const embed2 = new MessageEmbed()
              .setTitle(`Skin or ${orVar}`)
              .setColor('#FFA500')
              .setDescription("Oui 👍 Non 👎")
              .setImage(text.promoImageUrl)
              .setTimestamp()
           const poll2 = await interaction.channel.send({ embeds : [embed2], fetchReply: true});
            poll2.react('👍');
            poll2.react('👎');var orVar = orVar+1}
 
 
      if (purchasableWithGems == "fals" && i == 2 &&text.promoImageUrl !== undefined) {
         const embed3 = new MessageEmbed()
           .setTitle(`Skin or ${orVar}`)
           .setColor('#FFA500')
           .setDescription("Oui 👍🏼 Non 👎🏼")
           .setImage(text.promoImageUrl)
           .setTimestamp()
        const poll3 = await interaction.channel.send({ embeds : [embed3], fetchReply: true});
         poll3.react('👍🏼');
         poll3.react('👎🏼');var orVar = orVar+1}

      if (purchasableWithGems == "true" && i == 2 &&text.promoImageUrl !== undefined) {
        const embed3 = new MessageEmbed()
          .setTitle(`Skin gemme ${gemmeVar}`)
          .setColor('#FF69B4')
          .setDescription("Oui 👍🏼 Non 👎🏼")
          .setImage(text.promoImageUrl)
          .setTimestamp()
       const poll3 = await interaction.channel.send({ embeds : [embed3], fetchReply: true});
        poll3.react('👍🏼');
        poll3.react('👎🏼');var gemmeVar = gemmeVar+1}
 
 
      if (purchasableWithGems == "fals" && i == 3 &&text.promoImageUrl !== undefined) {
         const embed4 = new MessageEmbed()
           .setTitle(`Skin or ${orVar}`)
           .setColor('#FFA500')
           .setDescription("Oui 👍🏽 Non 👎🏽")
           .setImage(text.promoImageUrl)
           .setTimestamp()
        const poll4 = await interaction.channel.send({ embeds : [embed4], fetchReply: true});
         poll4.react('👍🏽');
         poll4.react('👎🏽');var orVar = orVar+1}
 
 
      if (purchasableWithGems == "fals" && i == 4 &&text.promoImageUrl !== undefined) {
         const embed5 = new MessageEmbed()
           .setTitle(`Skin or ${orVar}`)
           .setColor('#FFA500')
           .setDescription("Oui 👍🏾 Non 👎🏾")
           .setImage(text.promoImageUrl)
           .setTimestamp()
        const poll5 = await interaction.channel.send({ embeds : [embed5], fetchReply: true});
         poll5.react('👍🏾');
         poll5.react('👎🏾');var orVar = orVar+1}

         if (purchasableWithGems == "fals" && i == 5 &&text.promoImageUrl !== undefined) { 
            const embed6 = new MessageEmbed()
           .setTitle(`Skin or ${orVar}`)
           .setColor('#FFA500')
           .setDescription("Oui 👍🏿 Non 👎🏿")
           .setImage(text.promoImageUrl)
           .setTimestamp()
        const poll6 = await interaction.channel.send({ embeds : [embed6], fetchReply: true});
         poll6.react('👍🏿');
         poll6.react('👎🏿'); var orVar = orVar+1}
     }}catch (err) {}
 
     const embed7 = new MessageEmbed()
           .setTitle("Avez-vous déjà payé les 500 or pour la quête ? (Si quête or)")
           .setColor('WHITE')
           .setDescription("Oui ✅ Non ❌")
           .setTimestamp()
        const poll7 = await interaction.channel.send({ embeds : [embed7], fetchReply: true});
         poll7.react('✅');
         poll7.react('❌');

        interaction.channel.send('Coucou <@&806912965496143882> voilà pour vous !') 
      }
      }
