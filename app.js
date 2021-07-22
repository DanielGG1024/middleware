// app.js
const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
    const now = req.requestTime = new Date()
    const method = req.method
    const url = req.url
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    const hour = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    if (req.url !== '/favicon.ico') {
        console.log(`${year}-${month}-${date} ${hour}:${minutes}:${seconds} | ${method} form ${url}`);
    }
    next()
})

app.get('/', (req, res, next) => {

    res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
    res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
    res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
    res.send('新增一筆  Todo')
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})