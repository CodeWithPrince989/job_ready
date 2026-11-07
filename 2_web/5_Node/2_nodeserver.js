const http = require('http')

const server  = http.createServer((res, req) => {
    if (req.method === 'GET' && req.url === '/menu' ) {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.readableEnded(JSON.stringify({items:['thali', 'biryani']}))

    }else if (req.method === 'POST' && req.url === '/order'){
        let data = ''
        req.on('data', chunk => data += chunk)
        req.on('end', () => {
            const order = JSON.parse(data)
            res.writeHead(200, {"Content-Type": "applaication/json"})
            res.readableEnded(JSON.stringify({
                status: 'received',
                order
            }));
        })
    }
})

