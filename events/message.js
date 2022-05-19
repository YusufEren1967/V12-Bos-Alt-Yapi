const ayarlar = require('../ayarlar.json'); //Yapımcı Lebronze James
module.exports = message => { //Yapımcı Lebronze James
  let client = message.client;//Yapımcı Lebronze James
  if (message.author.bot) return;//Yapımcı Lebronze James
  if (!message.content.startsWith(ayarlar.prefix)) return;//Yapımcı Lebronze James
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);//Yapımcı Lebronze James
  let params = message.content.split(' ').slice(1);//Yapımcı Lebronze James
  let cmd;//Yapımcı Lebronze James
  if (client.commands.has(command)) {//Yapımcı Lebronze James
    cmd = client.commands.get(command);//Yapımcı Lebronze James
  } else if (client.aliases.has(command)) {//Yapımcı Lebronze James
    cmd = client.commands.get(client.aliases.get(command));//Yapımcı Lebronze James
  };//Yapımcı Lebronze James
  if (cmd) {//Yapımcı Lebronze James
    if(!message.guild) {//Yapımcı Lebronze James
      if(cmd.ayarlar.guildOnly === true) {//Yapımcı Lebronze James
        return;//Yapımcı Lebronze James
      };//Yapımcı Lebronze James
    };//Yapımcı Lebronze James
    cmd.run(client, message, params);//Yapımcı Lebronze James
};//Yapımcı Lebronze James
};//Yapımcı Lebronze James