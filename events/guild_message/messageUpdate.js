const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "messageUpdate",
    once: false,
    async execute(bot, oldMessage, newMessage){
        var AncienMessage = oldMessage.content
        if (oldMessage.partial) {
            try {
             var AncienMessage = "Impossible de récuperer le message du au crash du bot"
        }catch (err) {console.log ('impossible de récupérer les messages')
        return}}

        let Embed = new MessageEmbed() 
        .setColor(bot.color)
        .setTitle("Message modifié")
        .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Auteur du message: ${newMessage.author}\nDate de la création du message: <t:${Math.floor(oldMessage.createdTimestamp / 1000)}:R>\nAncien contenu: \`\`\`${AncienMessage}\`\`\`\nNouveau contenu: \`\`\`${newMessage.content}\`\`\``)

        const logChannel = bot.channels.cache.get('1044258472121860126');
        logChannel.send({ embeds: [Embed]})
    }
}