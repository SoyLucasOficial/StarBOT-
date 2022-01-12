const Discord = require('discord.js');
module.exports = {
  name: "sugerencia",
  alias: [], 

execute (client, message, args){


let canal = client.channels.resolve("889869347726692393")

let sugerencia = args.join(" ")

if (!sugerencia){

  let embedargs = new Discord.MessageEmbed()
  .setDescription("❌ No has escrito ninguna sugerencia ❌")
  .setColor("RANDOM")

  return message.channel.send(embedargs);

}

let embedsugerencia2 = new Discord.MessageEmbed()
.setDescription("✅ Sugerencia enviada ✅")
.setColor("RANDOM")

message.channel.send(embedsugerencia2)

let embedsugerencia = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setTitle("Nueva Sugerencia")
.setDescription(sugerencia)
.setFooter("Sugerencia enviada por: " + message.author.username)
.setColor("RANDOM")
.setTimestamp()


canal.send(embedsugerencia).then(m => {
  m.react("✅")
  m.react("🤷‍♂️")
  m.react("❌")
})

 }

} 