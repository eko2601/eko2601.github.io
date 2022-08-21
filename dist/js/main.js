$(document).ready(function(){
    $(window).scroll(function(){
      scrollBody();
    });

    function scrollBody(){
      let scrollPosition=$(window).scrollTop();
      if(scrollPosition>20){
        $('#header-menu').addClass('bg-sky-900 shadow-md shadow-black');
      }else if(scrollPosition<20 && scrollPosition==0){
        $('#header-menu').removeClass('bg-sky-900 shadow-md shadow-black');
      }
    }
  });