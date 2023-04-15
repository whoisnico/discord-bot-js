const {Client, IntentsBitField} = require("discord.js")

const client = new Client ({
    intents: [
        IntentsBitField.Flags.Gu
    ]
})