var map;

function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 28.6934, lng: -81.510618},
zoom: 11
        });
		
var image1 = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
var Marker = new google.maps.Marker({
    position: {lat: 28.7096054, lng: -81.5465029},
    map: map,
    icon: image1,
    title: 'Home'
  });  
var Marker = new google.maps.Marker({
    position: {lat: 28.6956235, lng: -81.5204937},
    map: map,
    icon: image1,
    title: 'School'
  });  
var Marker = new google.maps.Marker({
    position: {lat: 28.6919154, lng: -81.5227146},
    map: map,
    icon: image1,
    title: 'Church'
  }); 
        var Marker = new google.maps.Marker({
    position: {lat: 28.713213, lng: -81.458946},
    map: map,
    icon: image1,
    title: 'Wekiva Springs'
  });
var Marker = new google.maps.Marker({
    position: {lat: 28.636570, lng: -81.625807},
    map: map,
    icon: image1,
    title: 'Lake Apopka'
  });
      }