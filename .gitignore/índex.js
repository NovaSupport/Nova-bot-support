const Discord = require('discord.js');

const client = new Discord.Client();

client.login('process.env.TOKEN');

client.on("ready", () => {
  console.log("Le Bot est allumé !\n");
  client.setActivity("Test jeu");
}); 

client.on("message", message => {
  if(message.content === "Bonjour le bot !"){
    message.channel.send("Bonjour "+message.author.username);
}})
