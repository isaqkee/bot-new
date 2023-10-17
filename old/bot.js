const discord = require("discord.js")
const cliente = new discord.Client()

cliente.on('ready', ()=> {
    console.log("Logado")
})

cliente.on('message', (message) => {
    if (message.content === "A Paz do Senhor Jesus bot"){
        message.reply("A paz do Senhor vaso, firme na terra?")
    }
})

cliente.login('MTE2MzgzMTcyMDMyMDE3MjE1Mw.GuOjLx.ZukvTXB9l4QgS4kb3h9c3pEzn4kPVGSLL9Fi9Y')

