const express = require('express')

const app = express()

app.use(express.json()) //use express.json() middleware to parse JSON request bodies

app.get("/menu", (req, res) => res.json({
    items: ['thali', 'biryani'] //returns a JSON response with the menu items
}))

// app.post("/order", (req, res) => { 
//     res.status(200).json({  //send a status code of 200 and a JSON response with the order status and the order details
//         status: 'received',
//         order: req.body
//     });
// })


app.post("/order", myfun);

const myfun = (req, res) => {

    let order = req.body; //get the order details from the request body
    
    res.status(200).json({
        status: 'received',
        order: order
    });
}