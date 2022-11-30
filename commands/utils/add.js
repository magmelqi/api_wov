module.exports = {
    name: "add",
    category: 'none',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'add [member]',
    examples: ['add @Evie'],
    description: "La commande ajoute les rôles louveteau et membre WL à la personne",
      run: (client, message, args) =>  {
          let role = message.guild.roles.cache.find(r => r.id === '806912965496143882'); //🐅Membre de la WL🐅
          let role2 = message.guild.roles.cache.find(r => r.name === 'Louveteau'); //Louveteau
          let member = message.mentions.members.first();
  
          if (member.roles.cache.has(role.id) && member.roles.cache.has(role2.id)) { return message.channel.send(`${member} posséde déjà le role ${role} et le role ${role2}.`)} 
   
              if (member.roles.cache.has(role.id)) {message.channel.send(`${member}} posséde déjà le role ${role}.`)}
              else {member.roles.add(role)
                  .then (m => message.channel.send(`${member} posséde maintement le role ${role}.`))
                  .catch((err) => {return message.channel.send(`Erreur: ${err}`)});}
              
  
              if (member.roles.cache.has(role2.id)) {message.channel.send(`${member} posséde déjà le role ${role2}.`)}
              else {member.roles.add(role2)
                  .then (m => message.channel.send(`${member} posséde maintement le role ${role2}.`))
                  .catch((err) => {return message.channel.send(`Erreur: ${err}`)}); }
  
      }}
  