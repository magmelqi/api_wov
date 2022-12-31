const { MessageEmbed } = require("discord.js");
const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();


module.exports = {
    name: "messageReactionRemove",
    once: false,
    async execute(client, messageReaction, user) {
        const message = messageReaction.message;
        const emojiName = messageReaction.emoji.name;
        const member = message.guild.members.cache.get(user.id)
        if (member !== undefined) {var name = member.displayName; const nameId = member.id; console.log(name, nameId)}
        else if (member == undefined) {var name = user.id}
        console.log(message.id)
        if(member.user.bot) return;

        if (messageReaction.partial) {
            try {
            await messageReaction.fetch();
        }catch (err) {console.log ('impossible de récupérer les messages')
        return}
    }

        const regleChannel = client.channels.cache.get('817787093182054430');
        //1054738041383694397 laîques
        //776035119151841283 rôle
        //724298399376998440 règle
        if (emojiName === '✅') {
            if (message.channel.id == '724216612206542889'){
                if (message.id == '1054738041383694397') {regleChannel.send(`${name} a enlever son accord pour les règles concernant la laïcité.`)}
                else if (message.id == '776035119151841283') {regleChannel.send(`${name} a enlever son accord pour les règles des rôles.`)}
                else if (message.id == '724298399376998440') {regleChannel.send(`${name} a enlever son accord pour les règles d'usage`)}}};
         
      
    
   }}