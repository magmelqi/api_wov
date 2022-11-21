const { MessageEmbed, Formatters } = require('discord.js')
const dayjs = require('dayjs')

module.exports = {
    name: "guildMemberAdd",
    once: false,
    async execute(client, member){
        const creationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const realativeCreationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const joinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const realativeJoinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);

        const embed = new MessageEmbed()
        .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.displayAvatarURL()})
        .setColor('#21ff81')
        .setDescription(`± Nom d'utilisateur: ${member}
± Crée le: ${creationTimestamp} (${realativeCreationTimestamp})
± Rejoint le: ${joinTimestamp} (${realativeJoinTimestamp})
        `)
        .setFooter({ text: 'L\'utilisateur a rejoint !' })
        .setTimestamp();

        const logChannel = client.channels.cache.get('1044258472121860126');
        logChannel.send({ embeds: [embed]})
    }

}