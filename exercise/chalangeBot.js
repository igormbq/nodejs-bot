const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    if(from.id == 352){
        ctx.reply("Ao seu dispor mestre")
    }else{
        ctx.reply("Desculpa, so recebo ordens do meu mestre")
    }
})

bot.startPolling()