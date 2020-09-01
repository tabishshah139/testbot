

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
    if (!message.guild) return;
if (message.content === '+gen'){

    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 1000)

    var string = `DOWNLOAD ACCOUNTS ON THIS WEBSITE VISIT AND CHOOSE ACCOUNTS ( https://tabish4ever.blogspot.com/search/label/ACCOUNTS ).`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/gEtpmRe . You Can Invite Tabish Gen At Your Server type +invite.");
     message.author.send({embed: {
        color: 3447003,
        description: `**All Accounts** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "ACCOUNTS INFORMATION SENDED IN **DMs**! :white_check_mark: SYSTEM UPDATED"
   }});
    };
    
};
});

bot.on('message', message =>{
  if (message.content === '+drop') {
   message.channel.send(`Daily Drops Account has sent to your **DMs** (Uplay) :white_check_mark:`)
message.author.send(":one: Uplay Accounts Drop You Can See Detail About Account by visiting this link 1st September 2020 ( https://link-to.net/73563/drop ). Official Server ( https://discord.gg/gEtpmRe ).");
   }
}); 

bot.on('message', message =>{
if (message.content == "!hulu" || message.content == "-hulu" || message.content == "!crunchyroll" || message.content == "-crunchyroll" || message.content == "!nordvpn" || message.content == "-nordvpn" || message.content == "!pornhub" || message.content == "-pornhub" || message.content == "!minecraft" || message.content == "-minecraft" || message.content == "!wwe" || message.content == "-wwe" || message.content == "!mailaccess" || message.content == "-mailaccess" || message.content == "!origin" || message.content == "-origin" || message.content == "!hbo" || message.content == "-hbo" || message.content == "!pubg" || message.content == "-pubg" || message.content == "!minty" || message.content == "-minty" || message.content == "!ebay" || message.content == "-ebay" || message.content == "!nitro" || message.content == "-nitro" || message.content == "+stock" || message.content == "-stock" || message.content == "!stock" || message.content == ">stock" || message.content == "+stocks" || message.content == "-stocks" || message.content == "!stocks" || message.content == ">stocks" || message.content == "!invite" || message.content == "-invite" || message.content == "!invite" || message.content == "!help" || message.content == "-help" || message.content == "-gen" || message.content == "!gen" || message.content == "!gen fortnite" || message.content == "!fortnite" || message.content == "-fortnite" || message.content == "!steam" || message.content == "!spotify" || message.content == "-spotify" || message.content == "-steam" || message.content == "!uplay" || message.content == "-uplay" || message.content == "!netflix" || message.content == "-netflix" || message.content == "+spotify" || message.content == "+steam" || message.content == "+hulu" || message.content == "+crunchyroll" || message.content == "+minecraft" || message.content == "+nordvpn" || message.content == "+minty" || message.content == "+ebay" || message.content == "+origin" || message.content == "+fortnite" || message.content == "+netflix" || message.content == "+uplay" || message.content == ">spotify" || message.content == ">uplay" || message.content == ">fortnite" || message.content == ">pornhub" || message.content == ">nordvpn" || message.content == ">minecraft" || message.content == ">hulu" || message.content == ">crunchyroll" || message.content == ">steam" || message.content == ">mailaccess" || message.content == ">netflix") { 
    message.channel.send("```Sorry There is Just One Command (+drop) to generate all account which is available at stocks type +drop```")
    message.author.send("```Sorry There is Just One Command (+drop) to generate all account which is available at stocks type +drop```");
}
});

bot.on('message', message =>{
  if (message.content === '+invite') {
   message.channel.send(`Invite link of Tabish Gen BOT has sent to your **DMs** :white_check_mark:`)
message.author.send("https://discordapp.com/api/oauth2/authorize?client_id=498549949039116300&permissions=0&scope=bot");
   }
}); 



bot.login(TOKEN);
