var move = document.getElementById('carousel-example-generic');
var m = 0;
var x;
var s;
var f;
function test(event) {
  console.log('move'+f);
    x = event.touches[0].clientX;
    f = x - s;
    if (f > 50) {
        document.getElementById('left').click();
        move.removeEventListener('touchmove', test);

    } else if (f < -50) {
        document.getElementById('right').click();
        move.removeEventListener('touchmove', test);
    }
}
move.addEventListener('touchstart', function (event) {
    //event.preventDefault();
  console.log('down');
    s = event.touches[0].clientX;
    move.addEventListener('touchmove', test);
});
move.addEventListener('touchend', function () {
    move.removeEventListener('touchmove', test);
    // x=0;s=0;
});
