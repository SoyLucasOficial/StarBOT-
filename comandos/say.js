const Discord = require('discord.js');

module.exports = {
  name: "say",
  alias: [], 

execute (client, message, args){

  const texto = args.join(' ')
  if(!texto) return message.channel.send("❌ Debes de introducir un texto despues del comando!!! ❌")

  message.channel.send(texto)

 }

} 