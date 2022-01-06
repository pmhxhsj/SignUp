const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const config = require('./config/key');
const { User } = require('./models/User');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose
  .connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch((e) => console.log('MongoDB error: ', e));

app.get('/', (req, res) => {
  res.send('Hello dasdsadsaWorld!');
});

app.post('/register', (req, res) => {
  //회원가입할 때 필요한 정보들 가져오면 db에 넣어줌
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });

    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});