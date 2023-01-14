const Logger = require ('../../utils/Logger')

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        let guildsCount = await client.guilds.fetch();
        let usersCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

        Logger.client(`- prêt à être utilisé par ${usersCount} utilisateurs sur ${guildsCount.size} serveur`);

        client.user.setPresence({ activities: [{ name: 'les bêtises de magmelqi', type: 'WATCHING'}], status: 'online'}) //dnd, invisible, online, idle
    // WATCHING PLAYING
        const devGuild = await client.guilds.cache.get('1063506732086743061'); console.log(devGuild)
        devGuild.commands.set(client.commands.map(cmd => cmd));
      
    
    },
  };