const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "youtuber",
  alias: ["elmejor"], 

execute (client, message, args){

  const embed = new Discord.MessageEmbed()
  .setTitle("MrBeast")
  .setDescription("MrBeast es considerado uno de los mejores youtubers del mundo por su gran humildes hacia la gente. Hay rumores de que se va a morir por su enfermedad Crohn, Pero sinceramente el equipo de FunnyGames y StarBOT no queremos que MrBeast se valla de este mundo.")
  .setColor("#73C2FB")
  .setFooter("Eres un crack MrBeast ;)")
  .setImage("https://yt3.ggpht.com/ytc/AKedOLSJtY3pQz27cdDocQYtQs7SS3JwSn1UQUYmj4Qd0Q=s88-c-k-c0x00ffffff-no-rj")

  message.channel.send(embed)


 }

}
