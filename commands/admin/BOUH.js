

module.exports = {
    name: "bouh",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'alive',
    examples: ['alive'],
    description: "",
      run: (client, message, args) =>  {
        setInterval(() => {const logChannel = client.channels.cache.get('1044258472121860126');
            logChannel.send('Salut !')
        },280000)
      },
    };