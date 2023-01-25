const session = require('express-session')
const User = require('../models/User')
const featuresTemp=[{
"baslik":"Daha Güvenli",
"kucukbaslik":"Hiçbir mesajınız kayıt altına alınmaz.",
"image":"dia.png"
},{
  "baslik":"Cupcake Keyfi",
  "kucukbaslik":"Yazıştıkça Cupcake kazanın!",
  "image":"cupcakeHeart.png"
},{
  "baslik":"Aşkın Chat'i",
  "kucukbaslik":"Aşkınızı Yazışarak Pekiştirin",
  "image":"love-chat.png"
},{
  "baslik":"Süpriz Hediyeler!",
  "kucukbaslik":"Ummadığınız bir anda süpriz hediyeler kazanabilirsiinz!",
  "image":"gift.png"
}]

exports.getIndex = async (req, res)=>{
  const user = await User.findOne({ _id: req.session.userID });
  res.render('index',{
    page: "home",
    page_name: "home",
    featuresTemp,
    user
  })
}

exports.signin = async (req, res) =>{
  const user = await User.findOne({ _id: req.session.userID });
res.render('index',{
    page: 'authPages/sign-in',
    page_name: "signin",
    user
});
}


exports.login = async (req, res) =>{
  const user = await User.findOne({ _id: req.session.userID });
  res.render('index',{
      page: 'authPages/login',
      page_name: "login",
      user
  });
  }


exports.chatPage = async (req, res) =>{
    const user = await User.findOne({ _id: req.session.userID });
    res.render('index',{
        page: 'chat/chat',
        page_name: "chat",
        user
    });
    }