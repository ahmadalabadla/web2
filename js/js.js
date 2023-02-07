$(document).ready(function () {
  
    $(".a").click(function (){
      $(this).addClass("active").siblings().removeClass("active");
    });
  });