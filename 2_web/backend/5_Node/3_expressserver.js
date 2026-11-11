import express from 'express'

const app = express()

app.use(express.json())

app.get('/menu', (req, res) => res.json({
    items: ['thali', 'biryani'] //returns a JSON response with the menu items
}))

app.post('/order', (req, res) => {
    res.status(200).json({
        status: 'received',
        order: req.body
    })
})

app.listen(8082, () => {
    console.log('Express example server is running at http://localhost:8082')
})