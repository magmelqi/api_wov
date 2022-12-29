const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const {writeFileSync, readFileSync, readdirSync} = require ("fs");
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "tracker",
  category: 'secret',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: true,
  usage: 'tracker',
  examples: ['tracker'],
  description: "Suspens",
    async run (client, message, args) { 
        var nom = message.content.substring(9).trim(); console.log(nom)

        const Statut = await message.channel.send(`Tracker sur ${nom}:`)
        const Merr = await message.channel.send(`- - - - - - -`)

        const Messageclan = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {Merr.edit({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
          else if (err == "Error: Not Found") {return Merr.edit({content:`Pseudo inexistant`})}
          else {return Merr.edit({content:`Erreur: ${err}`})}});
        var objErr= JSON.stringify(Messageclan);

        
        if (objErr !== undefined) {var body = Messageclan.body}
        var i = 2
        while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
          const Messageclan = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {
          if (err == "Error: Too Many Requests") {Merr.edit({content: `Erreur sur la recherche du \`profil\`, tentatives: \`${i}\``})}
          else if (err == "Error: Not Found") {return Merr.edit({content:`Pseudo inexistant`})}
          else {return Merr.edit({content:`Erreur: ${err}`})}});
          var objErr= JSON.stringify(Messageclan);
          try {var body = await Messageclan.body}catch(err) {}; var i = i+1}
          Merr.delete()
          
        var name = body.username
        var connexion = body.lastOnline
        var connexionT = JSON.stringify(connexion); var heure = connexionT.slice(12, 14); var minute = connexionT.slice(15, 17)
        console.log(heure, minute); var Co = `${heure}:${minute}`;
        const info = {
          Pseudo: name,
          lastOnline: Co
      }
      const objectToJson = JSON.stringify(info) ;writeFileSync(`././Information/secret/secret.json`, objectToJson)

      var CoA = `${heure-1+2}:${minute}`
      const embed = new MessageEmbed()
      .setTitle(`Statut de connexion`)
      .setThumbnail(body.equippedAvatar.url)
      .setColor('LIGHT_GREY')
      .setAuthor({name: nom})
      .addFields(
       { name: 'Dernière connexion:', value: `\`\`\`${CoA}\`\`\``, inline: true},
       { name: "Activité", value: `\`\`\`none\`\`\``, inline: true},
      )
      .setTimestamp()
      .setFooter({text: name,iconeURL: message.author.displayAvatarURL() })
      
      Statut.edit({ content: ' ', embeds: [embed] });
      var check = 5
        var t = "yo"
        while(t == "yo") {
          const Messageclan = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {Merr.edit({content:"Erreur a la 1ère requête\n\`2ème tentatives en cours...\`"})}
            else if (err == "Error: Not Found") {return Merr.edit({content:`Pseudo inexistant`})}
            else {return Merr.edit({content:`Erreur: ${err}`})}});
          var objErr= JSON.stringify(Messageclan);
  
          
          if (objErr !== undefined) {var body = Messageclan.body}
          var i = 2
          while (objErr == undefined) {await new Promise(resolve => setTimeout(resolve, 1000))
            const Messageclan = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {
            if (err == "Error: Too Many Requests") {Merr.edit({content: `Erreur sur la recherche du \`profil\`, tentatives: \`${i}\``})}
            else if (err == "Error: Not Found") {return Merr.edit({content:`Pseudo inexistant`})}
            else {return Merr.edit({content:`Erreur: ${err}`})}});
            var objErr= JSON.stringify(Messageclan);
            try {var body = await Messageclan.body}catch(err) {}; var i = i+1}
            Merr.delete()

        var name = body.username
        var connexion = body.lastOnline
        var connexionT = JSON.stringify(connexion); var heure = connexionT.slice(12, 14); var minute = connexionT.slice(15, 17)
        console.log(heure, minute); var Co = `${heure}:${minute}`

        const bodyConnexionAncienne = JSON.parse(readFileSync(`Information/secret/secret.json`, 'utf-8'))
        var connexionAncienne = bodyConnexionAncienne.lastOnline; var connexionAncienneT = JSON.stringify(connexionAncienne)
        var heureAncienne = connexionAncienneT.slice(1, 3); var minuteAncienne = connexionAncienneT.slice(4, 6)
        console.log(heureAncienne, minuteAncienne)

        if (heure !== heureAncienne || minute !== minuteAncienne) {
          
          if (check !== 1) {message.author.send(`${nom} s'est connecté`); var check = 1}

          var CoA = `${heure-1+2}:${minute}`
          const embed = new MessageEmbed()
          .setTitle(`Statut de connexion`)
          .setThumbnail(body.equippedAvatar.url)
          .setColor('GREEN')
          .setAuthor({name: nom})
          .addFields(
           { name: 'Dernière connexion:', value: `\`\`\`${CoA}\`\`\``, inline: true},
           { name: "Activité", value: `\`\`\`connecté\`\`\``, inline: true},
          )
          .setTimestamp()
          .setFooter({text: name,iconeURL: message.author.displayAvatarURL() })
          
          Statut.edit({ content: ' ', embeds: [embed] });

        const info = {
            Pseudo: name,
            lastOnline: Co
        };const objectToJson = JSON.stringify(info) ;writeFileSync(`././Information/secret/secret.json`, objectToJson)
    }
        else if (minute == minuteAncienne && heure == heureAncienne) {
          
          if (check !== 0) {message.author.send(`${nom} s'est déconnecté`); var check = 0}

          var CoA = `${heure-1+2}:${minute}`
          const embed = new MessageEmbed()
          .setTitle(`Statut de connexion`)
          .setThumbnail(body.equippedAvatar.url)
          .setColor('RED')
          .setAuthor({name: nom})
          .addFields(
           { name: 'Dernière connexion:', value: `\`\`\`${CoA}\`\`\``, inline: true},
           { name: "Activité", value: `\`\`\`déconnecté\`\`\``, inline: true},
          )
          .setTimestamp()
          .setFooter({text: name,iconeURL: message.author.displayAvatarURL() })
          
          Statut.edit({ content: ' ', embeds: [embed] });


        const info = {
          Pseudo: name,
          lastOnline: Co
      };const objectToJson = JSON.stringify(info); writeFileSync(`././Information/secret/secret.json`, objectToJson) 
    }await new Promise(resolve => setTimeout(resolve, 600000))}
    },
    options:[
      {
          name: "pseudo",
          description: "taper le pseudo pour voir quand la personne se connecte",
          type: "STRING",
          required: true,
      }],
    async runSlash (client, interaction) {
      
      var nom = interaction.options.getString('pseudo');
      const Messageclan = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {return interaction.reply({content:`Erreur a la 1ère requête: ${err}`, ephemeral: true}), console.log(err)});
      var objErr= JSON.stringify(Messageclan);
      if (objErr !== undefined) {interaction.reply({content:`En cours d'éxécution`, ephemeral:true})}

      setTimeout(async()=> {var objErr= JSON.stringify(Messageclan);
        if (objErr == undefined) {console.log('yo')
          const Messageclan = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {interaction.followUp({content:`Erreur a la 2ème requêtes\n\`3ème tentaives en cours...\` Ah bah il y en a pas flemme de mettre une 3ème requêtes`, ephemeral:true});return console.log(err)}); 
        var text= Messageclan.text} else {var text= Messageclan.text}




      const body = Messageclan.body
      var name = body.username
      var connexion = body.lastOnline
      var connexionT = JSON.stringify(connexion); var heure = connexionT.slice(12, 14); var minute = connexionT.slice(15, 17)
      console.log(heure, minute); var Co = `${heure}:${minute}`; interaction.followUp({content:`Dernière connexion de ${name} à: ${Co}`, ephemeral:true})
      const info = {
        Pseudo: name,
        lastOnline: Co
    }
    const objectToJson = JSON.stringify(info) ;writeFileSync(`././Information/secret/secret.json`, objectToJson)
      interaction.channel.send(`Tracker sur ${nom}: on`)
      setInterval(async()=> {
      const Messageclan = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
      .set( 'Authorization', process.env.WOV_TOKEN)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .catch((err) => {interaction.followUp({content:`Erreur a la requête`, ephemeral: true}); console.log(err)});
      const body = Messageclan.body
      var name = body.username
      var connexion = body.lastOnline
      var connexionT = JSON.stringify(connexion); var heure = connexionT.slice(12, 14); var minute = connexionT.slice(15, 17)
      console.log(heure, minute); var Co = `${heure}:${minute}`

      const bodyConnexionAncienne = JSON.parse(readFileSync(`Information/secret/secret.json`, 'utf-8'))
      var connexionAncienne = bodyConnexionAncienne.lastOnline; var connexionAncienneT = JSON.stringify(connexionAncienne)
      var heureAncienne = connexionAncienneT.slice(1, 3); var minuteAncienne = connexionAncienneT.slice(4, 6)
      console.log(heureAncienne, minuteAncienne)

      if (heure == heureAncienne && minute == minuteAncienne || heure-1 == heureAncienne && minuteAncienne > 55 && minute < 05|| heure == heureAncienne && minute-1+1 < minuteAncienne-1+7) {
        const info = {
          Pseudo: name,
          lastOnline: Co
      };const objectToJson = JSON.stringify(info) ;writeFileSync(`././Information/secret/secret.json`, objectToJson);return}
      else if (heure !== heureAncienne || minute !== minuteAncienne) {interaction.channel.send(`${name} s'est connecté`)
      const info = {
          Pseudo: name,
          lastOnline: Co
      };const objectToJson = JSON.stringify(info) ;writeFileSync(`././Information/secret/secret.json`, objectToJson)
  }
      else if (minute < minuteAncienne+13 && heure == heureAncienne || heure == heureAncienne && minuteAncienne > 55 && 13 > minute > 05)         
      {interaction.channel.send(`${name} s'est déconnecté`)
      const info = {
        Pseudo: name,
        lastOnline: Co
    };const objectToJson = JSON.stringify(info) ;writeFileSync(`././Information/secret/secret.json`, objectToJson)
  }},500000)},5000)
  },
};
