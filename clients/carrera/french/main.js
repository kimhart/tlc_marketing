$(document).ready(function(){

  console.log('main.js linked!')

  var $rewards = $('#rewards-div')

   $('#go').on('click', function() {
      console.log('clicked!')
       $rewards.removeClass('hidden');
    });



});

