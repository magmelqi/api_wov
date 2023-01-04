const superagent = require('superagent').agent();
       const dotenv = require('dotenv'); dotenv.config();
       const {MessageEmbed, Formatters} = require('discord.js')
       const dayjs = require ('dayjs');
       
module.exports = {
    name: "test",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'test', 
    examples: ['test'],
    description: 'Commande test',
       async run (client, message, args) {
                    const Mtest = await message.channel.send(`${message.author.username}, souhaitez-vous réellement lancer la commande test ? (o/n)`)              
                    var jour = `${dayjs().format("ddd")}`; var j = 0
                     while (jour != "Tue") { var j = j +1
                            var jour = `${dayjs().add(+j, 'day').format("ddd")}`;
                     };
                     var date = `${dayjs().add(+j, 'day').format("YYYY-MM-DD")}`
                     console.log(date)
                     const yo = Formatters.time(dayjs(`${date}T14:00`).unix(), Formatters.TimestampStyles.RelativeTime)
                    
                     console.log(Mtest.id, Mtest.createdTimestamp);
                     message.channel.send(`${yo}`)
                      
                     var accepting = true
                     await new Promise(resolve => {
                            setTimeout(() => {resolve(); if (accepting) {message.channel.send("Le temps est écoulé."); return accepting = false}}, 5000)
                     client.on("messageCreate", message => {
                            if (!accepting) return
                            if (message.author.bot) return
                            if (message.content == "o" || message.content == "O") { message.channel.send('Execution de la commande');resolve(); return accepting = false}
                            if (message.content == "n" || message.content == "N") { message.channel.send('Annulation de la commande');resolve(); return accepting = false}
                     })}); var accepting = false
                     await new Promise(resolve => setTimeout(resolve, 1000))
                     return message.channel.send("Fin de l'éxécution de la commande test")
       }
}
