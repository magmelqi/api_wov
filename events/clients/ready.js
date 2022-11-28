const Logger = require ('../../utils/Logger')

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        let guildsCount = await client.guilds.fetch();
        let usersCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

        Logger.client(`- prêt à être utilisé par ${usersCount} utilisateurs sur ${guildsCount.size} serveur`);

        client.user.setPresence({ activities: [{ name: 'BOUH', type: 'PLAYING'}], status: 'idle'})

        const devGuild = await client.guilds.cache.get('559352487430193180');
        devGuild.commands.set(client.commands.map(cmd => cmd));
        const devGuild2 = await client.guilds.cache.get('724207157419180062',);
        devGuild2.commands.set(client.commands.map(cmd => cmd));
        
    },
  };