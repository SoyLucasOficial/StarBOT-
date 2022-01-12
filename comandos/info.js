const Discord = require('discord.js');

module.exports = {
  name: "info",
  alias: [], 

execute (client, message, args){

  const info = new Discord.MessageEmbed()
  .setAuthor(`Autor: SoyLucax#8607`)
  .setTitle("Informacion de StarBOT")
  .setDescription("Esta es la informacion de programacion de StarBOT: \n \n Programador: SoyLucax#8607 \n \n Lenguajes de programacion: \n \n JavaScript <= (JS) \n \n Discord.JavaScript <= (Discord.js) \n \n Equipo de programacion: Funny Games \n \n Patrocinadores / Aliados: \n \n Liga De Gamers: \n \n https://discord.gg/exCDvRxQ7S")
  .setTimestamp()
  .setColor("#2CF041")
  .setThumbnail("https://cdn.discordapp.com/avatars/886658241289912430/06a96ac669b300158b8b36b59909427f.webp?size=1024")

  message.channel.send(info)


 }

}