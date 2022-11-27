const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "thread2",
  category: 'bouh',
  permissions: ['MANAGE_THREADS'],
  ownerOnly: false,
  usage: 'thread [join|leave|archive|unarchive|delete]',
  examples: ['thread join', 'thread leave'],
  description: "Commande cncernant les threads",
    async run (client, message, args) {
        let thread = message.channel;
        if (!thread.isThread()) return message.reply('Impossible de taper cette commande car vous n\'etes pas dans un thread!')
        if (!args[0] || !args[0].match(/^(join|leave|archive|unarchive|delete)$/))
        return message.reply('merci d\'entrer une sous-commande valide (`\join|leave|archive|unarchive|delete\`)');

        if (args [0] === 'join') {
            message.reply('le bot a rejoint le thread');
            if (thread.joinable) await thread.join();
        } else if (args [0] === 'leave') {
            message.reply('le bot a quitter le thread');
            await thread.leave();
        } else if (args [0] === 'archive') {
            message.reply('Le thread est archivé !');
            await thread.setArchived(true);
        } else if (args [0] === 'unarchive') {
            message.reply('Le thread est déarchivé !');
            await thread.setArchived(false);
        } else if (args [0] === 'delete') {
            const channelId = args[1];
            if (!args [1]) return message.reply('Merci de spécifier un ID de channel')
            const logChannel = client.channels.cache.get(channelId);
            await logChannel.send(`Le bot a supprimé le thread: ${thread.name}`);
            await thread.delete();
    }},
    options: [
        {
            name: "join",
            description: "Joindre un thread",
            type: "SUB_COMMAND"
        },
        {
            name: "leave",
            description: "Quitter un thread",
            type: "SUB_COMMAND",
        },
        {
            name: "archive",
            description: "Archiver un thread",
            type: "SUB_COMMAND",
        },
        {
            name: "unarchive",
            description: "Déarchiver un thread",
            type: "SUB_COMMAND",
        },
        {
            name: "delete",
            description: "Supprimer un thread",
            type: "SUB_COMMAND",
            options: [ { name: 'channel', trype: 'STRING', description: 'Id du channel', required: true } ]
        }
    ],
    async runSlash (client, interaction) {
        let thread = interaction.channel;
        if (!thread.isThread()) return interaction.reply('Impossible de taper cette commande car vous n\'etes pas dans un thread!')

        if (interaction.options.getSubcommand() === 'join') {
            interaction.reply('le bot a rejoint le thread');
            if (thread.joinable) await thread.join();
        } else if (interaction.options.getSubcommand() === 'leave') {
            interaction.reply('le bot a quitter le thread');
            await thread.leave();
        } else if (interaction.options.getSubcommand() === 'archive') {
            interaction.reply('Le thread est archivé !');
            await thread.setArchived(true);
        } else if (interaction.options.getSubcommand() === 'unarchive') {
            interaction.reply('Le thread est déarchivé !');
            await thread.setArchived(false);
        } else if (interaction.options.getSubcommand() === 'delete') {
            const channelId = interaction.options.getString('channel')
            const logChannel = client.channels.cache.get(channelId);
            await logChannel.send(`Le bot a supprimé le thread: ${thread.name}`);
            await thread.delete();
        }
  },
};
