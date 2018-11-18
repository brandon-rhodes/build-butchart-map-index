var rectangle;
var map;
var infoWindow;

var data = {
    "quads": [
        {
            "name": "Amos Point", 
            "lat1": 36.0, 
            "lon1": -113.625, 
            "lat2": 35.875, 
            "lon2": -113.5, 
            "href": "61197.html"
        }, 
        {
            "name": "Bat Cave", 
            "lat1": 36.125, 
            "lon1": -113.875, 
            "lat2": 36.0, 
            "lon2": -113.75, 
            "href": "61199.html"
        }, 
        {
            "name": "Coconino Pt NE", 
            "lat1": 36.0, 
            "lon1": -111.625, 
            "lat2": 35.875, 
            "lon2": -111.5, 
            "href": "61198.html"
        }, 
        {
            "name": "Columbine Falls", 
            "lat1": 36.125, 
            "lon1": -114.0, 
            "lat2": 36.0, 
            "lon2": -113.875, 
            "href": "61200.html"
        }, 
        {
            "name": "Devils Slide Rapids", 
            "lat1": 36.0, 
            "lon1": -113.75, 
            "lat2": 35.875, 
            "lon2": -113.625, 
            "href": "61202.html"
        }, 
        {
            "name": "Diamond Peak", 
            "lat1": 35.875, 
            "lon1": -113.375, 
            "lat2": 35.75, 
            "lon2": -113.25, 
            "href": "61201.html"
        }, 
        {
            "name": "Frazier Wells SW", 
            "lat1": 35.875, 
            "lon1": -113.25, 
            "lat2": 35.75, 
            "lon2": -113.125, 
            "href": "61203.html"
        }, 
        {
            "name": "Granite Park", 
            "lat1": 36.0, 
            "lon1": -113.375, 
            "lat2": 35.875, 
            "lon2": -113.25, 
            "href": "61204.html"
        }, 
        {
            "name": "Hindu Canyon", 
            "lat1": 35.75, 
            "lon1": -113.625, 
            "lat2": 35.625, 
            "lon2": -113.5, 
            "href": "61205.html"
        }, 
        {
            "name": "Horse Flat", 
            "lat1": 35.875, 
            "lon1": -113.875, 
            "lat2": 35.75, 
            "lon2": -113.75, 
            "href": "61206.html"
        }, 
        {
            "name": "Loy Butte", 
            "lat1": 35.0, 
            "lon1": -112.0, 
            "lat2": 34.875, 
            "lon2": -111.875, 
            "href": "61207.html"
        }, 
        {
            "name": "Milkweed Canyon NW", 
            "lat1": 35.75, 
            "lon1": -113.75, 
            "lat2": 35.625, 
            "lon2": -113.625, 
            "href": "61208.html"
        }, 
        {
            "name": "Price Point", 
            "lat1": 36.0, 
            "lon1": -113.5, 
            "lat2": 35.875, 
            "lon2": -113.375, 
            "href": "61209.html"
        }, 
        {
            "name": "Snap Canyon East", 
            "lat1": 36.25, 
            "lon1": -113.875, 
            "lat2": 36.125, 
            "lon2": -113.75, 
            "href": "61210.html"
        }, 
        {
            "name": "Tincanebitts Point", 
            "lat1": 36.125, 
            "lon1": -113.75, 
            "lat2": 36.0, 
            "lon2": -113.625, 
            "href": "61212.html"
        }, 
        {
            "name": "Travertine Rapids", 
            "lat1": 35.875, 
            "lon1": -113.5, 
            "lat2": 35.75, 
            "lon2": -113.375, 
            "href": "61211.html"
        }, 
        {
            "name": "Vulcans Throne", 
            "lat1": 36.25, 
            "lon1": -113.125, 
            "lat2": 36.125, 
            "lon2": -113.0, 
            "href": "61213.html"
        }, 
        {
            "name": "Vulcans Throne SW", 
            "lat1": 36.125, 
            "lon1": -113.25, 
            "lat2": 36.0, 
            "lon2": -113.125, 
            "href": "61214.html"
        }, 
        {
            "name": "Whitmore Point", 
            "lat1": 36.25, 
            "lon1": -113.375, 
            "lat2": 36.125, 
            "lon2": -113.25, 
            "href": "61215.html"
        }, 
        {
            "name": "Whitmore Point SE", 
            "lat1": 36.125, 
            "lon1": -113.375, 
            "lat2": 36.0, 
            "lon2": -113.25, 
            "href": "61217.html"
        }, 
        {
            "name": "Whitmore Rapids", 
            "lat1": 36.25, 
            "lon1": -113.25, 
            "lat2": 36.125, 
            "lon2": -113.125, 
            "href": "61216.html"
        }, 
        {
            "name": "Wilson Mountain", 
            "lat1": 35.0, 
            "lon1": -111.875, 
            "lat2": 34.875, 
            "lon2": -111.75, 
            "href": "61218.html"
        }, 
        {
            "name": "Blue Spring", 
            "lat1": 36.25, 
            "lon1": -111.75, 
            "lat2": 36.0, 
            "lon2": -111.5, 
            "href": "61188.html"
        }, 
        {
            "name": "Cameron", 
            "lat1": 36.0, 
            "lon1": -111.5, 
            "lat2": 35.75, 
            "lon2": -111.25, 
            "href": "61189.html"
        }, 
        {
            "name": "Jumpup Canyon", 
            "lat1": 36.75, 
            "lon1": -112.75, 
            "lat2": 36.5, 
            "lon2": -112.5, 
            "href": "61191.html"
        }, 
        {
            "name": "Kanab Point", 
            "lat1": 36.5, 
            "lon1": -112.75, 
            "lat2": 36.25, 
            "lon2": -112.5, 
            "href": "61193.html"
        }, 
        {
            "name": "National Canyon", 
            "lat1": 36.25, 
            "lon1": -113.0, 
            "lat2": 36.0, 
            "lon2": -112.75, 
            "href": "61196.html"
        }, 
        {
            "name": "Tanner Wash", 
            "lat1": 36.75, 
            "lon1": -111.75, 
            "lat2": 36.5, 
            "lon2": -111.5, 
            "href": "61195.html"
        }, 
        {
            "name": "Camp Verde", 
            "lat1": 35.0, 
            "lon1": -112.0, 
            "lat2": 34.5, 
            "lon2": -111.5, 
            "href": "61192.html"
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
