const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "xd",
  alias: [""],

execute (client, message, args){ 

  const embed = new Discord.MessageEmbed()
  .setTitle("Reglamento del servidor")
  .setDescription("1️⃣ Respeto mutuo entre todos los miembros \n\n 2️⃣ No se permitirán maldiciones \n\n 3️⃣ Si se detecta al agresor será baneado/funado permanentemente(dependiendo de las circunstancias), en caso de que exista un numero de miembros mayor a dos involucrados en un problema tendrán el derecho de pedir una investigación/juicio para determinar las causas, por lo tanto, el caso será evaluado por moderadores(si el caso es extremo el O5-14 y el O5-1 del servidor estarán presente para evaluar el caso) \n\n 4️⃣ Se permitirán memes/momos o video memes de todos los tipos, (a excepción de los memes de humor negro, es decir, aquellos que se vulneren la sensibilidad de aquellas personas que estén vinculadas a enfermedades terminales como el cáncer, neumonía, el VIH, insuficiencia renal etc.....  se eliminará el contenido y se expulsará al miembro de la comunidad \n\n 5️⃣ La detección de contenido pornográfico por parte de moderadores, será causa para la aplicación de un baneo total del servidor. \n\n 6️⃣Cuando jueges respeta a la comunidad. \n\n Recuerda que las reglas son importates para tener sana a la comunidad recuerda que aqui nadie es racista a si que haceptamos a todas las personas que sean de comunidades fandoms y mas!!!")
  .setColor("#73C2FB")

  message.channel.send(embed)

 }

} 