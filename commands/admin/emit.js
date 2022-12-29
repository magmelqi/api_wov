

module.exports = {
  name: "emit",
  category: 'admin',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: true,
  usage: 'emit',
  examples: ['pemit'],
  description: "Emettre un événement au choix!",
    run: (client, message, args) =>  {
        if (!args[0] || !args[0].match(/^(guildMemberAdd|guildMemberRemove|guildCreate)$/)) return message.reply('merci d\'entrer un évenement valide (`\guildMemberAdd`/`\guildMemberRemove\`/\`guildCreate\`)');

        if (args[0] == 'guildMemberAdd'){
            client.emit('guildMemberAdd', message.member);
            message.reply('Event guildMemberAdd émit !')
    
          } else if (args[0] == 'guildCreate') {
              client.emit('guildCreate', message.guild);
              message.reply('Event guildCreate émit !')
          }else {
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
                },
                {
                  name: 'guildCreate',
                  value: 'guildCreate',
               }
            ]
        }
    ],
    runSlash: (client, interaction) => {
      const evtChoices = interaction.options.getString('event');

      if (evtChoices == 'guildMemberAdd'){
        client.emit('guildMemberAdd', interaction.member);
        interaction.reply({content: 'Event guildMemberAdd émit !', ephemereal: true})

      } else if (evtChoices =='guildCreate') {
          client.emit('guildCreate', interaction.guild);
          interaction.reply('Event guildCreate émit !')
      }else {
        client.emit('guildMemberRemove', interaction.member);
        interaction.reply({content: 'Event guildMemberRemove émit !', ephemereal: true})

      }
    
    }
  };