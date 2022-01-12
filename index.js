const Discord = require('discord.js')
const client = new Discord.Client()
const qdb = require('quick.db')
const Levels = require('discord-xp')
Levels.setURL(process.env['MONGODB'])

const keepAlive = require('./server.js');
const express = require("express")().get("/", (req,res)=>res.send("StarBot en linea, asi que ya los demas podran interactuar con el!!! :D")).listen(3000)

const fs = require('fs')
let { readdirSync } = require('fs') 

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  function presence() {
    client.user.setPresence({
      status: 'dnd',
      activity: {
        name: 'Sweet Dreams',
        type: 'WATCHING'
      }
    })
  }
  presence();
  console.log(`Bot Encendido`)
})

client.on('message', async (message) => {

  let prefix = 'S!'

  if (message.author.bot) return;

 ///afk///

 if(qdb.has(`afk-${message.author.id}+${message.guild.id}`)){
   await qdb.delete(`afk-${message.author.id}+${message.guild.id}`)
   message.channel.send(`Bienvenid@ ${message.author}, tu estado AFK ha sido removido`)
 }

 if(message.mentions.members.first()){
   const info = qdb.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`)
   if(qdb.has(`afk-${message.mentions.users.first().username}+${message.guild.id}`)){
     message.channel.send(`${message.author}, ${message.mentions.members.first().username} esta en estado AFK\nMotivo ${info}`)
   }
 }
///afk///

  if (!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'prueba') {
    message.channel.send("Prueba realizada con exito. Todo en orden ✅")
  }

let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if(cmd){
    cmd.execute(client, message, args)
  }

})
///Sistema de niveles///
client.on('message', async (message) => {

  if(message.author.bot) return;

  const random = Math.floor(Math.random() * 15) + 15;
  const hasLevelledUp = await Levels.appendXp(
    message.author.id,
    message.guild.id,
    random
  );

if(hasLevelledUp) {
  const user = await Levels.fetch(message.author.id, message.guild.id);

  message.channel.send(`GG ${message.author}, has llegado al nivel ${user.level}`)

  if (user.level === 1){
    message.member.roles.add('889161829669036053')
  }

  if (user.level === 5){
    message.member.roles.add('887021168979222590')
  }

  if (user.level === 10){
    message.member.roles.add('889164831968624731')
  }

}

  if (user.level === 15){
    message.member.roles.add('890976961676058645')
  }

  if (user.level === 20){
    message.member.roles.add('890977132640100534')
  }


})

///Sistema de niveles///

///Distube///

const Distube = require('distube')
client.distube = new Distube(client, {
  emitNewSongonly: true,
  searchSongs: false,
  leaveOnStop: false,
  leaveOnFinish: false,
  leaveOnEmpty: true
});

client.distube.on("addList", (message, queue, playlist) => message.channel.send(`Playlist:\n**${playlist.name}** ***${message.author}***`)
)

client.distube.on("addSong", (message, queue, song) => message.channel.send(`Añadido a la cola, ${song.name}** - **${song.formattedDuration}** ***${message.author}`)
)

client.distube.on("playsong", (message, queue, playsong) => message.channel.send(`Reproduciendo ahora: **${playsong.name}** - **${playsong.formattedDuration}** ***${message.author}***`)
)

client.distube.on("playList", (message, queue, playlist) => message.channel.send(`Reproduciendo Playlist: **${playlist.name}** ***${message.author}***`)
)

client.distube.on('initQueue', (queue) => {
  queue.autoplay = false;
  queue.volume = 100
})

///Distube///

const mySecret = process.env['TOKEN']
client.login(mySecret)
