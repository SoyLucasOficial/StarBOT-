const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const distube = require('distube')

module.exports = {
  name: "play",
  alias: ["p"],

execute (client, message, args){

const cancion = args.join(" ")
if (!cancion) return message.channel.send("❌ Debes de elegir una cancion ❌")

if(!message.member.voice.channel) return message.channel.send ("❌ Debes de unirte a un canal de voz para poder poner musica ❌")

if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("❌ Debes de estar en el mismo canal de voz que yo ❌")

client.distube.play(message, cancion)

 }

} 