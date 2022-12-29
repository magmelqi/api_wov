const { Guild } = require('../../models/index')

module.exports = {
    name: "guildCreate",
    once: false,
    async execute(client, guild) {
      const createdGuild= await new Guild({ id: guild.id });
      createdGuild.save().then(g => console.log(`Nouveau serveur (${g.id})`))
    },
  };