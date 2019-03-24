const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Le Bot est allumé !");
  client.user.setActivity("Nova Community Logs");

client.on("message", message => {

        if(message.content === "!ping") {
        if(message.channel.type === "dm") return message.channel.send("Vous ne devez pas éffectuer la commande ici...");
            message.channel.send(":robot: Pong ! :robot:");
            console.log("Un utilisateur (" + message.author.username +") à fait la commande " + message.content + ".")
        }

        if(message.content === "Bonjour, NovaSupport !") {
            if(message.channel.type === "dm") return message.channel.send("Vous ne devez pas éffectuer la commande ici...");
            message.channel.send("Voici");
            console.log("Un utilisateur (" + message.author.username +") à fait la commande " + message.content + ".")
        }
    
        if(message.content === "!help") {
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

const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 1024 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
 
  message.channel.send({embed});
