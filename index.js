require('dotenv').config();
const Discord = require("discord.js"),
    distube = require("distube"),
    bot = new Discord.Client(),
    config = {
        prefix: "/",
        token: process.env.TOKEN
    };

bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`);
})

bot.login(config.token);