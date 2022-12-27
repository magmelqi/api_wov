const { MessageEmbed } = require('discord.js')
const {writeFileSync, readFileSync} = require ("fs");

module.exports = {
  name: "prefix",
  category: 'utils',
  permissions: ['BAN_MEMBERS'],
  ownerOnly: false,
  usage: 'prefix [chaine de caractère]',
  examples: ['prefix ?'],
  description: "Change le prefix du bot",
    async run (client, message, args) {
      const newPrefix = args[0]
      const oldPrefix = JSON.parse(readFileSync(`././Information/prefix/prefix.json`, 'utf-8'))
      const embed = new MessageEmbed()
      .setTitle("Prefix")
      .setDescription(`Le prefix \`${oldPrefix.prefix}\` à été changé en \`${newPrefix}\`\nRedémarrage du bot `)
      .setTimestamp()
      .setThumbnail(message.author.displayAvatarURL());

      const info = {
        prefix: newPrefix
      }
      const objectToJson = JSON.stringify(info)
      writeFileSync(`././Information/prefix/prefix.json`, objectToJson)
      message.channel.send({embeds: [embed]})
      await new Promise(resolve => setTimeout(resolve, 500))
      return process.exit();
    },
    options:[
      {
          name: "prefix",
          description: "taper le nouveau prefix",
          type: "STRING",
          required: true,
      }],
    async runSlash (client, interaction) {
      const newPrefix = interaction.options.getString('prefix');
      const oldPrefix = JSON.parse(readFileSync(`././Information/prefix/prefix.json`, 'utf-8'))
      const embed = new MessageEmbed()
      .setTitle("Prefix")
      .setDescription(`Le prefix \`${oldPrefix.prefix}\` à été changé en \`${newPrefix}\`\nRedémarrage du bot `)
      .setTimestamp()
      .setThumbnail(message.author.displayAvatarURL());

      const info = {
        prefix: newPrefix
      }
      const objectToJson = JSON.stringify(info)
      writeFileSync(`././Information/prefix/prefix.json`, objectToJson)
      interaction.channel.send({embeds: [embed]})
      await new Promise(resolve => setTimeout(resolve, 500))
      return process.exit();
  },
};
