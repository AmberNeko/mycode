(function () {
     var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
         window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
         window.requestAnimationFrame = requestAnimationFrame;
         })();
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
var i = 0;
var rr;
var lr;
function add(a) {
            document.getElementById(a).addEventListener('mouseenter', function () {
                if (a == 'right') {
                    leftRight(a);
                } else {
                    leftRight(a);
                }
            });

        }

        add('left');
        add('right');


        function leftRight(tag) {
            if (tag == "left") {
                i += 10;
                move.style.WebkitTransform = "translateX(" + i + "px)";
                move.style.mstransform = "translateX(" + i + "px)";
                move.style.transform = "translateX(" + i + "px)";
                lr = requestAnimationFrame(function () {
                    leftRight('left');
                });
                // document.getElementById('move').style.WebkitTransform+="translateX(100px)";
                // document.getElementById('move').style.mstransform+="translateX(100px)";
                // document.getElementById('move').style.transform+="translateX(100px)";
            } else {
                i -= 10;
                move.style.WebkitTransform = "translateX(" + i + "px)";
                move.style.mstransform = "translateX(" + i + "px)";
                move.style.transform = "translateX(" + i + "px)";
                rr = requestAnimationFrame(function () {
                    leftRight('right');
                });
                // document.getElementById('move').style.WebkitTransform+="translateX(-100px)";
                // document.getElementById('move').style.mstransform+="translateX(-100px)";
                // document.getElementById('move').style.transform+="translateX(-100px)";
            }
            // var x = i * 100;

        }
        // document.getElementById('right').addEventListener('mouseleave',function(){
        //     cancelAnimationFrame(rr);
        // });
        // document.getElementById('left').addEventListener('mouseleave',function(){
        //     cancelAnimationFrame(lr);
        // });
        function remove(b) {
            document.getElementById(b).addEventListener('mouseout', function () {
                if (b == 'right') {
                    cancelAnimationFrame(rr); return;
                } else {
                    cancelAnimationFrame(lr); return;
                }
            });
        }
        remove('left');
        remove('right');
