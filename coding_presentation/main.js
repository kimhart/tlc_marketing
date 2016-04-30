$(document).ready(function(){

    console.log( "linked" );


    // List of puppies!

    var puppyImages = 
      [{
        id: 1,
        name: 'Max',
        src: "puppy1.jpg",
        fluff: 4
      },
      {
        id: 2,
        name: 'Pudge',
        src: "puppy2.jpg",
        fluff: 3.5
      },
      {
        id: 3,
        name: 'Milly',
        src: "puppy3.jpg",
        fluff: 7
      },
      {
        id: 4,
        name: 'Stumps',
        src: "puppy4.jpg",
        fluff: 6
      },
      {
        id: 5,
        name: 'Balto',
        src: "puppy5.jpg",
        fluff: 7.8
      },
      {
        id: 6,
        name: 'Priscilla',
        src: "puppy6.jpg",
        fluff: 10.2
      },
      {
        id: 7,
        name: 'Snoop',
        src: "puppy7.jpg",
        fluff: 100
      }];


// Setting all my variables so I can grab certain elements on the page and use them more than once //

    var $puppyButton = $('#puppy-button');
    var $puppyNameDiv = $('.puppy-name-container');
    var $puppyImageDiv = $('.puppy-photo-container');
    var $puppyFluffDiv = $('.puppy-fluff-container');
    var $dropdown = $('.dropdown');


// Make a function that fires on the click of the 'Go' Button //

    $puppyButton.on('click', function (){

      // 1. MAKE PUPPIES APPEAR AT RANDOM

      //    This algorithm is finding a random number between 0 and however many puppies are in my list. This makes it dynamic no matter how many puppies I decide to add.
      
      var randomNumber = Math.floor( Math.random() * puppyImages.length );
      

      // 2. MAKE RANDOM NUMBER REPRESENT PUPPY'S INFO

      //    Find the puppy in the list with the id number that matches the random number you just created. 
      //    Then grab the image, name and fluff-level of that puppy and set them to new variables.

      var image = puppyImages[randomNumber].src;
      var name = puppyImages[randomNumber].name;
      var fluffLevel = puppyImages[randomNumber].fluff;


      // 3. MAKE SURE PAGE STARTS OUT BLANK AND CLEARS AFTER EACH CLICK

      //    We don't want a million puppies pasting onto this page over and over.
      //    Target the different elements on the page and set their content to an empty value.

      $puppyNameDiv.html('');
      $puppyImageDiv.html('');
      $puppyFluffDiv.html('');


      // 4. SHOW THE PUPPIES

      //    You have the information in abstract code form, now make it display on the page.
      //    Targets elements on the page, combines your variables with actual HTML

      $puppyNameDiv.append('<h2>' + name.toUpperCase() + '</h2>');
      $puppyImageDiv.append('<img src="' + image + '">')


      // 5. CHANGE DISPLAY FOR SNOOP

      // Algorithm: If the puppy is actually Snoop Dogg — first recognize that it's Snoop by finding the name of the current object.
      // Change "Fluff Level" to "Street Level" and make the text red. Otherwise run code as usual.

      if (name === "Snoop") {
        $puppyFluffDiv.html('');
        $puppyFluffDiv.append('<h2> Street Level: 100 </h2>');
        $puppyFluffDiv.css("color", "#cc0000");
      } else {
        $puppyFluffDiv.html('');
        $puppyFluffDiv.append('<h2>Fluff Level: ' + fluffLevel + '</h2>');
        $puppyFluffDiv.css("color", "#809fff")
      }

    });

});








