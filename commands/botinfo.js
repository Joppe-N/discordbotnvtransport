const discord = require("discord.js");
const botConfig = require("../botconfig.json");
const package  = require("../package.json");

module.exports.run = async (client, message, args) => {
    var members = message.guild.members.cache;
        var embed = new discord.MessageEmbed()
            .setTitle(`Botinfo De informatie over De bot.`)
            .setColor("ddf602")
            .setThumbnail(client.user.displayAvatarURL())
            .addField(`**Bot Name:**`, client.user.username)
            .addField(`**ID**`, client.user.id)
            .addField(`**Prefix:**`, botConfig.prefix)
            .addField(`**Created At**`, client.user.createdAt)
            .addField(`**Created By:**`, botConfig.owner)
            .addField(`**de bot zit in zo veel Servers:**`, client.guilds.cache.size)
            .addField(`**Members (Excl. Bots):**`, members.filter(member => !member.user.bot).size)
            .addField(`**Discord.js Version:**`, package.dependencies["discord.js"])
            .addField("**Bot invite linkje 🤖**", `[Add me to you server!!](https://discord.com/oauth2/authorize?client_id=725301850206633984&permissions=8&scope=bot)            `)
            .addField("**roblox invite linkje 🤖**", `[Roblox game linkje!!](https://www.roblox.com/games/185655149/Welcome-to-Bloxburg-BETA?refPageId=fbd51568-c96c-4c4b-80ee-c52a2dbd5bcd)            `)
            .addField("**roblox invite linkje 🤖**", `[Roblox game linkje!!](https://www.roblox.com/games/185655149/Welcome-to-Bloxburg-BETA?refPageId=fbd51568-c96c-4c4b-80ee-c52a2dbd5bcd)            `)
            .setTimestamp()
            .setFooter(botConfig.footer)
        return message.channel.send(embed);
    }

module.exports.help = {
    name: "botinfo",
    description: "Hier mee kan u de Bot informatie vinden."

}
