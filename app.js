const express = require('express')
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");
const MongoStore = require("connect-mongo");
const app = express()

const pagesRoute = require('./routers/pagesRoute.js')
const authRoute = require('./routers/authRoute')
const mongoDbURL = ''
mongoose
  .connect(
    mongoDbURL
  )
  .then(() => {
    console.log("Veritabanına bağlandı.");
  });
app.set('view engine', 'ejs')
global.userIN = null;
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "my_keyboard_cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl:
        mongoDbURL,
      collectionName: "Sessions"
      }),
  })
);

app.use('*',(req,res,next)=>{
  userIN = req.session.userID;
  next()
})
app.use(pagesRoute)
app.use(authRoute)


app.listen(80, ()=>{
  console.log('Çalıştı.')
})
