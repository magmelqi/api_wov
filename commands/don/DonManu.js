const {writeFileSync, readFileSync} = require ("fs");
const dotenv = require('dotenv'); dotenv.config();

module.exports = {
    name: "donmanu",
    category: 'don',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'donmanu',
    examples: ['donmanu'],
    description: 'Ajoute/retire de l\'or ou des gemmes à une personne donnée',
      run: async(client, message, args) => {

        if (!args[0] || !args[0].match(/^(or|gemme|Or|Gemme)$/)) return message.reply('merci d\'entrer un évenement valide (`\or`/`\gemme\`)');
        if (!args[1]) {return message.reply('Merci de rentrer le pseudo de la personne')}
        if (!args[2]) {return message.reply('Merci de rentrer le montant que vous voulez ajouter/retirer')}

        if (args[0] == "or" ||args[0] ==  "Or") {
         try{ var orErg = JSON.parse(readFileSync(`././Information/Or/Member-Pseudo/${args[1]}.json`, 'utf-8'))}catch(err) {return message.channel.send(`Le pseudo: ${args[1]} n'est pas présent dans la base de donnée`)}
         var or = orErg.Or -1 +1; var gold = args[2] -1 +1
         const info = {
          Pseudo: orErg.Pseudo,
          PlayerId: orErg.PlayerId,
          DonId: orErg.DonId,
          Or: or + gold,
          Création: orErg.Création,
          Heure: orErg.Heure
        }; const objectToJson = JSON.stringify(info)
        writeFileSync(`././Information/Or/Member-Id/${orErg.PlayerId}.json`, objectToJson)
        writeFileSync(`././Information/Or/Member-Pseudo/${orErg.Pseudo}.json`, objectToJson)
        message.channel.send(`${args[1]} posséde maintement ${or + gold} or`)
        }
        else if (args[0] == "gemme" ||args[0] ==  "Gemme") {
          try{ var gemmeErg = JSON.parse(readFileSync(`././Information/Gemme/Member-Pseudo/${args[1]}.json`, 'utf-8'))}catch(err) {return message.channel.send(`Le pseudo: ${args[1]} n'est pas présent dans la base de donnée`)}
         var gemme = orErg.Gemme -1 +1; var gems = args[2] -1 +1
         const info = {
          Pseudo: gemmeErg.Pseudo,
          PlayerId: gemmeErg.PlayerId,
          DonId: gemmeErg.DonId,
          Gemme: gemme + gems,
          Création: gemmeErg.Création,
          Heure: gemmeErg.Heure
        }; const objectToJson = JSON.stringify(info)
        writeFileSync(`././Information/Gemme/Member-Id/${gemmeErg.PlayerId}.json`, objectToJson)
        writeFileSync(`././Information/Gemme/Member-Pseudo/${gemmeErg.Pseudo}.json`, objectToJson)
        message.channel.send(`${args[1]} posséde maintement ${gemme + gems} gemme`)
        }
        else {message.channel.send('Erreur dans le type du don (or/gemme)')}
          },
          options:[
            {
                name: "type",
                description: "taper le type de don",
                type: "STRING",
                required: true,
                choices: [
                  {
                      name: 'or',
                      value: 'or',
                  },
                  {
                      name: 'gemme',
                      value: 'gemme',
                  },
                ]
            },
            {
              name: "pseudo",
              description: "tapez le pseudo",
              type: "STRING",
              required: true,
            },
            {
              name: "montant",
              description: "tapez le montant que vous voulez retirer/ajouter",
              type: "NUMBER",
              required: true,
            },
          ],
      runSlash: async (client, interaction) => {
        const typeChoices = interaction.options.getString('type');
        const pseudo = interaction.options.getString('pseudo');
        const montant = interaction.options.getNumber('montant');

        if (typeChoices == "or") {
        try{ var orErg = JSON.parse(readFileSync(`././Information/Or/Member-Pseudo/${pseudo}.json`, 'utf-8'))}catch(err) {interaction.channel.send(`Le pseudo: ${pseudo} n'est pas présent dans la base de donnée`);return console.log(err)}
        var or = orErg.Or -1 +1; var gold = montant -1 +1
        const info = {
         Pseudo: orErg.Pseudo,
         PlayerId: orErg.PlayerId,
         DonId: orErg.DonId,
         Or: or + gold,
         Création: orErg.Création,
         Heure: orErg.Heure
       }; const objectToJson = JSON.stringify(info)
       writeFileSync(`././Information/Or/Member-Id/${orErg.PlayerId}.json`, objectToJson)
       writeFileSync(`././Information/Or/Member-Pseudo/${orErg.Pseudo}.json`, objectToJson)
       interaction.channel.send(`${pseudo} posséde maintement ${or + gold} or`)
       }
       else if (typeChoices == "gemme") {
         try{ var gemmeErg = JSON.parse(readFileSync(`././Information/Gemme/Member-Pseudo/${pseudo}.json`, 'utf-8'))}catch(err) {return interaction.channel.send(`Le pseudo: ${pseudo} n'est pas présent dans la base de donnée`)}
        var gemme = orErg.Gemme -1 +1; var gems = montant -1 +1
        const info = {
         Pseudo: gemmeErg.Pseudo,
         PlayerId: gemmeErg.PlayerId,
         DonId: gemmeErg.DonId,
         Gemme: gemme + gems,
         Création: gemmeErg.Création,
         Heure: gemmeErg.Heure
       }; const objectToJson = JSON.stringify(info)
       writeFileSync(`././Information/Gemme/Member-Id/${gemmeErg.PlayerId}.json`, objectToJson)
       writeFileSync(`././Information/Gemme/Member-Pseudo/${gemmeErg.Pseudo}.json`, objectToJson)
       interaction.channel.send(`${pseudo} posséde maintement ${gemme + gems} gemme`)
       }
       else {interaction.channel.send('Erreur dans le type du don (or/gemme)')}
      }
    }