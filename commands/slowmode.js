const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Je hebt geen Permissie voor deze command!");

    if (!args[0]) return message.channel.send("geen tijd mee gegeven.")
    if (isNaN(args[0])) return message.channel.send("❌|That doesn't look like a number! ಠಿ_ಠ")

    message.channel.setRateLimitPerUser(args[0]);

    var embed = new discord.MessageEmbed()
        .setDescription(`**✅ | Langzame modus ingesteld op _${args[0]}_ seconden!**`)
        .setColor("RANDOM");
    return message.channel.send(embed);
}

module.exports.help = {
    name: "slowmode",
    description: "dit is en Slowmode commando."
} 