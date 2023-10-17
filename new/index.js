import { Client, IntentsBitField, Message } from "discord.js";
import * as dotenv from "dotenv"
dotenv.config()

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', () => {
    console.log("No Ar")
})

client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "a paz do Senhor bot, vamo no culto dos jovens lá na minha igreja em novembro vaso??"){
        message.reply("a Paz do Senhor terraa, claro que vou, será um prazer administrar o server da assembléia")
    }
})

client.login(process.env.TOKEN)