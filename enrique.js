const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js');
const bot = new Client();

const ytdl = require("ytdl-core");

client.login(process.env.BOT_TOKEN);

const PREFIX = 'Lmao ';

var servers = {};

bot.on('ready', () =>{
    console.log('This Bot is online!');
})
