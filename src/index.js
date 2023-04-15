require("dotenv").config()
const {Client, IntentsBitField} = require("discord.js")

const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on("ready", (c) => {
    console.log("Bot is ready! Logged as "+c.user.tag);
})

client.on("messageCreate", (message) => {
    if (message.author.bot) {
        return
    }

    console.log(message.author.username + " >> " + message.content)
    if (message.content == "hey"){
        message.reply("Hey <@" + message.author + ">")
    }
})

client.login(process.env.TOKEN)