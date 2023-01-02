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
          
          let member = message.mentions.members.first(); console.log(member)
  
          if (member.roles.cache.has(role.id) && member.roles.cache.has(role2.id)) { return message.channel.send(`${member.displayName} posséde déjà le role ${role.name} et le role ${role2.name}.`)}

          if (!member.roles.cache.has(role.id) && !member.roles.cache.has(role2.id)) {member.roles.add(role); member.roles.add(role2); return message.channel.send(`${member.displayName} posséde maintement le role ${role.name} et le role ${role2.name}.`)}
   
              if (member.roles.cache.has(role.id)) {message.channel.send(`${member.displayName} posséde déjà le role ${role.name}.`)}
              else {member.roles.add(role)
                  .then (m => message.channel.send(`${member.displayName} posséde maintement le role ${role.name}.`))
                  .catch((err) => {return message.channel.send(`Erreur: ${err}`)});}
              
  
              if (member.roles.cache.has(role2.id)) {message.channel.send(`${member.displayName} posséde déjà le role ${role2.name}.`)}
              else {member.roles.add(role2)
                  .then (m => message.channel.send(`${member.displayName} posséde maintement le role ${role2.name}.`))
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
        const membert = interaction.options.getUser('mention');
        const member = interaction.guild.members.cache.get(membert.id)

        let role = await interaction.guild.roles.cache.find(r => r.id === '806912965496143882'); //🐅Membre de la WL🐅
        let role2 = await interaction.guild.roles.cache.find(r => r.name === 'Louveteau'); //Louveteau
        
        if (member.roles.cache.has(role.id) && member.roles.cache.has(role2.id)) { return interaction.reply({content:`${member.displayName} posséde déjà le role ${role.name} et le role ${role2.name}.`, ephemeral:true})}

        if (!member.roles.cache.has(role.id) && !member.roles.cache.has(role2.id)) {member.roles.add(role); member.roles.add(role2); return interaction.reply(`${member.displayName} posséde maintement le role ${role.name} et le role ${role2.name}.`)}
 
            if (member.roles.cache.has(role.id)) {interaction.reply(`${member.displayName} posséde déjà le role ${role.name}.`)}
            else {member.roles.add(role.id)
                .then (m => interaction.followUp(`${member.displayName} posséde maintement le role ${role.name}.`))
                .catch((err) => {return interaction.reply(`Erreur: ${err}`)});}
            

            if (member.roles.cache.has(role2.id)) {interaction.reply(`${member.displayName} posséde déjà le role ${role2.name}.`)}
            else {member.roles.add(role2.id)
                .then (m => interaction.followUp(`${member.displayName} posséde maintement le role ${role2.name}.`))
                .catch((err) => {return interaction.reply(`Erreur: ${err}`)}); }
      }
    }
  