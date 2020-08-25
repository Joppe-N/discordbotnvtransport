const discord = require('discord.js');
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    var botEmbed = new discord.MessageEmbed()
    .setTimestamp()  
    .setThumbnail(message.guild.iconURL({ format: 'png' }))
        .setDescription("**__help Information__**")
        .setColor("RANDOM")
        .addField('**General**', [
            `**-> Server Name:** ${message.guild.name}`,
            `**-> botinfo :** Hier mee kan u de Bot informatie vinden. `,
            `**-> help :** geef dit en help command`,
            `**-> play :** doet de bot en Muziekje afspelen. `,
            `**-> serverinfo :** © Dit is alle informatie wat u momenteel nodig heeft. `,
            `**-> specs :** dit verteld wat de specs zijn van de bot, `,
            `**-> new :** dit is Onze ticket systeem. `,
            `**-> userinfo :** dit is onze userinfo commando allen Toegankelijk voor Burgers.`,
            `**-> Prefix:**`, botConfig.prefix,
            `**-> welkom :** laat en welkom commando zien. dit word automaties gedaan`,          
            `**-> suggestie :** dit is en Suggestie commando hier kan allen Staff naar kijken u kan hem wel versturen maar Staff ziet hem allen.`,          
            `**-> doneren :** dit is en donatie voormuielier om de bot testeunen en betere host tekunnen krijgen.`,          
            '\u200b'

        ])
        .addField('Moderation', [
            `**-> kick:** dit is onze Kick systeem `,
            `**-> ban :** dit is Onze Ban systeem. `,
            `**-> mute :** dit is de Mute commando. `,
            `**-> report:** Dit Is de Report commando `,
            `**-> review :**  Dit is en Review Commando`,
            `**-> slowmode:**  dit is en Slowmode commando. `,
            `**-> close** dit is onze Close commando allen Toegankelijk voor Tickets. `,
            `**-> lock:** Dit Is de Lock voor Channels te locken `,
            `**-> unlock:**  Dit Is de unlock voor Channels te unlocken`,
            `**-> warn:**  Dit Is de warn commando`,
            `**-> stafwarn:**  Dit Is de Staffwarn commando`,
            '\u200b'

        ])
        .addField('**_Muziekje Information_**', [
            `**-> play:** doet de bot en Muziekje afspelen. `,
            `**-> stop :** Laat de bot Disconecten.  `,
            `**-> pause :** Deze niet gebruiken nog in Onderhoud. `,
            '\u200b'


        ])

    message.author.send(botEmbed);
    message.channel.send(" Al de commando's staan in je privé berichten! :mailbox_with_mail:");




}
module.exports.help = {
    name: "help",
    description: "geef dit en help command"

}