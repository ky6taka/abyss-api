__path = process.cwd()

var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 3000 || 80
var { color } = require('./lib/color.js')

var apirouter = require('./routes/api')
var mainrouter = require('./routes/main')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("assets"))

app.get('/', (req, res) => {
    res.sendFile(__path + '/docs/home.html')
})
app.get('/docs', (req, res) => {
    res.sendFile(__path + '/docs/index.html')
})

app.use('/api', apirouter)
app.use("/", mainrouter)

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app