const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js');
const bot = new Client();

bot.on('ready', () =>{
    console.log('This Bot is online!');
});

client.login(process.env.BOT_TOKEN);
