//UPLOAD SLIDE DECK TO DRIVE!
//Make sure I can present - to people who have never seen it before

var park;
var map;
var markers = [];
var filters = {DISTRICT: false};  

$(function() {
  $("input[name=filter]").change(function(e) {
    map_filter(this.id);
    filter_markers();
  });
});

var get_set_options = function() {
  ret_array = [];
  for (option in filters) {
    if (filters[option]) {
      ret_array.push(option);
    }
  }
  return ret_array;
};

var filter_markers = function() {
  set_filters = get_set_options();

  // for each marker, check to see if all required options are set
  for (i = 0; i < markers.length; i++) {
    marker = markers[i];

    // start the filter check assuming the marker will be displayed
    // if any of the required features are missing, set 'keep' to false
    // to discard this marker
    keep = true;
    for (opt = 0; opt < set_filters.length; opt++) {
      if (!marker.properties[set_filters[opt]]) {
        keep = false;
      }
    }
    marker.setVisible(keep);
  }
};

var map_filter = function(id_val) {
  if (filters[id_val]) filters[id_val] = false;
  else filters[id_val] = true;
};

// after the geojson is loaded, iterate through the map data to create markers
// and add the pop up (info) windows
// function loadMarkers() {
//   console.log("creating markers");
//   var infoWindow = new google.maps.InfoWindow();
//   geojson_url =
//     "https://raw.githubusercontent.com/gizm00/blog_code/master/appendto/python_maps_2/collection.geojson";
//   $.getJSON(geojson_url, function(result) {
//     // Post select to url.
//     data = result["features"];
//     $.each(data, function(key, val) {
//       var point = new google.maps.LatLng(
//         parseFloat(val["geometry"]["coordinates"][1]),
//         parseFloat(val["geometry"]["coordinates"][0])
//       );
//       var titleText = val["properties"]["title"];
//       var descriptionText = val["properties"]["description"];
//       var marker = new google.maps.Marker({
//         position: point,
//         title: titleText,
//         map: map,
//         properties: val["properties"]
//       });

//       var markerInfo =
//         "<div><h3>" +
//         titleText +
//         "</h3>Amenities: " +
//         descriptionText +
//         "</div>";

//       marker.addListener("click", function() {
//         $("#campground_info").html(markerInfo);
//       });
//       markers.push(marker);
//     });
//   });
// }

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ],
    center: {lat: 42.3601, lng: -71.0589}
  });
  map.data.loadGeoJson('data/openspaces.geojson');
  map.data.setStyle({
    fillColor: 'darkturquoise',
    strokeWeight: 0
  });

  map.data.addListener('click', function(event) {
    document.getElementById('info-box').textContent =
        event.feature.getProperty('SITE_NAME');
  });

  map.data.addListener('click', function(event) {
    document.getElementById('info-box2').textContent =
        event.feature.getProperty('ALT_NAME');
  });

  map.data.addListener('click', function(event) {
    document.getElementById('info-box3').textContent =
        event.feature.getProperty('ADDRESS');
  });

  map.data.addListener('click', function(event) {
    document.getElementById('info-box4').textContent =
        event.feature.getProperty('DISTRICT');
  });  

  map.data.addListener('click', function(event) {
    document.getElementById('info-box5').textContent =
        event.feature.getProperty('TypeLong');
  });  

  map.data.addListener('click', function(event) {
    document.getElementById('info-box6').textContent =
        event.feature.getProperty('ZonAgg');
  });  

  map.data.addListener('click', function(event) {
    document.getElementById('info-box7').textContent =
        event.feature.getProperty('OWNERSHIP');
  });  

  map.data.addListener('click', function(event) {
    document.getElementById('info-box8').textContent =
        event.feature.getProperty('ACRES');
  });  

  function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }

  map.data.addListener('click', function(event) {
    addMarker(event.latLng, map);
  });

  map.data.addListener('click', function (event) { 
      if (event.feature.getProperty('OWNERSHIP') == 'City of Boston') {     
          map.data.remove(feature);
      }
    });

  
  // function southend(feature, map) {
  // // map.data.forEach(function (feature) { 
  //     if (feature.getProperty('OWNERSHIP') == 'City of Boston') {     
  //         map.data.remove(feature);
  //     }
  // };

  // var script = document.createElement('script');
  // script.src = 'data/openspaces.geojson';
  // document.getElementsByTagName('head')[0].appendChild(script);
// window.eqfeed_callback = function(results) {
//        for (var i = 0; i < results.features.length; i++) {
//          var coords = results.features[i].geometry.coordinates[0];
//          console.log(coords[length]);
//          //lat: coords.length[1], lng: coords.length[0]
//          var latLng = new google.maps.LatLng(coords[1],coords[0]);
//          var marker = new google.maps.Marker({
//            position: latLng,
//            map: map
//          });
//        }
//      }

 // window.eqfeed_callback = function(results) {
 //  for (var i = 0; i < results.features.length; i++) {
 //    var coords = results.features[i].geometry.coordinates[0];
 //    var multicoords = results.features[i].geometry.coordinates[0][0];
 //    // var mocoords = coords[length];
 //    // var latcoords = mocoords[1];
 //    // var loncoords = mocoords[0];
 //    // var polcoords = {lat: latcoords, lng: loncoords};
 //    if(results.features[i].geometry.type == "Polygon"){
 //      //var mocoords = coords.length;
 //      var polcoords = [];
      
 //      for (var j = 0; j < coords.length; j++){
 //        var latcoords = coords[j][1];
 //        var loncoords = coords[j][0];
 //        polcoords.push({lat: latcoords, lng: loncoords});
 //      }
    
 //      /*var coords = [
 //      {lat: 42.35018024017816, lng: -71.14740801292824},
 //      {lat: 42.34994329626823, lng: -71.14801432478872},
 //      {lat: 42.35028089080705, lng: -71.1478211477363},
 //      {lat: 42.35018024017816, lng: -71.14740801292824}
 //      ]*/
 //      var latLng = new google.maps.LatLng(coords[1],coords[0]);
 //      var polygon = new google.maps.Polygon({
 //        paths: [polcoords],
 //        strokeColor: '#FF0000',
 //        strokeOpacity: 0.8,
 //        strokeWeight: 1,
 //        fillColor: '#FF0000',
 //        fillOpacity: 0.35
 //        //position: latLng,
 //        //map: map
 //      });
 //      polygon.setMap(map);
 //    }

 //    console.log(park);

 //    if(results.features[i].geometry.type == "MultiPolygon"){
 //          var multipolcoords = [];
 //          for (var j = 0; j < multicoords.length; j++){
 //            var multilatcoords = multicoords[j][1];
 //            var multiloncoords = multicoords[j][0];
 //            multipolcoords.push({lat: multilatcoords, lng: multiloncoords});
 //          }
 //      var multilatLng = new google.maps.LatLng(multicoords[1],multicoords[0]);
 //      var multipolygon = new google.maps.Polygon({
 //        paths: [multipolcoords],
 //        strokeColor: '#FF0000',
 //        strokeOpacity: 0.8,
 //        strokeWeight: 1,
 //        fillColor: '#FF0000',
 //        fillOpacity: 0.35
 //        //position: latLng,
 //        //map: map
 //      });
 //      multipolygon.setMap(map);
 //    }

 //    // document.getElementById('submit').addEventListener('click', function() {
 //    //   geocodeAddress(geocoder, map, infowindow);
 //    // });
 //  }
  // google.maps.event.addListener(polygon, 'remove_at', function() {
  //   console.log('Remove polygon.');
  // });

  // google.maps.event.addDomListener(outer, 'click', function() {
  //   map.setCenter(chicago)
  // });
}

// google.maps.event.addDomListener(window, 'load', initialize);

class Park {
  constructor(polypark){
    this.polygon = polypark;
  }
}

// function filter() {
//   for 
// }

// function display() {

// }




