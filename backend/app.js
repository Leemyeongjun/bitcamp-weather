const express = require('express');
const request = require('request');

const port = 3000;

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/weather', (req, res) => {  

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?" +
  "serviceKey=gYtciC7e5aLRxDH%2F37pIjbbu0gDYmKAKHcKOxNavvk03LeU5SrNJ6KTBlhHdbwNW5X0jNvvul4i3xo96OkMAGw%3D%3D" +
  "&pageNo=1" +
  "&numOfRows=10000" +
  "&dataType=JSON" +
  "&base_date=20221217" +
  "&base_time=0500" +
  "&nx=60" +
  "&ny=127";

  request.get({
    uri: openApiUrl
  }, (error, reponse, body) =>{
    res.send(JSON.stringify(body));
    // res.send(body);
  });
});


app.listen(
  3000,                          
  () => {                        
    console.log(`${port}번 포트에서 서버 시작했음!`);
  }
);