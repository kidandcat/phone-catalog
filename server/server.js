const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/phones', (req, res) => {
    const mobiles = [{
        title: "Samsung S7",
        color: "blue",
        description: "Movil chulo",
        price: 1500
    }, {
        title: "iPhone 7",
        color: "yellow",
        description: "Movil chulo",
        price: 1500
    }]
    res.send(JSON.stringify(mobiles))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))