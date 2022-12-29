const { readFileSync } = require ("fs");
const prefix = JSON.parse(readFileSync(`././Information/prefix/prefix.json`, 'utf-8'))
const ownerId = '385172057433964556';

module.exports = {
    name: "messageCreate",
    once: false,
    async execute(client, message) {
        if (message.author.bot) return;
        if (message.content.startsWith('Slt')) {message.react('👻')}
        if (message.content.startsWith('slt')) {message.react('👻')}
        if (message.content.startsWith('Bouh')) {message.react('👻')}
        if (message.content.startsWith('bouh')) {message.react('👻')}
        if (message.content.startsWith('Salut')) {message.react('👻')}
        if (message.content.startsWith('salut')) {message.react('👻')}
        if (message.content.startsWith('Salut !')) {message.channel.send('Bouh !')}
        if (!message.content.startsWith(prefix.prefix)) return;

        let guildSettings = await client.getGuild(message.guild)

        if (!guildSettings) {
            await client.createGuild(message.guild);
            guildSettings = await client.getGuild(message.guild)
        }
        
        const args = message.content.slice(prefix.prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        if (cmdName.length == 0) return;
        
        let cmd = client.commands.get(cmdName);
        if (!cmd) return console.log('cette commande n\'existe pas ! Ou elle n\'a pu être chargée.');

        if (cmd.ownerOnly) {
            if (message.author.id != ownerId) return message.reply('La seule personne pouvant taper cette commande est l\'owner du bot!')
        }

        if (!message.member.permissions.has([cmd.permissions])) return message.reply(`vous n'avez pas la/les permission(s) requise(s) (\`${cmd.permissions.join(', ')}\`) pour taper cette commande!`);

        if (cmd) cmd.run(client, message, args);
    }
  }