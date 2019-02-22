var timer;
$(target).on({
  touchstart: function(){
    timer = setTimeout(function(){
      //do what?
    },1000)
  },
  touchend: function(){
    clearTimeout(timer);
  },
  touchmove: function(){
    clearTimeout(timer);
  }
});
