const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "message",
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'message',
  examples: ['message'],
  description: "La commande message envoie un message sur wolvesville",
    async run (clients, message, args) {console.log(args);message.channel.send(args[0])
    },
    async runSlash (client, interaction) {
      const tryPong = await interaction.reply({content: "message envoyé", fetchReply: true});

    const embed = new MessageEmbed()
      .setTitle("message")
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
