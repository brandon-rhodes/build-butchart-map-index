var rectangle;
var map;
var infoWindow;

var data = {
    "quads": [
        {
            "name": "Amos Point", 
            "scale": "24000", 
            "lat1": 36.0, 
            "lon1": -113.625, 
            "lat2": 35.875, 
            "lon2": -113.5, 
            "url": "61197.html"
        }, 
        {
            "name": "Bat Cave", 
            "scale": "24000", 
            "lat1": 36.125, 
            "lon1": -113.875, 
            "lat2": 36.0, 
            "lon2": -113.75, 
            "url": "61199.html"
        }, 
        {
            "name": "Coconino Pt NE", 
            "scale": "24000", 
            "lat1": 36.0, 
            "lon1": -111.625, 
            "lat2": 35.875, 
            "lon2": -111.5, 
            "url": "61198.html"
        }, 
        {
            "name": "Columbine Falls", 
            "scale": "24000", 
            "lat1": 36.125, 
            "lon1": -114.0, 
            "lat2": 36.0, 
            "lon2": -113.875, 
            "url": "61200.html"
        }, 
        {
            "name": "Devils Slide Rapids", 
            "scale": "24000", 
            "lat1": 36.0, 
            "lon1": -113.75, 
            "lat2": 35.875, 
            "lon2": -113.625, 
            "url": "61202.html"
        }, 
        {
            "name": "Diamond Peak", 
            "scale": "24000", 
            "lat1": 35.875, 
            "lon1": -113.375, 
            "lat2": 35.75, 
            "lon2": -113.25, 
            "url": "61201.html"
        }, 
        {
            "name": "Frazier Wells SW", 
            "scale": "24000", 
            "lat1": 35.875, 
            "lon1": -113.25, 
            "lat2": 35.75, 
            "lon2": -113.125, 
            "url": "61203.html"
        }, 
        {
            "name": "Granite Park", 
            "scale": "24000", 
            "lat1": 36.0, 
            "lon1": -113.375, 
            "lat2": 35.875, 
            "lon2": -113.25, 
            "url": "61204.html"
        }, 
        {
            "name": "Hindu Canyon", 
            "scale": "24000", 
            "lat1": 35.75, 
            "lon1": -113.625, 
            "lat2": 35.625, 
            "lon2": -113.5, 
            "url": "61205.html"
        }, 
        {
            "name": "Horse Flat", 
            "scale": "24000", 
            "lat1": 35.875, 
            "lon1": -113.875, 
            "lat2": 35.75, 
            "lon2": -113.75, 
            "url": "61206.html"
        }, 
        {
            "name": "Loy Butte", 
            "scale": "24000", 
            "lat1": 35.0, 
            "lon1": -112.0, 
            "lat2": 34.875, 
            "lon2": -111.875, 
            "url": "61207.html"
        }, 
        {
            "name": "Milkweed Canyon NW", 
            "scale": "24000", 
            "lat1": 35.75, 
            "lon1": -113.75, 
            "lat2": 35.625, 
            "lon2": -113.625, 
            "url": "61208.html"
        }, 
        {
            "name": "Price Point", 
            "scale": "24000", 
            "lat1": 36.0, 
            "lon1": -113.5, 
            "lat2": 35.875, 
            "lon2": -113.375, 
            "url": "61209.html"
        }, 
        {
            "name": "Snap Canyon East", 
            "scale": "24000", 
            "lat1": 36.25, 
            "lon1": -113.875, 
            "lat2": 36.125, 
            "lon2": -113.75, 
            "url": "61210.html"
        }, 
        {
            "name": "Tincanebitts Point", 
            "scale": "24000", 
            "lat1": 36.125, 
            "lon1": -113.75, 
            "lat2": 36.0, 
            "lon2": -113.625, 
            "url": "61212.html"
        }, 
        {
            "name": "Travertine Rapids", 
            "scale": "24000", 
            "lat1": 35.875, 
            "lon1": -113.5, 
            "lat2": 35.75, 
            "lon2": -113.375, 
            "url": "61211.html"
        }, 
        {
            "name": "Vulcans Throne", 
            "scale": "24000", 
            "lat1": 36.25, 
            "lon1": -113.125, 
            "lat2": 36.125, 
            "lon2": -113.0, 
            "url": "61213.html"
        }, 
        {
            "name": "Vulcans Throne SW", 
            "scale": "24000", 
            "lat1": 36.125, 
            "lon1": -113.25, 
            "lat2": 36.0, 
            "lon2": -113.125, 
            "url": "61214.html"
        }, 
        {
            "name": "Whitmore Point", 
            "scale": "24000", 
            "lat1": 36.25, 
            "lon1": -113.375, 
            "lat2": 36.125, 
            "lon2": -113.25, 
            "url": "61215.html"
        }, 
        {
            "name": "Whitmore Point SE", 
            "scale": "24000", 
            "lat1": 36.125, 
            "lon1": -113.375, 
            "lat2": 36.0, 
            "lon2": -113.25, 
            "url": "61217.html"
        }, 
        {
            "name": "Whitmore Rapids", 
            "scale": "24000", 
            "lat1": 36.25, 
            "lon1": -113.25, 
            "lat2": 36.125, 
            "lon2": -113.125, 
            "url": "61216.html"
        }, 
        {
            "name": "Wilson Mountain", 
            "scale": "24000", 
            "lat1": 35.0, 
            "lon1": -111.875, 
            "lat2": 34.875, 
            "lon2": -111.75, 
            "url": "61218.html"
        }, 
        {
            "name": "Blue Spring", 
            "scale": "62500", 
            "lat1": 36.25, 
            "lon1": -111.75, 
            "lat2": 36.0, 
            "lon2": -111.5, 
            "url": "61188.html"
        }, 
        {
            "name": "Cameron", 
            "scale": "62500", 
            "lat1": 36.0, 
            "lon1": -111.5, 
            "lat2": 35.75, 
            "lon2": -111.25, 
            "url": "61189.html"
        }, 
        {
            "name": "Jumpup Canyon", 
            "scale": "62500", 
            "lat1": 36.75, 
            "lon1": -112.75, 
            "lat2": 36.5, 
            "lon2": -112.5, 
            "url": "61191.html"
        }, 
        {
            "name": "Kanab Point", 
            "scale": "62500", 
            "lat1": 36.5, 
            "lon1": -112.75, 
            "lat2": 36.25, 
            "lon2": -112.5, 
            "url": "61193.html"
        }, 
        {
            "name": "National Canyon", 
            "scale": "62500", 
            "lat1": 36.25, 
            "lon1": -113.0, 
            "lat2": 36.0, 
            "lon2": -112.75, 
            "url": "61196.html"
        }, 
        {
            "name": "Tanner Wash", 
            "scale": "62500", 
            "lat1": 36.75, 
            "lon1": -111.75, 
            "lat2": 36.5, 
            "lon2": -111.5, 
            "url": "61195.html"
        }, 
        {
            "name": "Camp Verde", 
            "scale": "125000", 
            "lat1": 35.0, 
            "lon1": -112.0, 
            "lat2": 34.5, 
            "lon2": -111.5, 
            "url": "61192.html"
        }
    ], 
    "lat1": 36.75, 
    "lat2": 34.5, 
    "lon": -112.6875, 
    "lat": 35.625, 
    "lon1": -111.5, 
    "lon2": -113.875
};

function initialize() {

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 8,
        center: new google.maps.LatLng(data['lat'], data['lon']),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    var make_listener = function(url) {
        return function(event) {
            window.open(url, '_blank');
        };
    };

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
        var listener = make_listener(q.url);
        google.maps.event.addListener(rectangle, 'click', listener);
    }
}
google.maps.event.addDomListener(window, 'load', initialize);
