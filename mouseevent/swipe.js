var x;
var s;
var m=0;
var move = document.getElementById('move');


 function test(event) {
                x = event.clientX;
                m+=x-s;
                // console.log(x);
                move.style.WebkitTransform = "translateX(" + m + "px)";
                move.style.mstransform = "translateX(" + m + "px)";
                move.style.transform = "translateX(" + m + "px)";
            s=event.clientX;

            }
        move.addEventListener('mousedown', function (event) {
            event.preventDefault();
            s=event.clientX;
            move.addEventListener('mousemove', test);
        });
        move.addEventListener('mouseup', function(){
            move.removeEventListener('mousemove',test);
            // x=0;s=0;
        });
