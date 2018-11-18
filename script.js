var rectangle;
var map;
var infoWindow;

var data = {"quads": [{"name": "Amos Point", "lat1": 36.0, "lon1": -113.625, "lat2": 35.875, "lon2": -113.5}, {"name": "Bat Cave", "lat1": 36.125, "lon1": -113.875, "lat2": 36.0, "lon2": -113.75}, {"name": "Coconino Pt NE", "lat1": 36.0, "lon1": -111.625, "lat2": 35.875, "lon2": -111.5}, {"name": "Columbine Falls", "lat1": 36.125, "lon1": -114.0, "lat2": 36.0, "lon2": -113.875}, {"name": "Devils Slide Rapids", "lat1": 36.0, "lon1": -113.75, "lat2": 35.875, "lon2": -113.625}, {"name": "Diamond Peak", "lat1": 35.875, "lon1": -113.375, "lat2": 35.75, "lon2": -113.25}, {"name": "Frazier Wells SW", "lat1": 35.875, "lon1": -113.25, "lat2": 35.75, "lon2": -113.125}, {"name": "Granite Park", "lat1": 36.0, "lon1": -113.375, "lat2": 35.875, "lon2": -113.25}, {"name": "Hindu Canyon", "lat1": 35.75, "lon1": -113.625, "lat2": 35.625, "lon2": -113.5}, {"name": "Horse Flat", "lat1": 35.875, "lon1": -113.875, "lat2": 35.75, "lon2": -113.75}, {"name": "Loy Butte", "lat1": 35.0, "lon1": -112.0, "lat2": 34.875, "lon2": -111.875}, {"name": "Milkweed Canyon NW", "lat1": 35.75, "lon1": -113.75, "lat2": 35.625, "lon2": -113.625}, {"name": "Price Point", "lat1": 36.0, "lon1": -113.5, "lat2": 35.875, "lon2": -113.375}, {"name": "Snap Canyon East", "lat1": 36.25, "lon1": -113.875, "lat2": 36.125, "lon2": -113.75}, {"name": "Tincanebitts Point", "lat1": 36.125, "lon1": -113.75, "lat2": 36.0, "lon2": -113.625}, {"name": "Travertine Rapids", "lat1": 35.875, "lon1": -113.5, "lat2": 35.75, "lon2": -113.375}, {"name": "Vulcans Throne", "lat1": 36.25, "lon1": -113.125, "lat2": 36.125, "lon2": -113.0}, {"name": "Vulcans Throne SW", "lat1": 36.125, "lon1": -113.25, "lat2": 36.0, "lon2": -113.125}, {"name": "Whitmore Point", "lat1": 36.25, "lon1": -113.375, "lat2": 36.125, "lon2": -113.25}, {"name": "Whitmore Point SE", "lat1": 36.125, "lon1": -113.375, "lat2": 36.0, "lon2": -113.25}, {"name": "Whitmore Rapids", "lat1": 36.25, "lon1": -113.25, "lat2": 36.125, "lon2": -113.125}, {"name": "Wilson Mountain", "lat1": 35.0, "lon1": -111.875, "lat2": 34.875, "lon2": -111.75}, {"name": "Blue Spring", "lat1": 36.25, "lon1": -111.75, "lat2": 36.0, "lon2": -111.5}, {"name": "Cameron", "lat1": 36.0, "lon1": -111.5, "lat2": 35.75, "lon2": -111.25}, {"name": "Jumpup Canyon", "lat1": 36.75, "lon1": -112.75, "lat2": 36.5, "lon2": -112.5}, {"name": "Kanab Point", "lat1": 36.5, "lon1": -112.75, "lat2": 36.25, "lon2": -112.5}, {"name": "National Canyon", "lat1": 36.25, "lon1": -113.0, "lat2": 36.0, "lon2": -112.75}, {"name": "Tanner Wash", "lat1": 36.75, "lon1": -111.75, "lat2": 36.5, "lon2": -111.5}, {"name": "Camp Verde", "lat1": 35.0, "lon1": -112.0, "lat2": 34.5, "lon2": -111.5}], "lat1": 36.75, "lat2": 34.5, "lon": -112.6875, "lat": 35.625, "lon1": -111.5, "lon2": -113.875};

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
    zoom: 8,
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
