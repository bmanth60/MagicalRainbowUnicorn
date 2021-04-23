import http from 'http'
import express from 'express'
import ws from 'ws'
import mustache from 'mustache-express'

const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const wsHost = process.env.EXTERNAL_HOST || 'localhost:3000'

const app = express()

app.set('views', `${__dirname}/../views`)
app.set('view engine', 'mustache')
app.engine('mustache', mustache())

app.use(express.static('public'))
app.use(express.static('build'))

app.get('/', (_req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.render('index', { title: 'Magical Rainbow Unicorn', isDev, wsHost })
})

// Configure the server
const server = http.createServer()

if (isDev) {
    // Start live reload server
    const _ws = new ws.Server({ server })
    app.use((_req, res, next) => {
        next()
    })
}

server.on('request', app)

server.listen(port, () => {
    console.log(`Web server listening on port ${port}...`)
})
