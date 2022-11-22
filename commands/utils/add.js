const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "add",
  category: 'none',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'add [member]',
  examples: ['add @Evie'],
  description: "La commande ajoute les rôles louveteau et membre WL à la personne",
    run: (client, message, args) =>  {
        let role = message.guild.roles.cache.find(r => r.name === 'BOUH');console.log(message.author.username)
        //'<@&806912965496143882>','<@&72421035%%2346366014>'
        if (role) {
            if (message.member.roles.cache.has(role.id)) return message.channel.send("Vous avez déjà ce rôle !")
            if (role.permissions.has('KICK_MEMBERS')) return message.channel.send('Vous ne pouvez pas avoir ce rôle !'); 
            message.member.roles.add(role)
            .then (m => message.channel.send(`vous possédez maintement le role ${role}.`))
            .catch((err) => {message.channel.send(err)});
        } else {
            message.channel.send('Le rôle n\'existe pas')
        }
    },
    async runSlash (client, interaction) {
}
}
