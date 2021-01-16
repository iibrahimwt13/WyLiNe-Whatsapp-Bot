const Asena = require("../events");
const {MessageType} = require("@adiwajshing/baileys");
const got = require("got");

Asena.addCommand({pattern: "covid ?(.*)", fromMe: true}, (async (message, match) => {
    if (match[1] === "") {
        try{
            //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
            const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                const resp = JSON.parse(ok.body);
                await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);

            });

        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }

    }
    else if (match[1] === "id") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/indonesia").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇲🇨  *Data untuk Indonesia:*\n\n😷 *total kasus:* ${resp.cases}\n🏥 *Kasus hari ini:* ${resp.todayCases}\n⚰️ *Total Kematian:* ${resp.deaths}\n☠️ *Kematian Hari ini:* ${resp.todayDeaths}\n💊 *Total sembuh:* ${resp.recovered}\n😷 *Kasus Aktif:* ${resp.active}\n🆘 *Kasus kritis:* ${resp.critical}\n🧪 *Total Tes:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }




}));
