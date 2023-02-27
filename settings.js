const fs = require('fs')

global.creator = 'nxvall' 
global.apikey = ["abyss", "nxvall", "exorcist"]
global.lolkey = "yourapikey"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
