const Discord = require('discord.js');

module.exports = {
  name: "scp",
  alias: [""], 

execute (client, message, args){

  const embed = new Discord.MessageEmbed()
  .setAuthor(`O5-14 y O5-1 (fundador y co-fundador de la SCP)`)
  .setTitle("Que es la scp???")
  .setDescription("La Fundación SCP es una organización secreta con el objetivo de contener y estudiar individuos, entidades, lugares, objetos y fenómenos anómalos que desafían la ley natural (denominados como objetos SCP o coloquialmente como SCP). \n\n​ Si no se contuvieran, los SCP representarían una amenaza para los humanos o, al menos, para el sentido de la realidad y la normalidad de la humanidad. \n\n La Fundación SCP mantiene en secreto la existencia de los objetos SCP para evitar un pánico masivo y permitir que la civilización humana funcione normalmente. Cuando un SCP es descubierto, la Fundación SCP despliega agentes para recolectar y transportar el SCP a una instalación de la Fundación, o para contenerlo en la ubicación del descubrimiento si transportarlo no es posible. Una vez que los SCP son contenidos, son estudiados por científicos de la Fundación. Sujetos de prueba adquiridos por la Fundación (denominados como personal de clase d) se utilizan para interactuar con los SCP peligrosos debido al peligro que representan esos SCP y la prescindibilidad del personal de clase D.La Fundación SCP mantiene documentación sobre todos los SCP bajo su custodia, esta puede incluir informes y archivos relacionados. \n\n Estos documentos describen a los SCP e incluyen instrucciones para mantenerlos contenidos de manera segura.La sigla significa Special Containment Procedures (Procedimientos Especiales de Contención), además de hacer referencia al lema Secure, Contain, Protect (Asegurar, Contener, Proteger, generalmente traducido como Seguridad, Contención, Protección).")
  .setImage("https://static.tumblr.com/e77c383db5a284e852b57ed111404fe0/ibyksdl/DULmyi1h4/tumblr_static_scp_logo.png")

  message.channel.send(embed)


 }

}