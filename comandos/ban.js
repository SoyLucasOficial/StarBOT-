const Discord = require('discord.js');
module.exports = {
  name: "ban",
  alias: [], 

execute (client, message, args){


var botperms = message.guild.me.hasPermission("BAN_MEMBERS")
if(!botperms) return message.channel.send("❌ StarBOT no tiene permisos para banear miembros por favor active el permiso desde Roles StarBOT y activar Banear Miembros ❌")

var perms = message.member.hasPermission("BAN_MEMBERS")
if(!perms) return message.channel.send("❌ No tienes permisos para banear a otras personas en el server. Operacion cancelada!!! ❌")

const usuario = message.mentions.members.first()
if(!usuario) return message.channel.send("❌ Debes de mencionar al usuario que quieres banear de el servidor ❌")
if(usuario.id === message.author.id) return message.channel.send("❌ No puedes banearte a ti mismo. Operacion cancelada!!! ❌")

const razon = args.slice(1).join(' ')
 if(!razon) return message.channel.send("❌ Debes de escribir una razon para banear al usuario!!! ❌")

usuario.ban({ reason: razon })

message.channel.send(`✅ Se ha baneado exitosamente a **${usuario}** ✅`)

 }

} 