const express = require('express');
const app = express();

app.listen(process.env.PORT);
const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.TOKEN);

client.on('message', msg => {
    if (msg.content === 'HI'){
        msg.channel.send('Hello')
    }
})

client.on('message', msg => {
    if (msg.content === 'Are you having a good day?'){
        msg.reply('Yes, of course!')
    }
})
