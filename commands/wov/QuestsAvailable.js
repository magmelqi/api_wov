const superagent = require('superagent').agent();
const { MessageEmbed, Interaction } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const Questsavailable= new MessageChannel;

module.exports = {
    name: "quests",
    category: 'wov',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'quests',
    examples: ['quests'],
    description: 'Voir les quêtes achetable + sondage',
      run: async(client, message, args) => {
        const Questsavailable = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/available`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(err)}); 
        const Clan = await Questsavailable.body
        const imageB1=JSON.stringify(Clan); 
        console.log ("Commande quests fait")
        var debut= /https/g
        var fin = /.jpg/g
        
        const imageD1 = imageB1.search(debut); const imageF1 = imageB1.search(fin); const image1 = imageB1.slice(imageD1, imageF1+4);
        console.log (image1);

        const imageB2= imageB1.slice(imageF1+4)
        const imageD2 = imageB2.search(debut); const imageF2 = imageB2.search(fin); const image2 = imageB2.slice(imageD2, imageF2+4);
        console.log (image2);

        const imageB3= imageB2.slice(imageF2+4)
        const imageD3 = imageB3.search(debut); const imageF3 = imageB3.search(fin); const image3 = imageB3.slice(imageD3, imageF3+4);
        console.log (image3);

        const imageB4= imageB3.slice(imageF3+4)
        const imageD4 = imageB4.search(debut); const imageF4 = imageB4.search(fin); const image4 = imageB4.slice(imageD4, imageF4+4);
        console.log (image4);

      const embed1 = new MessageEmbed()
        .setTitle("Skin gemme")
        .setColor('#FF69B4')
        .setDescription("Oui 👍🏻 Non 👎🏻")
        .setImage(image1)
        .setTimestamp()
     const poll1 = await message.channel.send({ embeds : [embed1], fetchReply: true});
      poll1.react('👍🏻');
      poll1.react('👎🏻');

      const embed2 = new MessageEmbed()
          .setTitle("Skin or 1")
          .setColor('#FFA500')
          .setDescription("Oui 👍 Non 👎")
          .setImage(image2)
          .setTimestamp()
       const poll2 = await message.channel.send({ embeds : [embed2], fetchReply: true});
        poll2.react('👍');
        poll2.react('👎');

        const embed3 = new MessageEmbed()
          .setTitle("Skin or 2")
          .setColor('#FFA500')
          .setDescription("Oui 👍🏼 Non 👎🏼")
          .setImage(image3)
          .setTimestamp()
       const poll3 = await message.channel.send({ embeds : [embed3], fetchReply: true});
        poll3.react('👍🏼');
        poll3.react('👎🏼');

        const embed4 = new MessageEmbed()
          .setTitle("Skin or 3")
          .setColor('#FFA500')
          .setDescription("Oui 👍🏽 Non 👎🏽")
          .setImage(image4)
          .setTimestamp()
       const poll4 = await message.channel.send({ embeds : [embed4], fetchReply: true});
        poll4.react('👍🏽');
        poll4.react('👎🏽');


    },

    runSlash: async(client, message) => {
        const Questsavailable = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/quests/available`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(err)}); 
        const Clan = await Questsavailable.body
        const imageB1=JSON.stringify(Clan); 
        console.log ("Commande quests fait")
        var debut= /https/g
        var fin = /.jpg/g
        
        const imageD1 = imageB1.search(debut); const imageF1 = imageB1.search(fin); const image1 = imageB1.slice(imageD1, imageF1+4);
        console.log (image1);

        const imageB2= imageB1.slice(imageF1+4)
        const imageD2 = imageB2.search(debut); const imageF2 = imageB2.search(fin); const image2 = imageB2.slice(imageD2, imageF2+4);
        console.log (image2);

        const imageB3= imageB2.slice(imageF2+4)
        const imageD3 = imageB3.search(debut); const imageF3 = imageB3.search(fin); const image3 = imageB3.slice(imageD3, imageF3+4);
        console.log (image3);

        const imageB4= imageB3.slice(imageF3+4)
        const imageD4 = imageB4.search(debut); const imageF4 = imageB4.search(fin); const image4 = imageB4.slice(imageD4, imageF4+4);
        console.log (image4);


      const embed1 = new MessageEmbed()
        .setTitle("Skin gemme")
        .setColor('#FF69B4')
        .setDescription("Oui 👍🏻 Non 👎🏻")
        .setImage(image1)
        .setTimestamp()
     const poll1 = await message.channel.send({ embeds : [embed1], fetchReply: true});
      poll1.react('👍🏻');
      poll1.react('👎🏻');

      const embed2 = new MessageEmbed()
          .setTitle("Skin or 1")
          .setColor('#FFA500')
          .setDescription("Oui 👍 Non 👎")
          .setImage(image2)
          .setTimestamp()
       const poll2 = await message.channel.send({ embeds : [embed2], fetchReply: true});
        poll2.react('👍');
        poll2.react('👎');

        const embed3 = new MessageEmbed()
          .setTitle("Skin or 2")
          .setColor('#FFA500')
          .setDescription("Oui 👍🏼 Non 👎🏼")
          .setImage(image3)
          .setTimestamp()
       const poll3 = await message.channel.send({ embeds : [embed3], fetchReply: true});
        poll3.react('👍🏼');
        poll3.react('👎🏼');

        const embed4 = new MessageEmbed()
          .setTitle("Skin or 3")
          .setColor('#FFA500')
          .setDescription("Oui 👍🏽 Non 👎🏽")
          .setImage(image4)
          .setTimestamp()
       const poll4 = await message.channel.send({ embeds : [embed4], fetchReply: true});
        poll4.react('👍🏽');
        poll4.react('👎🏽');

       }}
