$(document).ready(function(){
    // 原型物件
    var Mouser=function(tag){
        this.tag=tag;
    }
    Mouser.prototype.mouser=function(event,offtop,offleft,cliWidth,cliHeight){
            var ex=event.pageX;
            var ey=event.pageY;
            var finalX=Math.round(-(ex-offleft-cliWidth))/4;    
            var finalY=Math.round(-(ey-offtop-cliHeight))/4;
            var finalZ=Math.abs(finalX-finalY)/100;
            $(this.tag).prev().text("EX："+finalX+"EY："+finalY);
            $(this.tag+">.bg_star").css({"transform":"translate3d("+finalX+"px,"+finalY+"px,-"+finalZ+"px)"});
            $(this.tag+">div:nth-child(2)").css({"transform":"translate3d("+(finalX*1.5)+"px,"+((finalY*1.5)-200)+"px,-"+(finalZ)+"px)"});
            $(this.tag+">div:nth-child(3)").css({"transform":"translate3d("+(finalX*3)+"px,"+((finalY*3)-200)+"px,-"+(finalZ+300)+"px)"});
            $(this.tag+">div:nth-child(4)").css({"transform":"translate3d("+(finalX*5.5)+"px,"+((finalY*6)-200)+"px,-"+(finalZ+600)+"px)"});
    }
    var floor_two=new Mouser(".two");
    $(".two").mousemove(function(event){
        var offtop=$(this).offset().top;
        var offleft=$(this).offset().left;
        var cliHeight=$(this).innerHeight();
        var cliWidth=$(this).innerWidth()/2;
        // console.log(cliHeight,cliWidth);
        floor_two.mouser(event,offtop,offleft,cliWidth,cliHeight);
    });
    
    $(".one").mousemove(function(event){
        var x=$(".one").offset().top;
        var y=$(".one").offset().left;
        var ex=event.pageX;
        var ey=event.pageY;
        $(".one").prev().text("EX："+ex+"EY："+ey);
        var finalX=Math.abs(ex-x)/10;    
        var finalY=Math.abs(ey-y)/10;
        var finalZ=Math.abs(finalX-finalY);
        // $(".bg_star").css({"transform":"translate3d(-"+finalX+"px,-"+finalY+"px,-"+finalZ+"px)"});
        $(".one>div:nth-child(2)").css({"transform":"translate3d(-"+finalX+"px,-"+finalY+"px,-"+finalZ+"px)"});
        $(".one>div:nth-child(3)").css({"transform":"translate3d(-"+((finalX*2)+150)+"px,-"+((finalY*2)+100)+"px,-"+(finalZ+300)+"px)"});
        $(".one>div:nth-child(4)").css({"transform":"translate3d(-"+((finalX*3)+300)+"px,-"+((finalY*3)+200)+"px,-"+(finalZ+600)+"px)"});
});
//    var i;
//    var text;
//     $(".test").mousemove(function(){
//         // var ex=event.pageX;
//         // var ey=event.pageY;

//         for(i=3;i<100;i+=3){
//             text+=(i<98?i+"px "+i+"px 1px rgb(131,128,128),":i+"px "+i+"px 1px rgb(131,128,128)");
//         }
//         $(".shadow").css("textShadow",text);
//     });
});
