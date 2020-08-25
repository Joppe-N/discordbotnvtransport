const botConfig = require("../botconfig.json")
const discord = require('discord.js')
const fs = require('fs')

module.exports.run = async (bot, message, args) => {

    var kanaal = message.guild.channels.cache.find(c => c.name == `dsmtw-${message.author.username}-${message.author.discriminator}`);
    if(kanaal) return message.channel.send(":x: | Jij bent al een game aan het spelen. ```Is dit een fout? Contacteer dan een server moderator.```")

    var already = false;

    message.guild.channels.cache.forEach(channel => {
        if(channel.name == `dsmtw-${message.author.username}-${message.author.discriminator}`) {

            var already = true

            return message.channel.send(":x: | Jij bent al een game aan het spelen. ```Is dit een fout? Contacteer dan een server moderator.```")

        }
    });

    if(already === false) {

        message.guild.channels.create(`dsmtw-${message.author.username}-${message.author.discriminator}`, { type: 'text'}).then((createdChan) => { // Maak kanaal

    
            createdChan.overwritePermissions([
                    {
                        id: message.guild.id,
                        deny: ['VIEW_CHANNEL'],
                    },
                    {
                        id: message.author.id,
                        allow: ['VIEW_CHANNEL'],
                    }
                ])

                var embed = new discord.MessageEmbed()
                    .setTitle(`De Slimste Mens ter Wereld`)
                    .setColor(botConfig.color)
                    .setDescription(`Welkom bij jou DSMTW game. Je hebt 20 seconden om elke vraag te beantwoorden\n\n**__Verschillende rondes__**\nRonde 1: 3-6-9 | Beantwoord de vragen zo snel mogelijk.`)
                    .setTimestamp()
                    .setFooter(botConfig.footer)

                createdChan.send(embed)
    
            });

    }

}
module.exports.help = {
    name: "start",
}