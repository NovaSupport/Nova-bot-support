const Discord = require('discord.js');
const client = new Discord.Client();

client.login("process.env.TOKEN");

client.on("ready", () => {
  console.log("Le Bot est allumé !");
  client.user.setActivity("Happy New years!🍾");

client.on("message", message => {

        if(message.content === "!ping") {
        if(message.channel.type === "dm") return message.channel.send("Vous ne devez pas éffectuer la commande ici...");
            message.channel.send(":robot: Pong ! :robot:");
            console.log("Un utilisateur (" + message.author.username +") à fait la commande " + message.content + ".")
        }

        if(message.content === "Bonjour, NovaSupport !") {
            if(message.channel.type === "dm") return message.channel.send("Vous ne devez pas éffectuer la commande ici...");
            message.channel.send("Bonjour " + message.author.username + " !");
            console.log("Un utilisateur (" + message.author.username +") à fait la commande " + message.content + ".")
        }
    
        if(message.content === "!help") {
        if(message.channel.type === "dm") return message.channel.send("Vous ne devez pas éffectuer la commande ici...");
          var aide_embed = new Discord.RichEmbed()  
           .setTitle("Menu d'aide :") 
           .addField("`!ping`", "Dis si le bot est allumé.")
           .addField("`Bonjour, NovaSupport !`", "Dis bonjour au bot.")
           .addField("`!autre`", "renvois 'autre'")
           .addField("`!help`", "Affiche le menu d'aide.")
           .addField("`!joue`", "Fais jouer le bot à quelque chose.")
           .addField("`!mute`", "Interdire une personne de parler.")
           .addField("`!unmute`", "Autoriser une personne à parler.")
           .addField("`!kick`", "Expulser une personne du serveur.")
           .addField("`!ban`", "Bannir une personne du serveur.")
            .setColor('RANDOM')
            .setFooter("Bot NovaSuport - demandé par " + message.author.username)
            .setThumbnail(message.author.avatarURL);
            message.channel.send(aide_embed);
            console.log("Un utilisateur (" + message.author.username +") à fait la commande " + message.content + ".")  
        };

        
        if(message.content.startsWith("!joue") || message.content === "!joue") {
          if(message.channel.type === "dm") return message.channel.send(mc);
          message.channel.bulkDelete("1");
          var args = message.content.split(' ').join(' ').slice(5);
          if(!args) return message.channel.send("Vous devez ajouter un jeu auquel vas jouer Nova !");
          client.user.setActivity(args);
          console.log("Un utilisateur (" + message.author.username +") à fait la commande " + message.content + ".")
        }

        if(message.content.startsWith("!kick") || message.content === "!kick"){
          if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!");
          
          if(message.mentions.users.size === 0) return message.channel.send("Vous devez metionner un utilisaeur");

            var kick = message.guild.member(message.mentions.users.first());
            if(!kick) return message.channel.send("Je ne sais pas si l'utilisateur existe :/")
            
                kick.kick().then(member => {
                    message.channel.send(`${member.user.username} à été kick par ${message.author.username}`);
                });
            }
        
            if(message.content.startsWith("!ban") || message.content === "!ban") {
                if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!");
        
                if(message.mentions.users.size === 0) return message.channel.send("Vous devez mentionner un utilisateur");
        
                var ban = message.guild.member(message.mentions.users.first());
                if(!ban) return message.channel.send("Je ne sais pas si l'utilisateur existe");
                
                ban.ban().then(member => {
                    message.channel.send(`${member.user.username} a été ban par ${message.author.username} !`)
        ;})}
        
            if(message.content.startsWith("!mute")|| message.content === "!mute") {
              if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
            
              if(message.mentions.users.size === 0) return message.channel.send('Vous devez mentionner un utilisateur !');
                
              var mute = message.guild.member(message.mentions.users.first());
              if(!mute) return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
              
              message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
                  message.channel.send(`${mute.user.username} est mute !`);
              });
            }
            
            if(message.content.startsWith("!unmute") || message.content === "!unmute") {
                if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
            
                if(message.mentions.users.size === 0) return message.channel.send('Vous devez mentionner un utilisateur !');
                
                var mute = message.guild.member(message.mentions.users.first());
                
                if(!mute) return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
                
                message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
                message.channel.send(`${mute.user.username} n'est plus mute !`);
                });
            }},)
});
