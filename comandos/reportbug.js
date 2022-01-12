const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "reportbug",
  alias: [],

execute (client, message, args){

const reporte = args.join(" ")
if(!reporte) return message.channel.send("❌ Debes de escribir el bug ❌")

const embed = new Discord.MessageEmbed()

.setTitle("Reporte!!!")
.setDescription(`El usuario **${message.author.username}** ha hecho un reporte desde el servidor **${message.guild.name}** a continuacion el **Reporte**:\n\n**${reporte}**`)
.setFooter(`⚠ Reporte de ${message.author.username} ⚠`)
.setColor("GREEN")

client.users.cache.get('789128149744877569').send(embed)

 }

} 