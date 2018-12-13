function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function formatDate(d,t){
  let d = new Date();
  let time = d.getFullYear() + d + addZero(d.getMonth()) + 1 + d + addZero(d.getDate()) + ' ' + addZero(d.getHours()) + t + addZero(d.getMinutes()) + t + addZero(d.getSeconds());
  return time;
}
