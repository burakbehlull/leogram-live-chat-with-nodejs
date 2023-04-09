const dotenv = require('dotenv')
dotenv.config()
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const express = require('express');
const socket = require('socket.io');
const app = express();
const server = app.listen(process.env.PORT)

const { MONGODB_URL } = require('./config.json')

const pagesRoute = require('./routers/pagesRoute.js')
const authRoute = require('./routers/authRoute')

mongoose.connect(MONGODB_URL)
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
        MONGODB_URL,
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
  console.log('Bir kullanıcı sunucuya bağlandı.', socket.id);

  socket.on('disconnect', () => {
    console.log('Bir kullanıcı sunucudan ayrıldı.');
  });

  socket.on('chat', data=>{
    io.sockets.emit('chat', data)
  })
});



