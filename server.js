

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

/*
bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+accounts'){

    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 1000)

    var string = ` |1500x Steam Accounts>> ( https://link-to.net/73563/steamaccounts EXPIRED)  (2) Hulu Accounts ( https://file-link.net/73563/huluacc EXPIRED) .`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join FUN ZONE Official CM** https://discord.gg/ymkUchb . You Can Invite FUNZONE BOT At Your Server type +invite.");
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
   message.channel.send(`Daily Drops Account has sent to your **DMs** (Mega.nz) :white_check_mark:`)
message.author.send(":one: Mega.nz Accounts Drop You Can See Detail About Account by visiting this link 18th September 2020 ( https://direct-link.net/73563/drop ). Official Server ( https://discord.gg/A4XauME ).");
   }
}); 
*/

bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+drop'){

    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 1000)

    var string = `:white_check_mark: Nordvpn Accounts Drop 10th October 2020 ( https://pastr.io/view/bhtWNFqem9R ). Official Server ( https://discord.gg/ymkUchb ) .`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join FUN ZONE Official CM** https://discord.gg/ymkUchb . You Can Invite FUNZONE BOT At Your Server type +invite.");
     message.author.send({embed: {
        color: 3447003,
        description: `**All Accounts** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "DROP INFORMATION SENDED IN **DMs**! :white_check_mark: SYSTEM UPDATED"
   }});
    };
    
};
});




bot.on('message', message =>{
if (message.content == "!hulu" || message.content == "-hulu" || message.content == "!crunchyroll" || message.content == "-crunchyroll" || message.content == "!nordvpn" || message.content == "-nordvpn" || message.content == "!pornhub" || message.content == "-pornhub" || message.content == "!minecraft" || message.content == "-minecraft" || message.content == "!wwe" || message.content == "-wwe" || message.content == "!mailaccess" || message.content == "-mailaccess" || message.content == "!origin" || message.content == "-origin" || message.content == "!hbo" || message.content == "-hbo" || message.content == "!pubg" || message.content == "-pubg" || message.content == "!minty" || message.content == "-minty" || message.content == "!ebay" || message.content == "-ebay" || message.content == "!nitro" || message.content == "-nitro" || message.content == "+stock" || message.content == "-stock" || message.content == "!stock" || message.content == ">stock" || message.content == "+stocks" || message.content == "-stocks" || message.content == "!stocks" || message.content == ">stocks" || message.content == "!invite" || message.content == "-invite" || message.content == "!invite" || message.content == "!help" || message.content == "-help" || message.content == "-gen" || message.content == "!gen" || message.content == "!gen fortnite" || message.content == "!fortnite" || message.content == "-fortnite" || message.content == "!steam" || message.content == "!spotify" || message.content == "-spotify" || message.content == "-steam" || message.content == "!uplay" || message.content == "-uplay" || message.content == "!netflix" || message.content == "-netflix" || message.content == "+spotify" || message.content == "+steam" || message.content == "+hulu" || message.content == "+crunchyroll" || message.content == "+minecraft" || message.content == "+nordvpn" || message.content == "+minty" || message.content == "+ebay" || message.content == "+origin" || message.content == "+fortnite" || message.content == "+netflix" || message.content == "+uplay" || message.content == ">spotify" || message.content == ">uplay" || message.content == ">fortnite" || message.content == ">pornhub" || message.content == ">nordvpn" || message.content == ">minecraft" || message.content == ">hulu" || message.content == ">crunchyroll" || message.content == ">steam" || message.content == ">mailaccess" || message.content == ">netflix") { 
    message.channel.send("```Sorry There is Just 1 Commands ( +drop ) to generate fresh accounts which is available at stocks type +drop```")
    message.author.send("```Sorry There is Just 1 Commands ( +drop ) to generate fresh accounts which is available at stocks type +drop ```");
}
});

bot.on('message', message =>{
  if (message.content === '+invite') {
   message.channel.send(`Invite link of FUNZONE GEN BOT has sent to your **DMs** :white_check_mark:`)
message.author.send("https://discord.com/api/oauth2/authorize?client_id=498549949039116300&permissions=0&scope=bot");
   }
}); 



bot.login(TOKEN);
