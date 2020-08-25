const discord = require("discord.js");

module.exports.run = async (bot, message, args, options) => {

    var guildIDData = options.active.get(message.guild.id);

    if (!guildIDData) return message.channel.send("er is geen muziek aan het spelen op dit moment.");

    if (message.member.voice.channel != message.guild.me.voice.channel) return message.channel.send("sorry je zit niet in het zelfde kanaal");

    if (guildIDData.dispatcher.paused) return message.channel.send("de muziek is al gepauzeerd.");

    guildIDData.dispatcher.pause();

    return message.channel.send("Succesvol gepauzeerd");

}

module.exports.help = {
    name: "pause"
}