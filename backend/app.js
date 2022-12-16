const express = require('express');
const request = require('request');

const port = 3000;

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {  

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?" +
    "serviceKey=gYtciC7e5aLRxDH%2F37pIjbbu0gDYmKAKHcKOxNavvk03LeU5SrNJ6KTBlhHdbwNW5X0jNvvul4i3xo96OkMAGw%3D%3D" +
    "&pageNo=1" +
    "&numOfRows=1000" +
    "&dataType=JSON" +
    "&base_date=" + req.query.base_date +
    "&base_time=0600" +
    "&nx=" + req.query.nx +
    "&ny=" + req.query.ny;

  request.get({
    uri: openApiUrl
  }, (error, reponse, body) =>{
    res.send(body);
  });
});

// 웹서버 실행하기
app.listen(
  3000,                          // 포트 번호 지정
  () => {                        // 서버가 시작 되었을 때 호출될 메서드
    console.log(`${port}번 포트에서 서버 시작했음!`);
  }
);