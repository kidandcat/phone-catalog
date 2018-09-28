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
        id: 1,
        title: "Samsung S7",
        color: "blue",
        description: "Samsung, OLED 6.1\" Full HD+, Kirin 970+IA, 6 GB RAM, 128 GB, Triple cámara Leica, Dual SIM, Negro",
        image: "https://images.samsung.com/is/image/samsung/es-galaxy-s7-g930f-sm-g930fzkaphe-001-front2-black?$PD_GALLERY_L_JPG$",
        price: 1500
    }, {
        id: 2,
        title: "iPhone 7",
        color: "yellow",
        description: "iPhone, OLED 6.1\" Full HD+, Kirin 970+IA, 6 GB RAM, 128 GB, Triple cámara Leica, Dual SIM, Negro",
        image: "https://www.aca-electronic.com/52-thickbox_default/iphone-7-a1778-32gb-ios10-120mp-ram-2gb-4g-lte.jpg",
        price: 5500
    }, {
        id: 3,
        title: "Huawei P20 Pro",
        color: "Dark",
        description: "Huawei P20 Pro, OLED 6.1\" Full HD+, Kirin 970+IA, 6 GB RAM, 128 GB, Triple cámara Leica, Dual SIM, Negro",
        image: "https://www.buymobiles.net/library/images/handsets/huawei/huawei-p20-pro-black_1.png",
        price: 600
    }]
    res.send(JSON.stringify(mobiles))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))