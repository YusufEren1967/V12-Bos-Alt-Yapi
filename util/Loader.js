const reqEvent = event => require(`../events/${event}`); //Yapımcı Lebronze James
module.exports = client => {//Yapımcı Lebronze James
  client.on('ready', () => reqEvent('ready')(client));//Yapımcı Lebronze James
  client.on('message', reqEvent('message'));//Yapımcı Lebronze James
};//Yapımcı Lebronze James
