

module.exports = {
  name: "emit",
  category: 'admin',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: true,
  usage: 'emit',
  examples: ['pemit'],
  description: "Emettre un eévénement au choix!",
    run: (client, message, args) =>  {
        if (!args[0] || !args[0].match(/^(guildMemberAdd|guildMemberRemove)$/)) return message.reply('merci d\'entrer un évenement valide (`\guildMemberAdd`/`\guildMemberRemove\`)');

        if (args[0] == 'guildMemberAdd'){
            client.emit('guildMemberAdd', message.member);
            message.reply('Event guildMemberAdd émit !')
    
          } else {
            client.emit('guildMemberRemove', message.member);
            message.reply('Event guildMemberRemove émit !')
    
          }
    },
    options: [
        {
            name: 'event',
            description: 'Choisir un événement à émetre',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'guildMemberAdd',
                    value: 'guildMemberAdd',
                },
                {
                    name: 'guildMemberRemove',
                    value: 'guildMemberRemove',
                }
            ]
        }
    ],
    runSlash: (client, interaction) => {
      const evtChoices = interaction.options.getString('event');

      if (evtChoices == 'guildMemberAdd'){
        client.emit('guildMemberAdd', interaction.member);
        interaction.reply({content: 'Event guildMemberAdd émit !', ephemereal: true})

      } else {
        client.emit('guildMemberRemove', interaction.member);
        interaction.reply({content: 'Event guildMemberRemove émit !', ephemereal: true})

      }
    
    }
  };