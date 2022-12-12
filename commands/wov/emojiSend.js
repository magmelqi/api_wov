const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const {readdirSync, readFileSync} = require ("fs");
const dayjs = require ('dayjs');

module.exports = {
    name: "emoji",
    category: 'wov',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'emoji [nom de l\'émoji] [taille de l\'émoji]', 
    examples: ['emoji poo moyen'],
    description: 'Envoie un emojis',
       async run (client, message, args) {
        if (!args[0] || !args[0].match(/^(poo|alien|alien_ship|alien_surprise|angel_happy|angel_wings|anger|angry_farmer|angry_monster|bearok|bear_pink|bear_blue)$/)) return message.reply('merci d\'entrer un nom d\'émoji valide');
        if (!args[1] || !args[1].match(/^(petit|moyen|grand)$/)) return message.reply('merci d\'entrer une taille valide (`petit`/`moyen`/`grand`)');

            const emojis = JSON.parse(readFileSync(`././Information/emojis/${args[0]}.json`, 'utf-8')); console.log(emojis, message.author.username)
            var lien = emojis.url; var lien2 = lien.slice(0, -4)

        if (args[1] == 'petit') { message.channel.send(`${lien2}.png`)}
        if (args[1] == 'moyen') { message.channel.send(`${lien2}@2x.png`)}
        if (args[1] == 'grand') { message.channel.send(`${lien2}@3x.png`)}
    },
    options: [
        { 
            name: 'a-b',
            description: 'Choisir votre émoji',
            type: 'STRING',
            required: true,
            choices: [
                {name:"poo",value:"poo"},
                {name:"alien",value:"alien"},
                {name:"alien_ship",value:"alien_ship"},
                {name:"alien_surprise",value:"alien_surprise"},
                {name:"angelhappy",value:"angelhappy"},
                {name:"ange_l_wings",value:"ange_l_wings"},
                {name:"anger",value:"anger"},
                {name:"angry",value:"angry"},
                {name:"angry_farmer",value:"angry_farmer"},
                {name:"angry_monster",value:"angry_monster"},
                {name:"annoyed_monster",value:"annoyed_monster"},
                {name:"arachne",value:"arachne"},
                {name:"astronaut",value:"astronaut"},
                {name:"astronaut_cat",value:"astronaut_cat"},
                {name:"astronaut_unicorn",value:"astronaut_unicorn"},
                {name:"athena",value:"athena"},
                {name:"baby_griphon",value:"baby_griphon"},
                {name:"bard",value:"bard"},
                {name:"bearcry",value:"bearcry"},
                {name:"bearok",value:"bearok"},
                {name:"bear_blue",value:"bear_blue"},
                {name:"bear_pink",value:"bear_pink"},
                {name:"beer",value:"beer"},
                {name:"black_cat",value:"black_cat"},
                {name:"bloodmoon",value:"bloodmoon"}
            ]
            
        },
        { 
            name: 'taille',
            description: 'Choisir une taille pour l\'émoji',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'petit',
                    value: 'taille1',
                },
                {
                    name: 'moyen',
                    value: 'taille2',
                },
                {
                    name: 'grand',
                    value: 'taille3',
                }
            ]
            
        },
    ],
    async runSlash(client, interaction) {
        const evtChoices = interaction.options.getString('taille');
        const nameChoices = interaction.options.getString('a-b' ?? 'b-c');
        try {
            var DOr = readdirSync(`././Information/emojis/`, 'utf-8')} catch (err) {return interaction.reply({content: `Erreur dans la lecture des fichiers: ${err}`, ephemeral: true});}
            const emojis = JSON.parse(readFileSync(`././Information/emojis/${nameChoices}.json`, 'utf-8')); console.log(emojis, interaction.user.username)
            var lien = emojis.url; var lien2 = lien.slice(0, -4)

        if (evtChoices == 'taille1') {interaction.reply(`${lien2}.png`);}
        if (evtChoices == 'taille2') {interaction.reply(`${lien2}@2x.png`);}
        if (evtChoices == 'taille3') {interaction.reply(`${lien2}@3x.png`);}
  }}