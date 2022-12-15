const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "dm",
  category: 'secret',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: true,
  usage: 'dm',
  examples: ['dm'],
  description: "dm",
    async run (client, message, args) { let member = message.mentions.members.first();
        if (!args[0] || args[0].match(member)) {return message.channel.send('Merci de mentioner quelqu\'un')}
        if (!args[1] || args[0].match(String)) {return message.channel.send('Merci d\' envoyer du texte')}; 
        
        member.send(args[1])
        message.reply(`"${args[1]}" à bien été envoyé`)
        console.log(message.author)
    },
    options:[
        {
            name: "mention",
            description: "mentioner quelqu'un",
            type: "USER",
            required: true,
        },
        {
            name: "message",
            description: "ecrivez votre message",
            type: "STRING",
            required: false,
        }
    ],
    async runSlash (client, interaction) {
        const nom = interaction.options.getUser('mention'); console.log(nom)
        const message = interaction.options.getString('message'); console.log(message)
        nom.send(message ?? `${nom} veut vous envoyez un message`)
        interaction.reply({content:`"${message ?? `${nom} veut vous envoyez un message`}" à bien été envoyé à ${nom.username}`, ephemeral: true})
  },
};
