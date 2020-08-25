const discord = require("discord.js");
const ytdl = require("ytdl-core");
 
module.exports.run = async (bot, message, args) => {
 
   
   
    if (!message.member.voice.channel) return message.channel.send("Conecteer met een spraak kanaal a.u.b.");
     
    if (message.guild.me.voice.channelID != message.member.voice.channelID) return message.channel.send('sorry ik bent niet verboden met en Spraak kanaal. je kan mij Verbinden door !p met en Url meetegeven.')
   
    message.guild.me.voice.channel.leave();
    message.channel.send("Succesvol het kanaal verlaten!");
  
  }
module.exports.help = {
    name: "stop",
    description: "Laat de bot Disconecten."
}
