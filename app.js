const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");
const MongoStore = require("connect-mongo");

const express = require('express');
const socket = require('socket.io');
const app = express();
const server = app.listen(3000)

const pagesRoute = require('./routers/pagesRoute.js')
const authRoute = require('./routers/authRoute')

const mongoDbURL = 'mongodb+srv://burak:123@cluster0.qfxqba3.mongodb.net/?retryWrites=true&w=majority'

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

const io = socket(server)

io.on('connection', (socket) => {
  console.log('Bir kullanıcı sunucuya bağlandı.');

  socket.on('disconnect', () => {
    console.log('Bir kullanıcı sunucudan ayrıldı.');
  });
});



