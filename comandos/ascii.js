const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const figlet = require('figlet')

module.exports = {
  name: "ascii",
  alias: [],

execute (client, message, args){

if(!args[0]) return message.channel.send("❌ Debes de escribir un mensaje de menos de 15 letras!!! ❌")

if (args.join (" ").lenght > 15) return message.channel.send("❌ Ese texto esta demasido largo, el tecto debe ser inferior a 15 letras!!! ❌")

figlet(args.join(" "), (err, data) =>
message.channel.send("\`\`\`" + data + "\`\`\`"))

 }

}