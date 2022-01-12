const Discord = require('discord.js');

module.exports = {
  name: "help",
  alias: ["ayuda"], 

execute (client, message, args){


const user = message.author

const embedPrincipal = new Discord.MessageEmbed()
.setTitle("Sistema de ayuda")
.setDescription("⚙ Moderacion \n \n 🎉 Diversion \n \n 🎶 Musica \n \n 📊 Niveles \n \n 💿 Util")
.setFooter("Si tienes una duda no dudes en contactar con: FunnyGames#9292 \n \n Si tienes un bug no dudes poner... S!reportbug (reporte)")
.setTimestamp()

const embed1 = new Discord.MessageEmbed()
.setTitle("Moderacion ⚙")
.setDescription("S!kick (mencion al user) (razon) <= Eliminara al usuario del servidor \n \n S!ban (mencion al user) (razon) <= Baneara al usuario del servidor")
.setFooter("Recuerda que en un futura se podrian añadir nuevas funciones  o quitar funciones asi que no es definitivo")
.setTimestamp()

const embed2 = new Discord.MessageEmbed()
.setTitle("Diversion 🎉")
.setDescription("S!avatar (mencion al user) <= Mostrara el avatar de ti u otra persona \n \n S!say (texto) <= El bot repetira el texto \n \n S!meme <= El bot enviara un meme")
.setFooter("Recuerda que en un futura se podrian añadir nuevas funciones  o quitar funciones asi que no es definitivo")
.setTimestamp()

const embed3 = new Discord.MessageEmbed()
.setTitle("Musica 🎶")
.setDescription("Las opciones de musica han vuelto!!! aqui te dejamos sus comandos:\n \n S!play (cancion) <= este comando reproducira la musica!!! \n \n S!skip <= este comando saltara a la siguiente cancion!!! \n \n S!pause <= este comando pausara la cancion!!! \n \n S!continue <= este comando reanudara la cancion!!!")
.setFooter("Recuerda que en un futura se podrian añadir nuevas funciones  o quitar funciones asi que no es definitivo")
.setTimestamp()

const embed4 = new Discord.MessageEmbed()
.setTitle("Niveles 📊")
.setDescription("S!rank <= Mostrara tu nivel \n \n S!leaderboard <= Mostrara el ranking de los usuarios mas activos del servidor")
.setFooter("Recuerda que en un futura se podrian añadir nuevas funciones  o quitar funciones asi que no es definitivo")
.setTimestamp()

const embed5 = new Discord.MessageEmbed()
.setTitle("Util 💿")
.setDescription("S!Help <= Mostrara este tablero \n \n S!afk (razon) <= Te pondra en el modo AFK y cualquier usuario que te mencione sera avisado que estas en AFK \n \n S!sugerencia (sugerencia) <= Haras una sugerencia \n \n S!reportbug (bug) <= Este enviara el bug que esta pasando con el bot al creador")
.setFooter("Recuerda que en un futura se podrian añadir nuevas funciones  o quitar funciones asi que no es definitivo")
.setTimestamp()

message.channel.send(embedPrincipal).then(async (e) =>{

  e.react("⚙")
  e.react("🎉")
  e.react("🎶")
  e.react("📊")
  e.react("💿")
  e.react("🏡")

  e.awaitReactions((reaction, user) => {

    if(message.author.id !== user.id) return;

    if(reaction.emoji.name === '⚙'){
      e.edit(embed1)  
    }
    if(reaction.emoji.name === '🎉'){
      e.edit(embed2)  
    }
    if(reaction.emoji.name === '🎶'){
      e.edit(embed3)  
    }
    if(reaction.emoji.name === '📊'){
      e.edit(embed4)  
    }
    if(reaction.emoji.name === '💿'){
      e.edit(embed5)  
    }
    if(reaction.emoji.name === '🏡'){
      e.edit(embedPrincipal)  
    }
  })
})

 }

} 