function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function formatDate(d,t){
  let dt = new Date();
  let time = dt.getFullYear() + d + addZero(dt.getMonth() + 1 ) + d + addZero(dt.getDate()) + ' ' + addZero(dt.getHours()) + t + addZero(dt.getMinutes()) + t + addZero(dt.getSeconds());
  return time;
}
