const Discord = require('discord.js');

module.exports = {
  name: "funnygames",
  alias: [], 

execute (client, message, args){

  const embed = new Discord.MessageEmbed()
  .setAuthor(`Embed pedido por: Funny Games`)
  .setTitle("Que es Funny Games???")
  .setDescription("Funny Games es un grupo de experiencias en **ROBLOX** y **BOTS** en **DISCORD** Que obviamente creo **StarBOT** Aqui mas informacion: \n \n Creaciones de Funny Games: \n \n StarBOT \n \n RichLand \n \n Socios de Funny Games: Liga de Gamers https://discord.gg/Yxerz3jpcF \n \n Contacto al creador: SoyLucax#8607 \n \n Sitio Web: https://funnygameswebsite.wixsite.com/home \n \n Esta es toda la informacion de Funny Games recuerden si tienen dudas pueden contactar al creador de Funny Games o Al Staff del servidor")
  .setTimestamp()
  .setColor("GREEN")
  .setThumbnail("https://cdn.discordapp.com/attachments/891001269051863051/891005290659606558/Funny_Games.png")

  message.channel.send(embed)


 }

}