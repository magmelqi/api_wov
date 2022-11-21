const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "ping",
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'ping',
  examples: ['ping'],
  description: "La commande ping envoie la latence du bot et de l'API",
    run: (client, message, args) =>  {
      const embed = new MessageEmbed()
       .setTitle('🏓 Pong')
       .setThumbnail(client.user.displayAvatarURL())
       .addFields(
        { name: 'Latence', value: `\`${client.ws.ping}ms\``, inline: true},
        { name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`, inline: true},
       )
       .setTimestamp()
       .setAuthor({ name: `Lusky34` })
       .setFooter({ text: message.author.username, iconeURL: message.author.displayAvatarURL() })
       


    message.channel.send({ embeds: [embed] });
    },
    runSlash: (client, interaction) => {
      interaction.reply('Pong!');
    }
  };