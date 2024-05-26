// port info
const dotenv = require('dotenv');
dotenv.config();
const HTTP_PORT = process.env.HTTP_PORT;
const HOST = process.env.HOST;

const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const passport = require('passport');

// make express server 
const express = require("express"); 
const cors = require("cors");

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const passportConfig = require('./passport');

const app = express();
passportConfig();
app.use(express.json());
app.use(cors());
const { sequelize } = require('./models');
sequelize.sync().
then(function() {
  console.log('DB connection sucessful.');
}).catch(err=> console.log('error has occured', err));

// 미들웨어
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));    // 정적파일 제공 위치 기록
app.use('/img', express.static(path.join(__dirname, 'uploads'))); // img주소에 접근하려면 uploads 폴더로 접근해야된다는 것을 요청이 올 때 처리
app.use(express.json());    // bodyparser을 사용하는 대신 express.json을 사용한다
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));   // 쿠키 생성
app.use(session({   // 세션 옵션 지정
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET, // 쿠키 알려줌
    cookie: {   // cookie 옵션
        httpOnly: true,
        secure: false, 
    }
}));

module.exports = { app };

// router 등록하기 (요청을 처리하기 위해서)
const postController = require('./api/post/postController');
const photoController = require('./api/photo/photoController');
app.use('/', postController);
app.use('/', photoController);

// check server is running
app.listen(HTTP_PORT, HOST, () => {
    console.log(`server is on http://${HOST}:${HTTP_PORT}`);
});