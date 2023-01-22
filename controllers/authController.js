const User = require('../models/User')
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).redirect('/login')
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }); 
    if (user) { 
      bcrypt.compare(password, user.password, (err, same) => { 
          if(same){
          req.session.userID = user._id;
          res.status(400).send('/login');
          res.status(200).redirect('/');
        }
      });
    } else {
      res.status(400).redirect('/login');
    }
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};


exports.logoutUser = (req, res) => {
  req.session.destroy(()=> {
    res.redirect('/');
  })
}