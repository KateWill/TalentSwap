const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

const isAuthenticated = (req, res, next) => {
  if (req.user)
    next();
   else
     return res.json({ })
}

router.post('/register', (req, res) => {
  let { email, password , screenname, bio, talent, zipcode } = req.body;

  User.register(new User({username: email, talent, zipcode, screenname, bio}), password, (err, user) => {
    if (err)
      return res.status(500).json(err);
    user.save( (err, user) => {
      if (err)
        return res.status(500).json(err);
      return res.json(user)
    });
  });
});

router.post('/login', (req, res) => {
 let { email, password } = req.body

 User.findOne({ username: req.body.email}, (err, user) => {
   if (!user)
     return res.status(500).json({ message: 'Invalid Username Or Password' });
   user.authenticate(req.body.password, (err, user, passwordErr) => {
     if (err)
       return res.status(500).json({ message: 'Invalid Username Or Password' });
     if (passwordErr)
       return res.status(500).json({ message: 'Invalid Username Or Password' });

     req.logIn(user, (err) => {
       return res.json(user);
     })
   });
  });
});

router.get('/user', isAuthenticated, (req,res) => {
  return res.json(req.user)
});

router.delete('/sign_out', (req, res) => {
  req.logout();
  res.status(200).json({});
});

router.get('/', isAuthenticated, (req,res) => {
  User.find({}, (err, users) =>{
    res.json(users)
  })
});


router.get('/:talent', (req,res) =>{
  User.find({ talent: req.params.talent }, (err,user)=>{
    return res.json(user)
  })
})

module.exports = router;
