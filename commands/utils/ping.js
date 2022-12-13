const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "ping",
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'ping',
  examples: ['ping'],
  description: "La commande ping envoie la latence du bot et de l'API",
    async run (client, message, args) {
      const tryPong = await message.channel.send("on essaye de pong... un instant");

      const embed = new MessageEmbed()
       .setTitle('🏓 Pong')
       .setThumbnail(client.user.displayAvatarURL())
       .addFields(
        { name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true},
        { name: "Latence BOT", value: `\`\`\`${tryPong.createdTimestamp - message.createdTimestamp}ms\`\`\``, inline: true},
        { name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`, inline: true},
       )
       .setTimestamp()
       .setAuthor({ name: `Lusky34` })
       .setFooter({ text: message.author.username, iconeURL: message.author.displayAvatarURL() })
       


    tryPong.edit({ content: ' ', embeds: [embed] });
    },
    async runSlash (client, interaction) {
      const tryPong = await interaction.reply({content: "On essaye de pong... un instant!", fetchReply: true});

    const embed = new MessageEmbed()
      .setTitle("Pong! 🏓")
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        { name: "Latence API", value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true},
        { name: "Latence BOT", value: `\`\`\`${tryPong.createdTimestamp - interaction.createdTimestamp}ms\`\`\``, inline: true,}
      )
      .setTimestamp()
      .setFooter({text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});

    interaction.editReply({ content: " ", embeds: [embed] });
  },
};
