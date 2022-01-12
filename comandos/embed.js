const Discord = require('discord.js');

module.exports = {
  name: "jdaiojsdiasdaf",
  alias: [], 

execute (client, message, args){

  const embed = new Discord.MessageEmbed()
  .setAuthor(`Pedido por Liga De Gamers`)
  .setTitle("Bienvenid@")
  .setDescription("Verificate tan solo pulsando el boton de ✅ abajo")
  .setColor("#008f39")
  .setThumbnail("https://lh3.googleusercontent.com/nUzwiPShpPGi5fwUd_wla3gU1OLIDAlU6Ur1NLXwj97AUZNDvYcsQJxg95Gsx7daoyZHKv4=s85")
  

  message.channel.send(embed)


 }

}