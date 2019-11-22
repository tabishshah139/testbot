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
console.log(`Tabish Gen is now online in ${bot.guilds.size} servers with ${bot.users.size} members!`);
bot.user.setStatus('dnd, online, idle');
bot.user.setActivity(`${bot.guilds.size} servers ${bot.users.size} Users`);
});



bot.on('message', message =>{
if (message.content == "!hulu" || message.content == "-hulu" || message.content == "!crunchyroll" || message.content == "-crunchyroll" || message.content == "!nordvpn" || message.content == "-nordvpn" || message.content == "!pornhub" || message.content == "-pornhub" || message.content == "!minecraft" || message.content == "-minecraft" || message.content == "!wwe" || message.content == "-wwe" || message.content == "!mailaccess" || message.content == "-mailaccess" || message.content == "!origin" || message.content == "-origin" || message.content == "!hbo" || message.content == "-hbo" || message.content == "!pubg" || message.content == "-pubg" || message.content == "!minty" || message.content == "-minty" || message.content == "!ebay" || message.content == "-ebay" || message.content == "!nitro" || message.content == "-nitro" || message.content == "+stock" || message.content == "-stock" || message.content == "!stock" || message.content == ">stock" || message.content == "+stocks" || message.content == "-stocks" || message.content == "!stocks" || message.content == ">stocks" || message.content == "!invite" || message.content == "-invite" || message.content == "!invite" || message.content == "!help" || message.content == "-help" || message.content == "-gen" || message.content == "!gen" || message.content == "!gen fortnite" || message.content == "!fortnite" || message.content == "-fortnite" || message.content == "!steam" || message.content == "!spotify" || message.content == "-spotify" || message.content == "-steam" || message.content == "!uplay" || message.content == "-uplay" || message.content == "!netflix" || message.content == "-netflix" || message.content == "+spotify" || message.content == "+steam" || message.content == "+hulu" || message.content == "+crunchyroll" || message.content == "+minecraft" || message.content == "+nordvpn" || message.content == "+minty" || message.content == "+ebay" || message.content == "+origin" || message.content == "+fortnite" || message.content == "+netflix" || message.content == "+uplay") { 
    message.channel.send("```Sorry There is Just One Command (+gen) to generate all account which is available at stocks type +gen```")
    message.author.send("```Sorry There is Just One Command (+gen) to generate all account which is available at stocks type +gen```");
}
});

bot.on('message', message =>{
  if (message.content === '+invite') {
   message.channel.send(`Invite link of Tabish Gen BOT has sent to your **DMs** :white_check_mark:`)
message.author.send("https://discordapp.com/api/oauth2/authorize?client_id=619923933109420097&permissions=0&scope=bot");
   }
}); 


 
bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+gen'){

    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 1000)

    var string = `Note: We have added Little Advertisement | | You Can Get more than 50 Accounts by seeing advertisement 1 time | | :one: Mail Access ( https://link-to.net/41622/mailaccc4 ) 150x Mail Access Accounts list 1 | |  :two: Minecraft Accounts ( https://up-to-down.net/41622/minets3 ) 149x Minecraft Accounts list 1 | | :three: Hulu Accounts ( https://link-to.net/41622/hulu11 ) 1000x Hulu Accounts list 1 | | :four: Netflix Accounts ( https://link-to.net/41622/netflixe ) 200x Netflix Accounts list 1 | | :five: Spotify Accounts ( https://up-to-down.net/41622/spotify3 ) 200x Spotify Accounts list 1 | | :six: Nitro Codes ( https://link-to.net/41622/coddes4 ) 240x Nitro Codes list 1 | | :seven: Crunchyroll Accounts ( https://link-to.net/41622/crunch2 ). 67x Crunchyroll Accounts list 1 | | :eight: Nord Vpn Accounts ( https://link-to.net/41622/norde3 ) 200x nordVPN Accounts list 3 | | :nine: Origin Accounts ( https://up-to-down.net/41622/origin101 ) 74x Origin Accounts list 1. | | :one::zero: Fortnite Accounts ( https://up-to-down.net/41622/fart1 ) 799x Fortnite Accounts list 1.`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/MFqpFBH");
     message.author.send({embed: {
        color: 3447003,
        description: `**All Accounts** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Accounts sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});


bot.login(TOKEN);
