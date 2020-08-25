const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    try {

        var text = "**Leuk dat je Interesse hebt om te doneren aan Moon. :moneybag:** \n\n **Wat doe wij met het gegeven geld?** \n Doormiddel van een donatie kan Ik (<@664907818851368975>) zijn video's van nog betere kwaliteit, computer verbeteringen, eventuweel graphics kaart upgraden naar HD Kwaliteit. Kortom, je steunt mij! \n Eventuweel geef ik een bijdrage weg aan de mensen die hebben gedoneerd die niet Tevreden zijn bijv boven €1,- of meer! \n\n **Welke betaalmogelijkheden zijn beschikbaar?** \n Bij een bedrag van minimaal €2,- ontvang je een Donateur rank. \n Als je met **__paypal__** wilt betalen kan dat zeker wel! Alleen via deze site: https://paypal.me/pools/c/8rbbMFGj08 <--  \n Donaties via paypal met iDeal woorden alleen geaccepteerd vanaf €2,- \n\n **Wat Kan ik met donateur rank?** \n • Je krijgt een speciale Donateur rank, en staat apart in de gebruikerlijst. \n • Je kunt je gebruikersnaam veranderen. \n • Je krijgt toegang tot een speciaal donateur kanalen. \n • Je kunt externe emoji's gebruiken in onze servers en andere servers. \n • Je kunt Zelfpromotie doen! die alleen toegankelijk zijn vanaf Donateurs.";

        message.author.send(text);

        message.reply(":money_with_wings: Alle informatie over doneren staat in je privé berichten!")

    } catch (error) {
        message.reply("Er is iets fout gelopen.");
    }

    message.author.send(response).then(() => {
        message.channel.send(":money_with_wings: Alle informatie over doneren staat in je privé berichten!");
    }).catch(() => {
        message.channel.send("**❌Je prive berichten staan helaas uit! je hebt niets ontvangen.**");
    })

}

module.exports.help = {
    name: "doneren",
}