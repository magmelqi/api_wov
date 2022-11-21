const { MessageEmbed } = require("discord.js");

const prefix = '?';
const ownerId = '385172057433964556';

module.exports = {
    name: "messageReactionAdd",
    once: false,
    async execute(client, messageReaction, user) {
        const message = messageReaction.message;
        const emojiName = messageReaction.emoji.name;
        const member = message.guild.members.cache.get(user.id)
        if(member.user.bot) return;

        if (messageReaction.partial) {
            try {
            await messageReaction.fetch();
        }catch (err) {console.log ('impossible de récupérer les messages')
        return}
    }
    const embedP = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête gemme`)
        .setColor('#21ff81')
        .setTimestamp();

        const embedN = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête gemme`)
        .setColor('#dc143c')
        .setTimestamp();

    const embedPOr1 = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête Or 1`)
        .setColor('#21ff81')
        .setTimestamp();

        const embedNOr1 = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête Or 1`)
        .setColor('#dc143c')
        .setTimestamp();

    const embedPOr2 = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête Or 2`)
        .setColor('#21ff81')
        .setTimestamp();

        const embedNOr2 = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête Or 2`)
        .setColor('#dc143c')
        .setTimestamp();

    const embedPOr3 = new MessageEmbed()
        .setAuthor({ name: `L'utilisateur a reéagis avec 👍🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête Or 3`)
        .setColor('#21ff81')
        .setTimestamp();

        const embedNOr3 = new MessageEmbed()
        .setAuthor({name: `L'utilisateur a reéagis avec 👎🏻 !`, iconURL: member.user.displayAvatarURL()})
        .setDescription(`${member} => quête Or 3`)
        .setColor('#dc143c')
        .setTimestamp();


        const logChannel = client.channels.cache.get('1044258472121860126');

        if (emojiName === '👍🏻') {logChannel.send({ embeds: [embedP]}), member.send('Vous voulez participer  la quête gemme !')}
        if (emojiName === '👎🏻') {logChannel.send({ embeds: [embedN]}), member.send('Vous ne voulez pas participer  la quête gemme !')}

        if (emojiName === '👍') {logChannel.send({ embeds: [embedPOr1]}), member.send('Vous voulez participer  la quête OR 1 !')}
        if (emojiName === '👎') {logChannel.send({ embeds: [embedNOr1]}), member.send('Vous ne voulez pas participer  la quête OR 1 !')}

        if (emojiName === '👍🏼') {logChannel.send({ embeds: [embedPOr2]}), member.send('Vous voulez participer  la quête OR 2 !')}
        if (emojiName === '👎🏼') {logChannel.send({ embeds: [embedNOr2]}), member.send('Vous ne voulez pas participer  la quête OR 2 !')}

        if (emojiName === '👍🏽') {logChannel.send({ embeds: [embedPOr3]}), member.send('Vous voulez participer  la quête OR 3 !')}
        if (emojiName === '👎🏽') {logChannel.send({ embeds: [embedNOr3]}), member.send('Vous ne voulez pas participer  la quête OR 3 !')}

    
  }}