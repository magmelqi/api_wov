module.exports = {
    name: "add",
    category: 'wov',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'add [member]',
    examples: ['add @KamieSukehiro#3211'],
    description: "La commande ajoute les rôles louveteau et membre WL à la personne",
      run: (client, message, args) =>  {
          let role = message.guild.roles.cache.find(r => r.id === '806912965496143882'); //🐅Membre de la WL🐅
          let role2 = message.guild.roles.cache.find(r => r.name === 'Louveteau'); //Louveteau
          let member = message.mentions.members.first();
  
          if (member.roles.cache.has(role.id) && member.roles.cache.has(role2.id)) { return message.channel.send(`${member} posséde déjà le role ${role.name} et le role ${role2.name}.`)} 
   
              if (member.roles.cache.has(role.id)) {message.channel.send(`${member} posséde déjà le role ${role.name}.`)}
              else {member.roles.add(role)
                  .then (m => message.channel.send(`${member} posséde maintement le role ${role.name}.`))
                  .catch((err) => {return message.channel.send(`Erreur: ${err}`)});}
              
  
              if (member.roles.cache.has(role2.id)) {message.channel.send(`${member} posséde déjà le role ${role2.name}.`)}
              else {member.roles.add(role2)
                  .then (m => message.channel.send(`${member} posséde maintement le role ${role2.name}.`))
                  .catch((err) => {return message.channel.send(`Erreur: ${err}`)}); }
  
      },
      async runSlash(client, interaction) { 
        interaction.reply({content: `La commande / ne marche pas veuillez utiliser le \n?add [@KamieSukehiro#3211]`, ephemeral: true})
      }
    }
  