const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "profile",
  category: 'secret',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'profile',
  examples: ['profile'],
  description: "La commande profil(e) de ewwen",
    async run (client, message, args) {
      const tryPong = await message.channel.send(`Profil(e) de ${message.author.username}en cours... un instant`);
      await new Promise(resolve => setTimeout(resolve, 1000))

      const embed = new MessageEmbed()
       .setTitle('Profile')
       .setThumbnail(client.user.displayAvatarURL())
       .setDescription(`Non, ${message.author.username} c'est ?profil`)
       .setTimestamp()
       .setAuthor({ name: `Lusky34` })
       .setFooter({ text: message.author.username, iconeURL: message.author.displayAvatarURL() })
       


    tryPong.edit({ content: ' ', embeds: [embed] }); 
    },
    async runSlash (client, interaction) {
      interaction.reply({content: "On essaye de pong... un instant!", ephemeral: true});

      const embed = new MessageEmbed()
      .setTitle('Profile')
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(`Non, ${interaction.user.username} c'est ?profil`)
      .setTimestamp()
      .setAuthor({ name: `Lusky34` })
      .setFooter({ text: interaction.user.username, iconeURL: interaction.user.displayAvatarURL() })

    interaction.editReply({ content: " ", embeds: [embed], ephemeral: true });
  },
};
