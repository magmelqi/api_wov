

module.exports = {
    name: "stop",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'stop',
    examples: ['stop'],
    description: 'Commande stop',
      run: (client, message, args) => {
        message.channel.send("Le bot s'arrête dans 3 secondes");message.channel.send("3")
        setTimeout(() => {message.channel.send("2");}, 1000);setTimeout(() => {message.channel.send("1");}, 2000);setTimeout(() => {message.channel.send("`POUF` plus de bot");}, 3000);
        console.log("Le bot s'est arreté avec la commande ?stop");
        setTimeout(() => {client.destroy();}, 3000);
      },
      runSlash (client, interaction) {
        interaction.reply("Le bot s'arrête dans 3 secondes"); interaction.channel.send("3")
        setTimeout(() => {interaction.channel.send("2");}, 1000);setTimeout(() => {interaction.channel.send("1");}, 2000);setTimeout(() => {interaction.channel.send("`POUF` plus de bot");}, 3000);
        console.log("Le bot s'est arreté avec la commande ?stop");
        setTimeout(() => {client.destroy();}, 3000);
      }
    }