/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = 'css/graphics/';
hs.showCredits = false;
hs.outlineType = null;
hs.dimmingOpacity = 0.5;
hs.align = 'center';
hs.captionEval = 'this.a.title';
hs.registerOverlay({
	html: '<div class="closebutton" onclick="return hs.close(this)" title="Close"></div>',
	position: 'top right',
	useOnHtml: true,
	fade: 7 // fading the semi-transparent overlay looks bad in IE
});

