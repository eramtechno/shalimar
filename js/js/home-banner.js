

jQuery(document).ready(function() {

jQuery(function() {

			jQuery('#bannerscollection').bannerscollection_zoominout({
				skin: 'opportune',
				responsive:true,
				duration: 10,
				width: 1920,
				height: 1200,
				width100Proc:true,
				height100Proc:true,
				showCircleTimer:true,
				circleRadius:8,
				circleLineWidth:4,
				circleColor: "#ffffff", //849ef3
				circleAlpha: 50,
				behindCircleColor: "#000000",
				behindCircleAlpha: 20,
				thumbsWrapperMarginTop:-5,
				showBottomNav:false,
				showPreviewThumbs:false,
				showNavArrows:true,
				autoHideNavArrows: !1,
				pauseOnMouseOver: !1,
				enableTouchScreen: !1,
					
			});		

			});			
// Nivo Slider

$('#homeBanners').nivoSlider({
    effect: 'sliceDown',               // Specify sets like: 'fold,fade,sliceDown'
    slices: 15,                     // For slice animations
    boxCols: 18,                     // For box animations
    boxRows: 9,                     // For box animations
    animSpeed: 750,                 // Slide transition speed
    pauseTime: 7000,                // How long each slide will show
    startSlide: 0,                  // Set starting Slide (0 index)
    directionNav: true,             // Next & Prev navigation
    controlNav: false,               // 1,2,3... navigation
    controlNavThumbs: false,        // Use thumbnails for Control Nav
    pauseOnHover: false,             // Stop animation while hovering
    prevText: '<span class="pre-btn"></span>',               // Prev directionNav text
    nextText: '<span class="nxt-btn"></span>',               // Next directionNav text
});					
		

// Initialise Text Rotate
$(".rotate").textrotator({animation: 'flip',speed: 7500});
$(".rotate1").textrotator({speed: 12000});			
		
									
				});	//ready
