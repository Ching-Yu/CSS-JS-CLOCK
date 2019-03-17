//獲取元素
const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hour = document.getElementById("hour");

//秒針變化
function getSecond() {
  const d = new Date();
  const second = d.getSeconds() * 6;
  const secondmove = second + 180;
  if(second == 0){
      sec.style.transition = '';
  } else {
      sec.style.transition = `all .3s ease-in-out`;
  }
  sec.style.transform = `rotate(${secondmove}deg)`;
}

//分針變化
function getMinute(){
    const d = new Date();
    const minute = d.getMinutes() * 6;
    const minutemove = minute + 180;
    if(minute == 0){
        min.style.transition = '';
    } else {
        min.style.transition = `all .3s ease-in-out`;
    }
    min.style.transform = `rotate(${minutemove}deg)`;
}

//時針變化
function getHour() {
  const d = new Date();
  const _hour = d.getHours() * 30;
  const hourmove = _hour - 90;
  hour.style.transform = `rotate(${hourmove}deg)`;
}

function setTime(){
    getHour();
    getMinute();
    getSecond();
}

setTime();

setInterval(getHour, 1000);
setInterval(getMinute, 1000);
setInterval(getSecond, 1000);
