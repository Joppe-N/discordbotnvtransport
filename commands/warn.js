const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warning.json", "utf8"));



module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[1]) return message.reply("Gelieve een redenen op te geven.");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));


    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Geen perms");



    if (!user) return message.channel.send("geef een gebruiker op of de gebruiker is niet op de server");


    var reason = args.join(" ").slice(22);
    if (!reason) return message.channel.send("Gelieve een reden op te geven.")
    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warning.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    });

    var reportEmbed = new discord.MessageEmbed()
        .setDescription("u heeft en warn ontvangen.")
        .setColor("RANDOM")
        .addField("warn gebruiker", `${user} Door staff op deze Server.  ${message.guild.name}`)
        .addField("gewarnd door", `${message.author} op de Server  ${message.guild.name}`)
        .addField("aantal warns", warns[user.id].warns)
        .addField("Reden", reason)
        .setFooter(message.createdAt);
        '\u200b'
        message.guild.channels.cache.get('736944711905968129').send(reportEmbed)

        // ZORG VOOR ADMINISTRATOR RECHTEN OP BOT.
        message.delete();
        user.send(reportEmbed);





}

module.exports.help = {
    name: "warn",
    description: "Dit Is de warn commando"
}