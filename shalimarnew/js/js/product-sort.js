$(document).ready(function() {
		  if ($.fn.mixitup) {
			  $('#products-items').mixitup( {
				filterSelector: '.filter-item',
			  } );
			  $(".filter-item").click(function(e) {
				e.preventDefault();
			  })
		  }
});