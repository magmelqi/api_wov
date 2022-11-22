const prefix = '?';
const ownerId = '385172057433964556';

module.exports = {
    name: "messageCreate",
    once: false,
    execute(client, message) {
        if (message.content.startsWith('Bouh !')) {message.react('👻')}
        if (message.author.bot) return;
        if (message.content.startsWith('Salut')) {message.react('👻')}
        if (message.content.startsWith('Salut !')) {message.channel.send('Bouh !')}
        if (!message.content.startsWith(prefix)) return;
        
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        if (cmdName.length == 0) return;
        
        let cmd = client.commands.get(cmdName);
        if (!cmd) return message.reply('cette commande n\'existe pas ! Ou elle n\'a pu être chargée.');

        if (cmd.ownerOnly) {
            if (message.author.id != ownerId) return message.reply('La seule personne pouvant taper cette commande est l\'owner du bot!')
        }

        if (!message.member.permissions.has([cmd.permissions])) return message.reply(`vous n'avez pas la/les permission(s) requise(s) (\`${cmd.permissions.join(', ')}\`) pour taper cette commande!`);

        if (cmd) cmd.run(client, message, args);
    }
  }