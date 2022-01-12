const Discord = require('discord.js');
const spanishmemes = require('spanish.memes');

module.exports = {
  name: "meme",
  alias: [], 

execute (client, message, args){

let meme = spanishmemes.Meme()
const embed = new Discord.MessageEmbed()
.setImage(meme)
.setColor("RANDOM")
message.channel.send(embed)

 }

} 