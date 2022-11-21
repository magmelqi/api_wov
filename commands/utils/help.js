const { MessageEmbed } = require ('discord.js');
const { readdirSync } = require ('fs');
const commandFolder = readdirSync('./commands');
const prefix = '?';

const contexDescription = {}

module.exports = {
    name: 'help',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'help <command>',
    examples: ['help', 'help ping', 'help profil'],
    description: 'Envoie une liste de commande filtrée par catégorie',
    async run(client, message, args)  {
        if (!args[0]) {
            const noArgsEmbed = new MessageEmbed()
                .setColor('#42d6ff')
                .addField('Liste des commandes', `Une liste de toutes les catégories disponibles et leur commande.\nPour plus d'information sur une commande, tapez ${prefix}help <command>`)
                .setFooter({text: 'Si l\'erreur "Too Many Requests" survient veuillez retaper la commande !'})
            
            for (const category of commandFolder) {
                noArgsEmbed.addField(
                    `+ ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
                );
            }
        
            return message.channel.send({ embeds: [noArgsEmbed] });
        }
            
        const cmd = client.commands.get(args[0]);
        if (!cmd) {return message.reply('cette commande n\'existe pas!')}

    
   return message.channel.send(`
\`\`\`makefile
[Help: Commande -> ${cmd.name}] ${cmd.ownerOnly ? "/!\\ Pour les admins du bot uniquement /!\\" : ""}
${cmd.description ? cmd.description : contexDescription [`${cmd.name}`]}

Utilisation: ${prefix}${cmd.usage}
Exemples: ${prefix}${cmd.examples.join(` | ${prefix}`)}
Permissions: ${cmd.permissions.join(", ")}

---

${prefix} = prefix utiliser pour le bot (/commands sont aussi disponibles)
{} = sous-commande(s) disponible(s) \n[] = option(s) obligatoire(s)  \n<> = option(s) optionnel(s)
Ne pas inclure ces caractères \n-> {}, [] et <> dans vos commandes.

   \`\`\``);     
},
    options:[
        {
            name: "command",
            description: "taper le nom de votre commande",
            type: "STRING",
            required: false,
        }
    ],
    async runSlash(client, interaction) {
        const cmdName = interaction.options.getString('command');
        if (!cmdName) {
            const noArgsEmbed = new MessageEmbed()
                .setColor('#42d6ff')
                .addField('Liste des commandes', `Une liste de toutes les catégories disponibles et leur commande.\nPour plus d'information sur une commande, tapez \`${prefix}help <command>\``)
            
            for (const category of commandFolder) {
                noArgsEmbed.addField(
                    `+ ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
                );
            }
        
            return interaction.reply({ embeds: [noArgsEmbed], ephemeral: true });
        }
            
        const cmd = client.commands.get(cmdName);
        if (!cmd) {return interaction.reply({ content: 'cette commande n\'existe pas!', ephemeral: true})}

        return interaction.reply({content:`
\`\`\`makefile
[Help: Commande -> ${cmd.name}] ${cmd.ownerOnly ? "/!\\ Pour les admins du bot uniquement /!\\" : ""}
${cmd.description ? cmd.description : contexDescription [`${cmd.name}`]}

Utilisation: ${prefix}${cmd.usage}
Exemples: ${prefix}${cmd.examples.join(` | ${prefix}`)}
Permissions: ${cmd.permissions.join(", ")}

---

${prefix} = prefix utiliser pour le bot (/commands sont aussi disponibles)
{} = sous-commande(s) disponible(s) \n[] = option(s) obligatoire(s) \n <> = option(s) optionnel(s)
Ne pas inclure ces caractères \n-> {}, [] et <> dans vos commandes.

   \`\`\``, ephemeral: true});   
    },
}