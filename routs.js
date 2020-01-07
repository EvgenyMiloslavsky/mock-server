var express = require('express'),
  router = express.Router();

var chatData = [];

router.get('/rest/get', function (req, res) {
  // var data = require('./mock/user.json');
  res.send(chatData);
});

router.post('/rest/post', function (req, res) {
  chatData.push(req.body);
  // console.log("Post data", chatData);
  res.send(chatData);
});

module.exports = router;
