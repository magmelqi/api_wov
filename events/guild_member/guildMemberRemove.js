const { MessageEmbed, Formatters } = require('discord.js')
const dayjs = require('dayjs')

module.exports = {
    name: "guildMemberRemove",
    once: false,
    async execute(client, member){
        const creationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const realativeCreationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);

        const joinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const realativeJoinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);

        const leftTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.ShortDateTime);
        const realativeLeftTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.RelativeTime);

        const embed = new MessageEmbed()
        .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.displayAvatarURL()})
        .setColor('#dc143c')
        .setDescription(`± Nom d'utilisateur: ${member.displayName}
± Crée le: ${creationTimestamp} (${realativeCreationTimestamp})
± Rejoint le: ${joinTimestamp} (${realativeJoinTimestamp})
± Quitté le: ${leftTimestamp} (${realativeLeftTimestamp})
        `)
        .setFooter({ text: 'L\'utilisateur a quitté!' })
        .setTimestamp();

        const logChannel = client.channels.cache.get('1044258472121860126');
        logChannel.send({ embeds: [embed]})
    }

}