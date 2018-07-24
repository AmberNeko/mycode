var x;
var xs;
var m = 0;
var move = document.getElementById('move');
function swipe(event) {
            xs = event.clientX;
            if(xs>x){
                m+=100;
                move.style.WebkitTransform = "translateX(" + m + "px)";
                move.style.mstransform = "translateX(" + m + "px)";
                move.style.transform = "translateX(" + m + "px)";
            }else{
                m-=100;
                move.style.WebkitTransform = "translateX(" + m + "px)";
                move.style.mstransform = "translateX(" + m + "px)";
                move.style.transform = "translateX(" + m + "px)";
            }
        }
        move.addEventListener('mousedown', function (event) {
            event.preventDefault();
            x = event.clientX;
        });
        move.addEventListener('mouseup', swipe);

    </script>
