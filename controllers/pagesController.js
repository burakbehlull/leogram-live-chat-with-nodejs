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

exports.getIndex = (req, res)=>{
  res.render('index',{
    page: "home",
    featuresTemp
  })
}

exports.about = (req, res) =>{
res.render('index',{
    page: 'authPages/sign-in'
});
}
