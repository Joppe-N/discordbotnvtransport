const discord = require("discord.js");

module.exports.run = async(Client, message, args) =>{

     message.delete();

    const categoryID = "719484808056668180";
    if(! message.member.roles.cache.has("690507099498741770")) return message.reply("You can't use this command");
    if(! message.member.roles.cache.has("627158052629512232")) return message.reply("You can't use this command");

    if (message.channel.parentID == categoryID) {
        message.channel.delete();

        var ticketLog = new discord.MessageEmbed()
         .setTitle("Ticket van, " + message.channel.name)
         .setColor("#3de361")
         .setFooter("©Moon Development | Bot Development By Moon")
         .setTimestamp()
         .setDescription(`de Ticket is gesloten door. ${message.author.username}`)
   
         message.guild.channels.cache.get('627401236894711818').send(ticketLog)


    } else {

        message.channel.send("You can't use this command here")

    }

}

module.exports.help = {
    name: "close",
    description: "dit is onze Close commando allen Toegankelijk voor Tickets."
}