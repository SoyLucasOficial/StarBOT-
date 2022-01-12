const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
  name: "warns",
  alias: [],

async execute (client, message, args){

  let persona = message.mentions.users.first()

let cantidad = await warns.obtener(`${message.guild.id}.${persona.id}`)

if(!warns.tiene(`${message.guild.id}.${persona.id}`)){
  message.channel.send("❌ Esa persona no tiene warns!!! ❌")

  return;
}

message.channel.send(`**${persona}** tiene **${cantidad}** de warns`)

 }

} 