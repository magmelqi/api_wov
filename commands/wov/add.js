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

          if (!member.roles.cache.has(role.id) && !member.roles.cache.has(role2.id)) {member.roles.add(role); member.roles.add(role2); return message.channel.send(`${member} posséde maintement le role ${role.name} et le role ${role2.name}.`)}
   
              if (member.roles.cache.has(role.id)) {message.channel.send(`${member} posséde déjà le role ${role.name}.`)}
              else {member.roles.add(role)
                  .then (m => message.channel.send(`${member} posséde maintement le role ${role.name}.`))
                  .catch((err) => {return message.channel.send(`Erreur: ${err}`)});}
              
  
              if (member.roles.cache.has(role2.id)) {message.channel.send(`${member} posséde déjà le role ${role2.name}.`)}
              else {member.roles.add(role2)
                  .then (m => message.channel.send(`${member} posséde maintement le role ${role2.name}.`))
                  .catch((err) => {return message.channel.send(`Erreur: ${err}`)}); }
  
      },
      options:[
        {
            name: "mention",
            description: "mentioner quelqu'un",
            type: "USER",
            required: true,
        }
    ],
      async runSlash(client, interaction) {
        const member = interaction.options.getUser('mention'); console.log(member);
        let role = client.guilds.cache.find(r => r.name === 'WOV'); //🐅Membre de la WL🐅
        let role2 = client.guilds.cache.find(r => r.name === 'Events'); //Louveteau
        
        if (member.roles.has(role.id) && member.roles.has(role2.id)) { return interaction.reply(`${member} posséde déjà le role ${role.name} et le role ${role2.name}.`)}

        if (!member.roles.has(role.id) && !member.roles.has(role2.id)) {member.roles.add(role); member.roles.add(role2); return interaction.reply(`${member} posséde maintement le role ${role.name} et le role ${role2.name}.`)}
 
            if (member.roles.has(role.id)) {interaction.reply(`${member} posséde déjà le role ${role.name}.`)}
            else {member.roles.add(role)
                .then (m => interaction.reply(`${member} posséde maintement le role ${role.name}.`))
                .catch((err) => {return interaction.reply(`Erreur: ${err}`)});}
            

            if (member.roles.has(role2.id)) {interaction.reply(`${member} posséde déjà le role ${role2.name}.`)}
            else {member.roles.add(role2)
                .then (m => interaction.reply(`${member} posséde maintement le role ${role2.name}.`))
                .catch((err) => {return interaction.reply(`Erreur: ${err}`)}); }
      }
    }
  