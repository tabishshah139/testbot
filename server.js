const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://github.com/tabishshah139/testbot`);
}, 280000);

const Discord = require ('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN
const usedCommandRecently4 = new Set();

const PREFIX = '?';

bot.on('ready', () =>{
console.log(`K-G3n is now online in ${bot.guilds.size} servers with ${bot.users.size} members!`);
bot.user.setStatus('dnd, online, idle');
bot.user.setActivity(`on ${bot.guilds.size} servers | +help | +invite `);
});

bot.on('message', function(message) {
    if (message.content == "+cleanmsg") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("You do NOT have permission.")})                        
        }
    }

});



bot.on('message', message =>{
  if (message.content === '+botstats') {
   message.channel.send(`${bot.guilds.size} servers with ${bot.users.size} members!`)
   }
}); 

bot.on('message', message =>{
  if (message.content === '+invite') {
   message.channel.send(`Invite link of KGEN has sent to your **DMs** :white_check_mark:`)
message.author.send("https://discordapp.com/api/oauth2/authorize?client_id=619923933109420097&permissions=0&scope=bot");
   }
}); 







bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+spotify'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 120000)
    var string = `Note: We have added Little Advertisement. You Can Get more than 50 Accounts by seeing advertisement 1 time. Watch Advertisement and Recieve Alot Accounts Thank You. :one: ( https://up-to-down.net/41622/spotify1 ) 200x Spotify Accounts list 1. :two: ( https://up-to-down.net/41622/Spotify2P ) 200x Spotify Accounts list 2. :three: ( https://up-to-down.net/41622/spotify3 ) 200x Spotify Accounts list 3. :four: ( https://up-to-down.net/41622/spotify4 ) 128x Spotify Accounts list 4`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**Spotify Premium Accounts** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Spotify Premium accounts sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});


bot.login(TOKEN);
