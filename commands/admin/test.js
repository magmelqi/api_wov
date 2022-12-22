const superagent = require('superagent').agent();
const dotenv = require('dotenv'); dotenv.config();
const { MessageEmbed, MessageAttachment } = require('discord.js');
const Canvas = require("canvas");
const Discord = require('discord.js')

module.exports = {
    name: "test",
    category: 'admin',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'test ',
    examples: ['test'],
    description: 'Commande test',
     async run (client, message, args) { let member = message.mentions.members.first()

        var canvas = Canvas.createCanvas(1024, 500);

        ctx = canvas.getContext("2d");

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        var rdm =getRandomInt(3); console.log(rdm);
        if (rdm ==0) {var background = await Canvas.loadImage("./Information/LoupBlanc2.png");}
        if (rdm ==1) {var background = await Canvas.loadImage("./Information/LoupDuo6.png");}
        if (rdm ==2) {var background = await Canvas.loadImage("./Information/DuoLoup2.png");}
        ctx.drawImage(background, 0, 0, 1024, 500);

        ctx.font = "42px Impact";
        if (rdm ==0) {
            ctx.fillStyle = "#FFFFFF";
            ctx.textAlign = "center";
            ctx.fillText(member.user.tag.toUpperCase(), 512, 410);
            ctx.fillText("BIENVENUE", 512, 360);}

        if (rdm ==1) {
            ctx.fillStyle = "#000000";
            ctx.textAlign = "center";
            ctx.fillText(member.user.tag.toUpperCase(), 512, 395);
            ctx.fillText("BIENVENUE", 512, 350);}
        
        if (rdm ==2) {
            ctx.fillStyle = "#FFFFFF";
            ctx.textAlign = "center";
            ctx.fillText(member.user.tag.toUpperCase(), 512, 410);
            ctx.fillText("BIENVENUE", 512, 360);}

        //ctx.fillText(member.user.tag.toUpperCase(), 512, 410)

        ctx.beginPath();
        ctx.arc(512, 166, 119, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        //var avatar = await Canvas.loadImage(member.user.displayAvatarURL({
        //    format: "png",
        //    size: 1024
        //}));

        var avatar = await Canvas.loadImage(member.user.displayAvatarURL({
            format: "png",
            size: 1024
        }));

        ctx.drawImage(avatar, 393, 47, 238, 238);

        var attachement = new MessageAttachment(canvas.toBuffer(), "welcome.png")

        message.channel.send({files: [attachement]})
    },

    runSlash: async(client, interaction) => { 
      
            interaction.reply('https://tenor.com/view/pretty-please-kitty-softpaws-puss-in-boots-the-last-wish-acting-cute-pleading-gif-25144556')
       }}
