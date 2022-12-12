const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const {writeFileSync, readFileSync, readdirSync} = require ("fs");

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
        const Messageclan = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {return message.channel.send(`Erreur a la 1ère requête: ${err}`), console.log(err)});
        var objErr= JSON.stringify(Messageclan);

        setTimeout(async()=> {var objErr= JSON.stringify(Messageclan);
          if (objErr == undefined) {console.log('yo')
            const Messageclan = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
          .set( 'Authorization', process.env.WOV_TOKEN)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .catch((err) => {message.channel.send(`Erreur a la 2ème requêtes\n\`3ème tentaives en cours...\` Ah bah il y en a pas flemme de mettre une 3ème requêtes`);return console.log(err)}); 
          var text= Messageclan.text} else {var text= Messageclan.text}




        const body = Messageclan.body
        var name = body.username
        var connexion = body.lastOnline
        var connexionT = JSON.stringify(connexion); var heure = connexionT.slice(12, 14); var minute = connexionT.slice(15, 17)
        console.log(heure, minute); var Co = `${heure}:${minute}`; message.channel.send(`Dernière connexion de ${name} à: ${Co}`)
        const info = {
          Pseudo: name,
          lastOnline: Co
      }
      const objectToJson = JSON.stringify(info) ;writeFileSync(`././Information/secret/secret.json`, objectToJson)
        message.channel.send(`Tracker sur ${nom}: on`)
        setInterval(async()=> {
        const Messageclan = await superagent.get(`https://api.wolvesville.com/players/search?username=${nom}`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(`Erreur a la requête`); console.log(err)});
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
        else if (heure !== heureAncienne || minute !== minuteAncienne) {message.channel.send(`${name} s'est connecté`)
        const info = {
            Pseudo: name,
            lastOnline: Co
        };const objectToJson = JSON.stringify(info) ;writeFileSync(`././Information/secret/secret.json`, objectToJson)
    }
        else if (minute < minuteAncienne+13 && heure == heureAncienne || heure == heureAncienne && minuteAncienne > 55 && 13 > minute > 05)         
        {message.channel.send(`${name} s'est déconnecté`)
        const info = {
          Pseudo: name,
          lastOnline: Co
      };const objectToJson = JSON.stringify(info) ;writeFileSync(`././Information/secret/secret.json`, objectToJson)
    }},500000)},5000)
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
