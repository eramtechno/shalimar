var map;

    $(document).ready(function(){
      map = new GMaps({
        div: '#locationMashup',
        lat: 18.958018,
  		lng: 72.832629,
  		zoom:12,
  		disableDefaultUI:true,
  		scrollwheel: false,
  		draggable: true,
      });
   map.addMarker({
        lat: 18.958018,
  		lng: 72.832629,
        title: 'Shalimar - Bhendi Bazaar',
});
});
