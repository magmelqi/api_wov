const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "add",
  category: 'none',
  permissions: ['BAN_MEMBERS'],
  ownerOnly: false,
  usage: 'add [member]',
  examples: ['add @Evie'],
  description: "La commande ajoute les rôles louveteau et membre WL à la personne",
    run: (client, message, args) =>  {
        let role = message.guild.roles.cache.find(r => r.name === '🐅Membre de la WL🐅');
        let role2 = message.guild.roles.cache.find(r => r.name === 'Louveteau');
        let member = message.mentions.members.first();
        //'<@&806912965496143882>','<@&72421035%%2346366014>'
 
            if (member.roles.cache.has(role.id)) message.channel.send(`${message.author.username} posséde déjà le role ${role}.`)
            if (role.permissions.has('KICK_MEMBERS')) message.channel.send(`${message.author.username} ne peut pas avoir le role ${role}.`)

            if (member.roles.cache.has(role2.id)) return message.channel.send(`${message.author.username} posséde déjà le role ${role2}.`)
            if (role2.permissions.has('KICK_MEMBERS')) return message.channel.send(`${message.author.username} ne peut pas avoir le role ${role2}.`)

            member.roles.add(role)
            .then (m => message.channel.send(`${message.author.username} posséde maintement le roles 🐅 Membre de la WL 🐅.`))
            .catch((err) => {return message.channel.send(err)});

            member.roles.add(role2)
            .then (m => message.channel.send(`${message.author.username} posséde maintement le role ${role2}.`))
            .catch((err) => {return message.channel.send(err)}); 

    },
    options:[
        {
            name: "utilisateur",
            description: "taper l'utilisateur qui va recevoir les rôles",
            type: "STRING",
            required: true,
        },
    ],
        async runSlash (client, interaction) {
        let role = message.guild.roles.cache.find(r => r.name === 'BOUH');
        let role2 = message.guild.roles.cache.find(r => r.name === 'test');
        let member = interaction.options.getString('message');
        //'<@&806912965496143882>','<@&72421035%%2346366014>'
 
            if (member.roles.cache.has(role.id)) interaction.channel.send(`${message.author.username} posséde déjà le role ${role}.`)
            if (role.permissions.has('KICK_MEMBERS')) interaction.channel.send(`${message.author.username} ne peut pas avoir le role ${role}.`)

            if (member.roles.cache.has(role2.id)) return interaction.channel.send(`${message.author.username} posséde déjà le role ${role2}.`)
            if (role2.permissions.has('KICK_MEMBERS')) return interaction.channel.send(`${message.author.username} ne peut pas avoir le role ${role2}.`)
            
            member.roles.add(role)
            .then (m => interaction.channel.send(`${message.author.username} posséde maintement le roles ${role}.`))
            .catch((err) => {return interaction.channel.send(err)});

            member.roles.add(role2)
            .then (m => interaction.channel.send(`${message.author.username} posséde maintement le role ${role2}.`))
            .catch((err) => {return interaction.channel.send(err)});
}
}
