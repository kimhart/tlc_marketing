$(document).ready(function(){

  console.log('main.js linked!')

  function cycleImages(){

      var $active = $('#background_cycler .active-image');
      var $next = ($('#background_cycler .active-image').next().length > 0) ? $('#background_cycler .active-image').next() : $('#background_cycler img:first');
        $next.css('z-index',2);

        $active.fadeOut(1500,function(){
          $active.css('z-index',1).show().removeClass('active-image');
          $next.css('z-index',3).addClass('active-image');
      });
    }

      $('#background_cycler').fadeIn(2000);
      setInterval(cycleImages, 7000);
    
});

