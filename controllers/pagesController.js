const session = require('express-session')
const User = require('../models/User')
const featuresTemp=[{
"baslik":"xd",
"kucuk-baslik":"",
"image":"cupcake.png"
},{
  "baslik":"asdad",
  "kucuk-baslik":"",
  "image":"chat-red.png"
},{
  "baslik":"asdsasdsaada",
  "kucuk-baslik":"",
  "image":"dash-dark.png"
},{
  "baslik":"asdasdaasda",
  "kucuk-baslik":"",
  "image":"testimg.png"
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