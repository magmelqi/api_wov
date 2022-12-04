const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "pvote",
  category: 'quête',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'pvote',
  examples: ['pvote'],
  description: "Pvote",
    async run (client, message, args)  {
        const embed = new MessageEmbed()
          .setTitle(`Participation pour la quête${args.slice(0).join(' ')}`)
          .setColor('#00a3b5')
          .setDescription(`Si vous n'avez pas réagis à la rection 👍🏼 sur la quête ${args.slice(0).join(' ')} et que vous voulez quand même participer à la quête${args.slice(0).join(' ')}, veuillez réagir sur cette réaction ✅`)
          .setTimestamp()
          .setFooter({ text: `Nouveau sondage généré par ${message.author.tag}!`});

        const poll = await message.reply({ embeds : [embed]});
        poll.react('✅');
    },
    options:[
      {
          name: "titre",
          description: "taper le nom du sondage",
          type: "STRING",
          required: true,
      }],

    async runSlash (client, interaction) {
      const nom = interaction.options.getString('titre');

      const embed = new MessageEmbed()
      .setTitle(`Participation pour la quête${nom}`)
      .setColor('#00a3b5')
      .setDescription(`Si vous n'avez pas réagis à la rection 👍🏼 sur la quête ${nom} et que vous voulez quand même participer à la quête${nom}, veuillez réagir sur cette réaction ✅`)
      .setTimestamp()

    const poll = await interaction.reply({ embeds : [embed]});
    poll.react('✅');
  },
};
