var rectangle;
var map;
var infoWindow;

var data = {"quads": [{"name": "Camp Verde", "lat1": 35.0, "lon1": -112.0, "lat2": 34.5, "lon2": -111.5}], "lat1": 35.0, "lat2": 34.5, "lon": -111.75, "lat": 34.75, "lon1": -112.0, "lon2": -111.5};

function initialize() {

  function calcBounds(center,size){

         var n=google.maps.geometry.spherical.computeOffset(center,size.height/2,0).lat(),
             s=google.maps.geometry.spherical.computeOffset(center,size.height/2,180).lat(),
             e=google.maps.geometry.spherical.computeOffset(center,size.width/2,90).lng(),
             w=google.maps.geometry.spherical.computeOffset(center,size.width/2,270).lng();
            return new google.maps.LatLngBounds(new google.maps.LatLng(s,w),
                                                     new google.maps.LatLng(n,e));


      }
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 10,
    center: new google.maps.LatLng(data['lat'], data['lon']),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });


    var quads = data['quads'];
    for (i=0; i < quads.length; i++) {
        q = quads[i];
        var rectangle = new google.maps.Rectangle({
	    strokeColor: '#000000',
            strokeOpacity: 1,
            strokeWeight: 1,
            fillColor: '#008000',
            fillOpacity: .2,
	    editable: false,
            draggable: false,
            map: map,
            bounds: new google.maps.LatLngBounds(
                new google.maps.LatLng(q.lat1, q.lon1),
                new google.maps.LatLng(q.lat2, q.lon2)
            )
        });
    }


// 	  google.maps.event.addListener(rectangle1, 'click', function( event ){
//   alert( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() );
// });

}
google.maps.event.addDomListener(window, 'load', initialize);
