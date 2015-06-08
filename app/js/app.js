var app = app || {};

$( document ).ready(function() {
	// app.leaflet();
	app.doMasonry();
});

app.leaflet = function() {
  var map = L.map('map').setView([32.869000, -117.252944], 10);
  L.DomEvent.preventDefault = function(e) {return;}
  L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    maxZoom: 18,
    id: 'caverntan.j9lbmc08',
    detectRetina: true
  }).addTo(map);

  L.marker([32.869000, -117.252944]).addTo(map)
    .bindPopup("<strong>Martin Johnson House</strong><br>8840 Biological Grade<br>La Jolla, CA, 92037<br><a href='https://goo.gl/maps/aoGAA'>Get Directions</a>").openPopup();

  var popup = L.popup();
  map.dragging.disable();
  map.touchZoom.disable();
  map.scrollWheelZoom.disable();
}

app.doMasonry = function(){
	var container = document.querySelector('.masonry');
	var msnry;

	imagesLoaded( container, function() {
		msnry = new Masonry( container );
	});
}
