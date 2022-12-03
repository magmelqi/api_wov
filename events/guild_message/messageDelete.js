const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "messageDelete",
    once: false,
    async execute(bot, message){

        const AuditsLogs = await message.guild.fetchAuditLogs({
            type: 'MESSAGE_DELETE',
            limit: 1
        })

        const LatestMessageDeleted = AuditsLogs.entries.first();

        let Embed = new MessageEmbed() 
        .setColor(bot.color)
        .setTitle("Message supprimé")
        .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Auteur du message: ${message.author}\nAuteur de la suppresion: ${LatestMessageDeleted.executor}\nDate de la création du message: <t:${Math.floor(message.createdTimestamp / 1000)}:R>\nContenu: \`\`\`${message.content}\`\`\``)

        const logChannel = bot.channels.cache.get('1044258472121860126');
        logChannel.send({ embeds: [Embed]})
    }
}