const Discord = require("discord.js")  //Yapımcı Lebronze James   
const client = new Discord.Client();    //Yapımcı Lebronze James   
const fs = require("fs");                //Yapımcı Lebronze James
const ayarlar = require("./ayarlar.json");//Yapımcı Lebronze James
require('./util/Loader.js')(client);     //Yapımcı Lebronze James

client.commands = new Discord.Collection(); //Yapımcı Lebronze James
client.aliases = new Discord.Collection();  //Yapımcı Lebronze James
fs.readdir('./komutlar/', (err, files) => { //Yapımcı Lebronze James
  if (err) console.error(err);               //Yapımcı Lebronze James
  console.log(`${files.length} komut yüklenecek.`); //Yapımcı Lebronze James
  files.forEach(f => {                       //Yapımcı Lebronze James
    let Komut = require(`./komutlar/${f}`);   //Yapımcı Lebronze James
    console.log(`${Komut.config.name} komutu yüklendi. 😀`);  //Yapımcı Lebronze James
    client.commands.set(Komut.config.name, Komut); //Yapımcı Lebronze James
    Komut.config.aliases.forEach(alias => {          //Yapımcı Lebronze James
      client.aliases.set(alias, Komut.config.name);  //Yapımcı Lebronze James
    });//Yapımcı Lebronze James
  });//Yapımcı Lebronze James
})//Yapımcı Lebronze James

client.login(ayarlar.token)//Yapımcı Lebronze James