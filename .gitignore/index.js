const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Le Bot est allumé !");
  client.user.setActivity("Nova Community Logs");

client.on("message", message => {

        if(message.content === "/absence") {
        if(message.channel.type === "dm") return message.channel.send("Vous ne devez pas éffectuer la commande ici...");
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Absence')
.addField("Absence procedure: Quand commence votre absence et la durée |•| Raison |•| Votre Rank", message.author.username)
.setTimestamp()
.setFooter("Nova Bot, Moderator Bot")
message.channel.send(embed)
                        message.channel.send(":white_check_mark: Commande effectuée avec succès !");
            console.log("Un utilisateur (" + message.author.username +") à fait la commande " + message.content + ".")

        }
    
if(message.content === "/partenariat") {
        if(message.channel.type === "dm") return message.channel.send("Vous ne devez pas éffectuer la commande ici...");
           let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Conditions Partenariat')
.addField("Pour devenir Partenaire vous devez: •Serveur actif | •Serveur qui respecte les TOS de discord | •Serveur avec plus de 160 membres!")
.setFooter("Nova Bot, Moderator Bot")
message.channel.send(embed)
};

        if(message.content === "/help") {
        if(message.channel.type === "dm") return message.channel.send("Vous ne devez pas éffectuer la commande ici...");
          var aide_embed = new Discord.RichEmbed()  
           .setTitle("Menu d'aide :") 
           .addField("`Dis si le bot est allumé`", "!ping")
           .addField("`Dis bonjour au bot`", "Bonjour, NovaSupport !")
           .addField("`renvois autre`", "!autre'")
           .addField("`Afficher le menu d'aide`", "!help")
           .addField("`Interdire une personne de parler`", "!mute")
           .addField("`Autoriser une personne de parler`", "!unmute")
           .addField("`Expulser une personne du serveur`", "!kick")
           .addField("`Bannir une personne du serveur`", "!ban")
            .setColor('#A01BEB')
            .setFooter("Bot NovaSuport - demandé par " + message.author.username)
            .setThumbnail(message.author.avatarURL);
            message.channel.send(aide_embed);
            console.log("Un utilisateur (" + message.author.username +") à fait la commande " + message.content + ".")  
        };
  
        if(message.content.startsWith("/joue") || message.content === "/joue") {
          if(message.channel.type === "dm") return message.channel.send(mc);
          message.channel.bulkDelete("1");
          var args = message.content.split(' ').join(' ').slice(5);
          if(!args) return message.channel.send("Vous devez ajouter un jeu auquel vas jouer Nova !");
          client.user.setActivity(args);
          console.log("Un utilisateur (" + message.author.username +") à fait la commande " + message.content + ".")
        }

        if(message.content.startsWith("/kick") || message.content === "/kick"){
          if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!");
          
          if(message.mentions.users.size === 0) return message.channel.send("Vous devez metionner un utilisaeur");

            var kick = message.guild.member(message.mentions.users.first());
            if(!kick) return message.channel.send("Je ne sais pas si l'utilisateur existe :/")
            
                kick.kick().then(member => {
                    message.channel.send(`${member.user.username} à été kick par ${message.author.username}`);
                });
            }
        
            if(message.content.startsWith("/ban") || message.content === "/ban") {
                if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!");
        
                if(message.mentions.users.size === 0) return message.channel.send("Vous devez mentionner un utilisateur");
        
                var ban = message.guild.member(message.mentions.users.first());
                if(!ban) return message.channel.send("Je ne sais pas si l'utilisateur existe");
                
                ban.ban().then(member => {
                    message.channel.send(`${member.user.username} a été ban par ${message.author.username} !`)
        ;})}
        
            if(message.content.startsWith("/mute")|| message.content === "/mute") {
              if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
            
              if(message.mentions.users.size === 0) return message.channel.send('Vous devez mentionner un utilisateur !');
                
              var mute = message.guild.member(message.mentions.users.first());
              if(!mute) return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
              
              message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
                  message.channel.send(`${mute.user.username} est mute !`);
              });
            }
            
            if(message.content.startsWith("/unmute") || message.content === "/unmute") {
                if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
            
                if(message.mentions.users.size === 0) return message.channel.send('Vous devez mentionner un utilisateur !');
                
                var mute = message.guild.member(message.mentions.users.first());
                
                if(!mute) return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
                
                message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
                message.channel.send(`${mute.user.username} n'est plus mute !`);
                });
            }},)
});
