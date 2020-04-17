var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/somay', function (req, res, next) {
  res.json({ msg: 'ds' })
});

router.get('/fibo', function (req, res, next) {
  var t0 = new Date()

  pangkat = (a, b) => {
    if (b == 0) {
      return 1;
    }
    let x = (a * pangkat(a, b - 1))
    return x;
  }
  pangkat(3, 1000)

  var t1 = new Date()
  res.json({
    msg: 'OKE',
    time: `${t1 - t0} ms`
  })
});


module.exports = router;
