const Discord = require('discord.js');
module.exports = {
  name: "emoji",
  alias: ["emote"], 

execute (client, message, args){


if(!args[0]) return message.channel.send("❌ Debes de escribir un emoji/emote ❌")

let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
if(!emoji) return message.channel.send("❌ Ese emoji no es válido, o no lo he encontrado en este servidor!!! ❌")

message.channel.send(emoji.url)

 }

} 