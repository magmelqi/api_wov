const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();


module.exports = {
    name: "test",
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'test',
    examples: ['test'],
    description: 'Commande test',
      run: (client, message, args) => {
        console.log('1');

setTimeout(() => {
    console.log('2');
}, 3000);
console.log('3');
setInterval(() =>{
    console.log('4')
}, 2000)
          

    },

    runSlash: async(client, interaction) => {

       }}
