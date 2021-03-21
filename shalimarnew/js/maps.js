var map;
    $(document).ready(function(){
      map = new GMaps({
        div: '#map_canvas',
        lat: 18.958225,
  		lng: 72.832649,
  		zoom:18,
  		disableDefaultUI:true,
  		scrollwheel: false,
  		draggable: true,
      });
      map.drawOverlay({
        lat: 18.958225,
  		lng: 72.832649,
  content: '<div class="map-marker"><a href="http://goo.gl/q8fb2f" target="_blank"><img src="images/logo-marker.png" title="We Are Here!"/></a></div>'
});

});
