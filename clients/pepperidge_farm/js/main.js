$(document).ready(function(){

console.log('greetings from main.js!');
console.log("Body width: " + $('body').width());
console.log("Active width: " + $('.active').width());


$(function() {
  $('.toggle-answer').click(function() {
      $(this).find('p').slideToggle();
      $(this).find('ul').slideToggle();
      $(this).find('li').slideToggle();
      $(this).find('h5').slideToggle();
      $(this).find('div').slideToggle();
  });
});

// hover on homepage buttons
$('#upload-div').hover(function(){     
  $('#upload-image').addClass('hover-opacity');    
  },     
  function(){    
    $('#upload-image').removeClass('hover-opacity');     
});

$('#redeem-div').hover(function(){     
  $('#redeem-image').addClass('hover-opacity');    
  },     
  function(){    
    $('#redeem-image').removeClass('hover-opacity');     
});

$('#participating-div').hover(function(){     
  $('#participating-image').addClass('hover-opacity');    
  },     
  function(){    
    $('#participating-image').removeClass('hover-opacity');     
});

// underline current page
$(function(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    }
  });
});



}); // document.ready
