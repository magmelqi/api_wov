const superagent = require('superagent').agent();
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const Messagesend = new MessageChannel;

module.exports = {
    name: "msend",
    category: 'wov',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'messagesend [Message]',
    examples: ['messagesend', 'messagesend BOUH'],
    description: 'Envoie un message dans le chat du clan',
      run: async(client, message, args) => {
        const Messageclan = await superagent.post(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/chat`)
        .send({message: `${message.author.username} :${message.content.substring(6)}`})
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return message.channel.send(err)}); 
        console.log ('Commande MessageSend fait');
        console.log(`${message.author.username} :${message.content.substring(6)}`)
        message.channel.send(`'${message.content.substring(6)} ' a bien été envoyé.`)
        
  },
  options:[
    {
        name: "message",
        description: "taper votre message a envoyer",
        type: "STRING",
        required: true,
    },
],

  runSlash: async(client, interaction) => {
    const MessageContent = interaction.options.getString('message');
    const Messagesend = await superagent.post(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/chat`)
  .send({message: `${interaction.user.username} :${MessageContent}`})
  .set( 'Authorization', process.env.WOV_TOKEN)
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .catch((err) => {return interaction.reply(err)}); 
  console.log ('Commande MessageSend fait');
  console.log(`${interaction.user.username} :${MessageContent}`)
  message.channel.send(`'${MessageContent} ' a bien été envoyé.`)
}
}