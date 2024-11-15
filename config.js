const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '6285656715298'
global.nomerowner = ["6285656715298"]

//watermark 
global.packname = 'ᴍᴀᴅᴇ ᴡɪᴛʜ ʙʏ'
global.author = 'ᴍᴋɪ'

global.link = 'https://whatsapp.com/channel/0029VaAkC1YKrWR4FO1Gsn2C'
//database 
global.urldb = '';

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
