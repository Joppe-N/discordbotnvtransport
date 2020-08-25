const discord = require("discord.js");
const botConfig = require("../botconfig.json");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os');
let cpuStat = require("cpu-stat");
const ms = require("ms");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warning.json", "utf8"));


module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author;


    fs.writeFile("./warning.json", JSON.stringify(warns), (err) =>{
      if(err)  console.log(err)
    });
    var embed = new discord.MessageEmbed()
        .setColor("2068c5")
        .setThumbnail(message.guild.iconURL({format: 'png'}))
        .setTitle(`Userinfo | ${user.tag}`)
        .setDescription(`**${user}**`)
        .addField(`**ID**`, `${user.id}`)
        .addField(`**Nickname:**`, `${user.tag !== null ? `${user.tag}` : 'None'}`)
        .addField(`**Status:**`, `${user.presence.status}`)
        .addField(`**Game:**`, `${user.presence.game ? user.presence.game.name : 'None'}`)
        .addField(`**Bot**`, `${user.bot}`)
        .addField(`**Joined The Server On:**`,  user.joinedAt)
        .addField("aantal warns", warns[user.id].warns)
        .addField(`**Account Created On:**`, user.createdAt)
        .addField(`**Replying To:**`, `${message.author.username}#${message.author.discriminator}`)
        .setImage(user.avatarURL({ dynamic: true, size: 2048 }))
        .setTimestamp()
    
        return message.channel.send(embed);
}


module.exports.help = {
    name: "userinfo",
    description: "dit is onze userinfo commando allen Toegankelijk voor Burgers."

}