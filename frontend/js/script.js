let weatherImg = document.querySelector('.weatherImg');
let weatherText = document.querySelector('.weatherText');
let wind = document.querySelector('.wind');
let windText = document.querySelector('.windText');
let humidity = document.querySelector('.humidity');
let precipitation = document.querySelector('.precipitation');
let footer = document.querySelector('.footer');

let info;

(function() {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET", 
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?" +
    "serviceKey=gYtciC7e5aLRxDH%2F37pIjbbu0gDYmKAKHcKOxNavvk03LeU5SrNJ6KTBlhHdbwNW5X0jNvvul4i3xo96OkMAGw%3D%3D" +
    "&pageNo=1" +
    "&numOfRows=20" +
    "&dataType=JSON" +
    "&base_date=20221217" +
    "&base_time=0500" +
    "&nx=60" +
    "&ny=127", false);
  xhr.send();

  info = JSON.parse(xhr.responseText);

  let tmp = 0,
      reh = 0,
      wsd = 0,
      pty = 0,
      sky = 0,
      pop = 0;

  info.response.body.items.item.forEach((value) => {
    if(value.category == 'TMP') {
      tmp = parseInt(value.fcstValue);
    } else if(value.category == 'REH') {
      reh = parseInt(value.fcstValue);
    } else if(value.category == 'WSD') {
      wsd = value.fcstValue;
    } else if(value.category == 'PTY') {
      pty = parseInt(value.fcstValue);
    } else if(value.category == 'SKY') {
      sky = parseInt(value.fcstValue);
    } else if(value.category == 'POP') {
      pop = parseInt(value.fcstValue);
    }
  });

  document.querySelector('.weatherTmp').innerHTML = `${tmp}°`;

  if(pty == 0 && sky == 1) {
    weatherImg.style = 'background-image: url(../frontend/img/sun.png)';
    weatherText.innerHTML = '맑음';
  } else if(pty == 0 && sky == 3) {
    weatherImg.style = 'background-image: url(../frontend/img/cloud.png)';
    weatherText.innerHTML = '구름';
  } else if(pty == 0 && sky == 4) {
    weatherImg.style = 'background-image: url(../frontend/img/blackcloud.png)';
    weatherText.innerHTML = '흐림';
  } else if(pty == 1) {
    weatherImg.style = 'background-image: url(../frontend/img/rain.png)';
    weatherText.innerHTML = '비';
  } else if(pty == 2) {
    weatherImg.style = 'background-image: url(../frontend/img/rainsnow.png)';
    weatherText.innerHTML = '비와 눈';
  } else if(pty == 3) {
    weatherImg.style = 'background-image: url(../frontend/img/snow.png)';
    weatherText.innerHTML = '눈';
  } else if(pty == 4) {
    weatherImg.style = 'background-image: url(../frontend/img/rainrain.png)';
    weatherText.innerHTML = '소나기';
  }

  if(wsd >= 0 && wsd < 1) {
    wind.innerHTML = '고요';
  } else if(wsd >= 1 && wsd < 2) {
    wind.innerHTML = '아주약함';
  } else if(wsd >= 2 && wsd < 3) {
    wind.innerHTML = '약함';
  } else if(wsd >= 3 && wsd < 5) {
    wind.innerHTML = '중간';
  } else if(wsd >= 5 && wsd < 7) {
    wind.innerHTML = '조금강함';
  } else if(wsd >= 7 && wsd < 10) {
    wind.innerHTML = '강함';
  } else if(wsd >= 10 && wsd < 12) {
    wind.innerHTML = '태풍';
  }

  wind.style = 'background-image: url(../frontend/img/wind.png)';

  humidity.style = 'background-image: url(../frontend/img/humidity.png)';
  humidity.innerHTML = `${reh}%`;

  precipitation.style = 'background-image: url(../frontend/img/precipitation.png)';
  precipitation.innerHTML = `${pop}%`;

})();
