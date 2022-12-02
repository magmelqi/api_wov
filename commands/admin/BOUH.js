

module.exports = {
    name: "bouh",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'bouh',
    examples: ['bouh'],
    description: "bouh",
      run: (client, message, args) =>  {message.channel.send('Salut !')
        setInterval(() => {const logChannel = client.channels.cache.get('1044258472121860126');
            logChannel.send('Salut !')
        },280000)
      },
    };