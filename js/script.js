var baseDate = document.querySelector("#base_date");
var nx = document.querySelector("#nx");
var ny = document.querySelector("#ny");
var ta = document.querySelector("#ta");

document.querySelector("#btn1").onclick = () => {
  var xhr = new XMLHttpRequest();
  xhr.open(
      "GET", 
      "http://localhost:3000/proxy2?base_date=" + base_date.value +
      "&nx=" + nx.value +
      "&ny=" + ny.value, false);
  xhr.send();
  ta.value = xhr.responseText;
};