const express = require('express')
const app = express()

const pagesRoute = require('./routers/pagesRoute.js')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(pagesRoute)


app.listen(80, ()=>{
  console.log('Çalıştı.')
})
