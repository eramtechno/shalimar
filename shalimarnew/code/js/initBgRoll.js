$(document).ready(function() {


  // Or, to start a slideshow, just pass in an array of images
  $(".bgRotate").backstretch([
    "images/menuBG/bgImges01.jpg",
  //  "images/menuBG/bgImges02.jpg",
    "images/menuBG/bgImges03.jpg"    
  ], {duration: 4000, fade: 750});
  
    $(".bgRotate1").backstretch([
    "images/menuBG/bgImges05.jpg",
  //  "images/menuBG/bgImges02.jpg",
    "images/menuBG/bgImges06.jpg"    
  ], {duration: 7000, fade: 750});


});