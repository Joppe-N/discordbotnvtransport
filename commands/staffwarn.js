const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete()
    // {prefix}report speler reden

    var prefix = botConfig.prefix;

    if (!args[0]) return message.channel.send(`Gebruik het command als volgt: ${prefix}Staffwarn gebruikersnaam redenen.`)


    var user = message.guild.member(message.mentions.users.first());

    if (!user) return message.channel.send("Speler is niet te vinden / geef een speler op.");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Gelieve een reden op te geven.")

    var reportEmbed = new discord.MessageEmbed()
        .setDescription("u heeft en Staffwarn ontvangen.")
        .setColor("RANDOM")
        .addField("Staffwarn gebruiker", `${user} Door staff op deze Server.  ${message.guild.name}`)
        .addField("gewarnd door", `${message.author} op de Server  ${message.guild.name}`)
        .addField("Reden", reason)
        .setFooter(message.createdAt);

    message.guild.channels.cache.get('627401236894711818').send(reportEmbed)

    // ZORG VOOR ADMINISTRATOR RECHTEN OP BOT.
    message.delete();
    user.send(reportEmbed);

}

module.exports.help = {
    name: "stafwarn",
    description: "Dit Is de Staffwarn commando"
}