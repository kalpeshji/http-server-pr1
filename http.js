const http = require('http')
const url = require('url')
const fs = require('fs')

let about = fs.readFileSync('about.txt', 'utf-8', (err) => {
    if (err) throw err;
});

let product = fs.readFileSync('product.txt', 'utf-8', (err) => {
    if (err) throw err;
});

http.createServer(function (req, res) {
    let pathname = url.parse(req.url).pathname;
    if (pathname == "/") {
        res.write('Home Page')
    } else if (pathname == '/about') {
        res.write(about);
    } else if (pathname == '/product') {
        res.write(product)
    } else {
        res.write('Error 404!')
    }
    res.end()
}).listen(8000)
console.log("server is running at 8000")