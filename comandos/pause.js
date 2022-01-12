const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const distube = require("distube")

module.exports = {
  name: "pause",
  alias: ["stop"],

execute (client, message, args){

 if(!message.member.voice.channel) return message.channel.send("❌ Debes de unirte al canal de voz de musica ❌")

 if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("❌ Debes de estar en el mismo canal de voz que yo ❌")

 const serverQueue = client.distube.getQueue(message)

 if(!serverQueue) return message.channel.send ("❌ Actualmente no se esta reproduciendo ninguna cancion ❌")

 if(serverQueue.pause) return message.channel.send("❌ La musica ya esta pausada ❌")

 client.distube.pause(message)

 message.channel.send("✅ La musica se ha pausado correctamente :-D ✅")





 }

} 