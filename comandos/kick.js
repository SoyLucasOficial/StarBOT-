const Discord = require('discord.js');

module.exports = {
  name: "kick",
  alias: [], 

execute (client, message, args){

var botperms = message.guild.me.hasPermission("KICK_MEMBERS")
if(!botperms) return message.channel.send("❌ StarBOT no tiene permisos para expuulsar miembros. Por favor active el permiso desde roles y el rol se debe llamar StarBOT ❌")

var perms = message.member.hasPermission("KICK_MEMBERS")
if(!perms) return message.channel.send("❌ No tienes permisos para expulsar a otras personas en el server. Operacion rechazada!!! ❌")

  const usuario = message.mentions.members.first()
  if(!usuario) return message.channel.send("❌ Debes de mencionar al usuario que quieres expulsar!!! ❌")
  if(usuario.id === message.author.id) return message.channel.send("❌ No puedes expulsarte a ti mismo. Operacion cancelada!!! ❌")

  const razon = args.slice(1).join(' ')
  if(!razon) return message.channel.send("❌ Debes de escribir una razon para expulsar al usuario!!! ❌")

  message.guild.member(usuario).kick(razon);

  message.channel.send(`✅ Se ha expulsado / kickeado correctamente a ${usuario} correctamente. Razon: ${razon} ✅`)

 }

} 