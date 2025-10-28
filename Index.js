const TelegramBot = require('node-telegram-bot-api')

const TOKEN = "8342960833:AAH-k33DvttqkhK5KVgic5yFRu4KAGA1v80";


const bot =  new TelegramBot(TOKEN,{ polling:true})