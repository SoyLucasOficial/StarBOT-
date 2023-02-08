const Discord = require('discord.js');
module.exports = {
  name: "clear",
  alias: [], 

execute (client, message, args){


const botperms = message.guild.me.hasPermission("MANAGE_MESSAGES")
if(!botperms) return message.channel.send("❌ El bot no tiene permisos necesarios para eliminar mensajes. Solo ve a roles StarBOT y el permiso mandar de Gestionar Mensajes!!! ❌")

var perms = message.member.hasPermission("MANAGE_MESSAGES")
if(!perms) return message.channel.send("❌ No tienes permiso para eliminar mensajes. Operacion cancelada!!! ❌")

const valor = parseInt(args[0]);
if(!valor) return message.channel.send ("❌ Debes de escribir un numero valido de mensajes para eliminar!!! ❌")
if(valor >= 100) return message.channel.send("❌ No puedo eliminar mas de 99 mensajes a la vez!!! ❌")

message.channel.bulkDelete(valor + 1);
message.channel.send(`✅ Se han eliminado **${valor}** mensajes correctamente!!! ✅`)
 }

} 