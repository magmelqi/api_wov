const superagent = require('superagent').agent();

module.exports = {
    name: "bouh",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'bouh',
    examples: ['bouh'],
    description: "bouh",
    async run (client, message, args) {message.channel.send('go !'); const logChannel = client.channels.cache.get('1044258472121860126');
        const bouh = await superagent.get('https://glitch.com/~mewing-ember-linen')
        .set('content-type', 'text/html')
        .catch((err) => console.log(err))
         console.log(bouh.statusCode); const status = bouh.statusCode; var TestS= JSON.stringify(status)
         logChannel.send(TestS)
      setInterval(async() => {
        const bouh = await superagent.get('https://glitch.com/~mewing-ember-linen')
        .set('content-type', 'text/html')
        .catch((err) => console.log(err))
        console.log(bouh.statusCode); const status = bouh.statusCode; var TestS= JSON.stringify(status)
        logChannel.send(TestS)
      },240000)
    },
  };