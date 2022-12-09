const { MessageEmbed } = require('discord.js');
const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();

module.exports = {
  name: "role",
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'role',
  examples: ['role'],
  description: "La commande role envoie la liste du mode de jeu choisis",
    async run (client, message, args) {
        if (!args[0] || !args[0].match(/^(rapide|quick)$/)) return message.reply('merci d\'entrer un mot de jeu valide en anglais ou en français');
        if (args[0] == "rapide" || "quick") {var MDJ="RAPIDE"}
        const role = await superagent.get(`https://api.wolvesville.com/roleRotations`)
        .set( 'Authorization', process.env.WOV_TOKEN)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .catch((err) => {message.channel.send(`Erreur a la 1ère requête: ${err}`); console.log(err)});
        var body = role.body;
        var test = body[0].gameMode; console.log(test)
        var test = body[1].gameMode; console.log(test)
        var test = body[2].gameMode; console.log(test)
        var test = body[3].gameMode; console.log(test)
        var test = body[4].gameMode; console.log(test)

        if (MDJ == "RAPIDE") {
        var RoleQuick = body[4].roleRotations[0].roleRotation.roles;

        var Rol1Q = RoleQuick[1-1]; if (Rol1Q[0].probability !==1) {
          console.log(`${Rol1Q[0].role} avec ${Rol1Q[0].probability} de chance ou ${Rol1Q[1].role} avec ${Rol1Q[1].probability} de chance`)} else {console.log(Rol1Q[0].role)}
        var Rol2Q = RoleQuick[2-1]; if (Rol2Q[0].probability !==1) {
          console.log(`${Rol2Q[0].role} avec ${Rol2Q[0].probability} de chance ou ${Rol2Q[1].role} avec ${Rol2Q[1].probability} de chance`)} else {console.log(Rol2Q[0].role)}
        var Rol3Q = RoleQuick[3-1]; if (Rol3Q[0].probability !==1) {
          console.log(`${Rol3Q[0].role} avec ${Rol3Q[0].probability} de chance ou ${Rol3Q[1].role} avec ${Rol3Q[1].probability} de chance`)} else {console.log(Rol3Q[0].role)}
        var Rol4Q = RoleQuick[4-1]; if (Rol4Q[0].probability !==1) {
          console.log(`${Rol4Q[0].role} avec ${Rol4Q[0].probability} de chance ou ${Rol4Q[1].role} avec ${Rol4Q[1].probability} de chance`)} else {console.log(Rol4Q[0].role)}
        var Rol5Q = RoleQuick[5-1]; if (Rol5Q[0].probability !==1) {
          console.log(`${Rol5Q[0].role} avec ${Rol5Q[0].probability} de chance ou ${Rol5Q[1].role} avec ${Rol5Q[1].probability} de chance`)} else {console.log(Rol5Q[0].role)}
        var Rol6Q = RoleQuick[6-1]; if (Rol6Q[0].probability !==1) {
          console.log(`${Rol6Q[0].role} avec ${Rol6Q[0].probability} de chance ou ${Rol6Q[1].role} avec ${Rol6Q[1].probability} de chance`)} else {console.log(Rol6Q[0].role)}
        var Rol7Q = RoleQuick[7-1]; if (Rol7Q[0].probability !==1) {
          console.log(`${Rol7Q[0].role} avec ${Rol7Q[0].probability} de chance ou ${Rol7Q[1].role} avec ${Rol7Q[1].probability} de chance`)} else {console.log(Rol7Q[0].role)}
        var Rol8Q = RoleQuick[8-1]; if (Rol8Q[0].probability !==1) {
          console.log(`${Rol8Q[0].role} avec ${Rol8Q[0].probability} de chance ou ${Rol8Q[1].role} avec ${Rol8Q[1].probability} de chance`)} else {console.log(Rol8Q[0].role)}
        var Rol9Q = RoleQuick[9-1]; if (Rol9Q[0].probability !==1) {
          console.log(`${Rol9Q[0].role} avec ${Rol9Q[0].probability} de chance ou ${Rol9Q[1].role} avec ${Rol9Q[1].probability} de chance`)} else {console.log(Rol9Q[0].role)}
        var Rol10Q = RoleQuick[10-1]; if (Rol10Q[0].probability !==1) {
          console.log(`${Rol10Q[0].role} avec ${Rol10Q[0].probability} de chance ou ${Rol10Q[1].role} avec ${Rol10Q[1].probability} de chance`)} else {console.log(Rol10Q[0].role)}
        var Rol11Q = RoleQuick[11-1]; if (Rol11Q[0].probability !==1) {
          console.log(`${Rol11Q[0].role} avec ${Rol11Q[0].probability} de chance ou ${Rol11Q[1].role} avec ${Rol11Q[1].probability} de chance`)} else {console.log(Rol11Q[0].role)}
        var Rol12Q = RoleQuick[12-1]; if (Rol12Q[0].probability !==1) {
          console.log(`${Rol12Q[0].role} avec ${Rol12Q[0].probability} de chance ou ${Rol12Q[1].role} avec ${Rol12Q[1].probability} de chance`)} else {console.log(Rol12Q[0].role)}
        var Rol13Q = RoleQuick[13-1]; if (Rol13Q[0].probability !==1) {
          console.log(`${Rol13Q[0].role} avec ${Rol13Q[0].probability} de chance ou ${Rol13Q[1].role} avec ${Rol13Q[1].probability} de chance`)} else {console.log(Rol13Q[0].role)}
        var Rol14Q = RoleQuick[14-1]; if (Rol14Q[0].probability !==1) {
          console.log(`${Rol14Q[0].role} avec ${Rol14Q[0].probability} de chance ou ${Rol14Q[1].role} avec ${Rol14Q[1].probability} de chance`)} else {console.log(Rol14Q[0].role)}
        var Rol15Q = RoleQuick[15-1]; if (Rol15Q[0].probability !==1) {
         console.log(`${Rol15Q[0].role} avec ${Rol15Q[0].probability} de chance ou ${Rol15Q[1].role} avec ${Rol15Q[1].probability} de chance`)} else {console.log(Rol15Q[0].role)}
        var Rol16Q = RoleQuick[16-1]; if (Rol16Q[0].probability !==1) {
          console.log(`${Rol16Q[0].role} avec ${Rol16Q[0].probability} de chance ou ${Rol16Q[1].role} avec ${Rol16Q[1].probability} de chance`)} else {console.log(Rol16Q[0].role)}}
    },
    async runSlash (client, interaction) {
  },
};
