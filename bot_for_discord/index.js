const express = require('express');
const app = express();

app.listen(process.env.PORT);
const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.TOKEN);

client.on('message', msg => {
    if (msg.content === 'toque a lendária'){
        msg.channel.send('-play https://www.youtube.com/watch?v=9NqWHAacMBQ&ab_channel=Leod')
    }
})

client.on('message', msg => {
    if (msg.content === 'dj azeitona'){
        msg.reply('Dj a-a-a-a-a-a-a-a-a😁😁✌️✌️✌️✌️zeitona 🔊🔊🔊🔊puur👍👍👍👍hahahahaha 😃😂😃😂😃pu tch tch tchama pu tch tch tchama pu tch tch tcha🔛🔛 vambora😎😎😎 para✋✋🙅‍♂🙅‍♂🙅‍♂🚫🚫 de fala 🗣️🗣️que tu é minha namorrrrrrrrr🥰👩‍❤️‍👨👩‍❤️‍👩👨‍❤️‍👨👩‍❤️‍💋‍👨👩‍❤️‍💋‍👩👨‍❤️‍💋‍👨 divulga🔈🔈 no Twitter 🐥🐥🐥🐥que o dj azeitona 🎧🎧🎧amassa💥💥 falando pras novinha👩👩🤭 das casinha 🏠🏠que tu é minha namotututututu🥰👩‍❤️‍👨👩‍❤️‍👨 isso é fofoca🙅‍♂🙅‍♂🤫 não é prrrrrr🔈🔈🔈to tipo bielzoow comendo🍽️🍽️😏 todas danada🥵🥵😈😈😈 to tipo mc poussss😎😎😎 comendo🍽️🍽️🤭 todas danada 😈😈🥵👉👌não sei🤔🤔🤔 oq aconteceénocomplexx as novinha jogando a tutututu💥💥🎧🎧🔊🔊🔊😁😁👍👍👍👍👍👍👍')
    }
})