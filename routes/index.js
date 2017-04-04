const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  let remember = null;
  if (req.user) {
    if (Object.keys(req.user).length)
      remember = 'true';
  }
  res.render('index', { remember });
});

module.exports = router;
