const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
  name: "warn",
  alias: [],

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATROR")
  if(!perms) return message.channel.send("❌  No tienes el permiso de Admin en el server. No podras utilizar el comando ❌")

 let persona = message.mentions.users.first()
 if(!persona) return message.channel.send("❌ Debes de mencionar al un usuario para poner la advertencia ❌")

 var razon = args.slice(1).join(" ")
 if(!razon){
   razon = 'No especificado'
  }

 if(!warns.tiene(`${message.guild.id}.${persona.id}`))
 warns.establecer(`${message.guild.id}.${persona.id}`, 0)

 warns.sumar(`${message.guild.id}.${persona.id}`, 1)

 messag.channel.send(`El administrador **${message.author.tag}** puso una advertencia a **${persona.tag}** por: **${razon}**`)

 persona.send(`Un administrador te ha puesto una advertencia en **${message.guils.name}** por **${razon}**`)

 }

} 