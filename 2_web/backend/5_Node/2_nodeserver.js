const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/menu') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ items: ['thali', 'biryani'] }))
        return
    }

    if (req.method === 'POST' && req.url === '/order') {
        let data = ''

        req.on('data', chunk => {
            data += chunk
        })

        req.on('end', () => {
            try {
                const order = JSON.parse(data)
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ status: 'received', order }))
            } catch {
                res.writeHead(400, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: 'Request body must be valid JSON' }))
            }
        })
        return
    }
})

server.listen(8081, () => {
    console.log('Node HTTP server is running at http://localhost:8081')
})
