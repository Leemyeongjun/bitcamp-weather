const express = require('express');

const request = require('request');

const port = 3000; // 웹서버 포트 번호

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/weather', (req, res) => {   

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?" +
  "serviceKey=gYtciC7e5aLRxDH%2F37pIjbbu0gDYmKAKHcKOxNavvk03LeU5SrNJ6KTBlhHdbwNW5X0jNvvul4i3xo96OkMAGw%3D%3D" +
  "&pageNo=1" +
  "&numOfRows=5000" +
  "&dataType=JSON" +
  "&base_date=" + req.query.newDate +
  "&base_time=" + req.query.baseTime +
  "&nx=60" +
  "&ny=127";

  console.log(openApiUrl);

  request.get({
    uri: openApiUrl
  }, (error, reponse, body) =>{
    res.send(body);
    // console.log(body);
  });
});

// 웹서버 실행하기
app.listen(
  3000,                          // 포트 번호 지정
  () => {                        // 서버가 시작 되었을 때 호출될 메서드
    console.log(`${port}번 포트에서 서버 시작했음!`);
  }
);