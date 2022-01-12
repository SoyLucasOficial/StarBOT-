const Discord = require('discord.js');
const qdb = require('quick.db')

module.exports = {
  name: "afk",
  alias: [], 

async execute (client, message, args){


if(!args.join(' ')){
  razon = 'No especificada'
} else {
  razon = args.join(' ')
}  

await qdb.set(`afk-${message.author.id}+${message.guild.id}`, razon)
message.channel.send(`${message.author}, ahora esta AFK por el motivo: ${razon}, avisare a todos los que te mecionen`)


}

 }