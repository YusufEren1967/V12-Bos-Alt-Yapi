const Discord = require("discord.js"),//Yapımcı Lebronze James
client = new Discord.Client();//Yapımcı Lebronze James
const { MessageEmbed } = require('discord.js')//Yapımcı Lebronze James
module.exports.run = async (client, message, args) => { //Yapımcı Lebronze James
    const embed = new MessageEmbed()//Yapımcı Lebronze James
    .setTitle('Yapımcım Lebronze James')//Yapımcı Lebronze James
    .setColor('RANDOM')//Yapımcı Lebronze James
    .addField('Seviliyorsun Sahip <@511896276909162496>')//Yapımcı Lebronze James
    .addField('Sen Olmasan Ne Yapardım')//Yapımcı Lebronze James
    message.channel.send(embed)//Yapımcı Lebronze James
};//Yapımcı Lebronze James
//Yapımcı Lebronze James
exports.config = {//Yapımcı Lebronze James
  name: "sahip",//Yapımcı Lebronze James
  guildOnly: true,//Yapımcı Lebronze James
  aliases: [],//Yapımcı Lebronze James
};//Yapımcı Lebronze James