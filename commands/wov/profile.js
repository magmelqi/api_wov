const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "profile",
  category: 'secret',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'profile',
  examples: ['profile'],
  description: "La commande profil(e) de ewwen/magmelqi",
    async run (client, message, args) {
      const tryPong = await message.channel.send(`Profil(e) de ${message.content.substring(8).trim()} en cours... un instant`);
      await new Promise(resolve => setTimeout(resolve, 1000))

      const embed = new MessageEmbed()
       .setTitle('Profil~~e~~ ')
       .setThumbnail(client.user.displayAvatarURL())
       .setDescription(`Non, ${message.author.username} c'est : \n?profil ${message.content.substring(8).trim()}`)
       .setTimestamp()
       .setAuthor({ name: `Lusky34` })
       .setFooter({ text: message.author.username, iconeURL: message.author.displayAvatarURL() })
       


    tryPong.edit({ content: ' ', embeds: [embed] }); 
    },
    async runSlash (client, interaction) {
      interaction.reply({content: `Profil(e) de ${interaction.user.username} en cours... un instant`, ephemeral: true});

      const embed = new MessageEmbed()
      .setTitle('Profil~~e~~ ')
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(`Non, ${interaction.user.username} c'est : \n?profil [pseudo]`)
      .setTimestamp()
      .setAuthor({ name: `Lusky34` })
      .setFooter({ text: interaction.user.username, iconeURL: interaction.user.displayAvatarURL() })

    interaction.editReply({ content: " ", embeds: [embed]});
  },
};
