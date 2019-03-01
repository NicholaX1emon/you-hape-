const http = require('http')

const port = 8080

const server = http.createServer((res,req) => {
    console.log(`request--->' ${res.url} ${res.method}`)
    req.end('simle node server')
})

server.listen(port, () => {
    console.log('server started!')
})