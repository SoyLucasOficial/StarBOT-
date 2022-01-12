const Discord = require('discord.js');
const Levels = require('discord-xp')
Levels.setURL(process.env['MONGODB'])

module.exports = {
  name: "leaderboard",
  alias: ["lb"], 

async execute (client, message, args){

const rawLeaderboard =  await Levels.fetchLeaderboard(message.guild.id, 10)
if(rawLeaderboard.length < 1) return message.channel.send("❌ Error, este servidor no cuenta con Leaderboard ❌")
const leaderboard = await Levels.computeLeaderboard(
  client,
  rawLeaderboard,
  true
);
const lb = leaderboard.map(
  (e) =>
  `${e.position}. ${e.username}#${e.discriminator}\nXP: ${e.xp.toLocaleString()} | Level: ${e.level}`
);

const embedleaderboard = new Discord.MessageEmbed()
.setTitle(`Ranking de 10 miembros mas activos en: ${message.guild.name}`)
.setColor("GREEN")
.setDescription(`\n\n${lb.join("\n\n")}`)
.setTimestamp()

message.channel.send(embedleaderboard)


 }

}