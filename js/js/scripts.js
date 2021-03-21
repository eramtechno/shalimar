/*****page loader script start*****/

$(window).load(function () {
    "use strict";
	$("#status").fadeOut();
	$("#preloader").delay(550).fadeOut(750);


	
});
/********page loader script end********/


$(document).ready(function() {

// Initialise WOW
new WOW().init();

// Responsive Menu

$('.menu').slicknav({
            label: 'Menu',
            prependTo: 'nav'
});


// Scroll Top

// Click event to scroll to top
	$('#scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});


// Tabs

$("#theMenu h3.menuTitle").click(function()
{
    $(this).toggleClass('active').next("div.menuItems").slideToggle(300).siblings("div.menuItems").slideUp("slow");
    $(this).siblings().removeClass('active');
});

});