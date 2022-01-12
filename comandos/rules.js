const Discord = require('discord.js');

module.exports = {
  name: "rules",
  alias: ["reglas"], 

execute (client, message, args){

  const embed = new Discord.MessageEmbed()
  .setAuthor(`FunnyGames`)
  .setTitle("Reglamento del servidor")
  .setDescription("")
  .setTimestamp()
  .setColor("#90EE90")
  .addField("")
  .setFooter("")
  .setThumbnail("")
  .setImage("https://lh3.googleusercontent.com/M1qy6ITjYJqjcsY0HRdD2ZfA-AdDORVoNzICT09WeThQELj8TrXvW57Q0HvLlR_btrkiN4vD8dUEeyAX7K16f-b1xpkxwMb2SeMh5Os9lwEWSFWnwKMdal0WItCBJ8_b93wKVZgdAg1WuVL0KfNBWRekyoZpNNoPpyAJcmv4QaRSNXUXIC87DNBFXyyyBAs7Z63Fuy_duHEaDSeuT0H-mMyGZjuOLNo4NcdsXbCbmDboUc5dMfXImnRNk_PGTYjNFNH4OwF3TFlcUUBrvOA0dgKnRlThIEtt679uUweRZSiQZsmZVSc9AgZ4VGs63Izc83K_BsaQT1ye5eq-QAoLZBFXERmg5Dlvg7gfCKBPZ8XPYDtj_Lkwa7Bf8oggKlP-e1pkxuKbOIHYNAtdK73l7NfW0nHEUQLQzSRufIeLJZSNntskj2f6TbQmkUmvvF0zByEpLnNJ1umLamZcU4FjDI-tshNF5TGtV14LfeslHREZmNY4cHuANzPQJc5Wcn0jB9fJumIG5fbZ-nxzlaX5khDUdQMV_eAomjhuis3eAHyUbEJ5Ou7yzUruBLO7lT9QSVb2CSW_BLpQAWDqtZhm3buQ3lC47kOu6zioNTxWEmDXuxK_Ca68rCD3Fp-6hztICPCrOr_i8AUSxcvxrVLTQ18jctfOV8Qos_f2DDl0Rtih-EaGti1Q2XxOvwMq3XQDS12Qsxaj4WqXmlscaNHILkM=s800-no?authuser=1")

  message.channel.send(embed)


 }

}