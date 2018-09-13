/*

  Nia Naval
  niamnaval@gmail.com
  Open Spaces Boston
  
*/

var marker;

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
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
    center: {lat: 42.338305, lng: -71.076783}
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
if ( marker ) {
    marker.setPosition(location);
  } else {
    marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
}

  map.data.addListener('click', function(event) {
    addMarker(event.latLng, map);
  });



  // function toggleCheckbox(element) {
  //  element.checked = !element.checked;
  // }

  function allston(feature) {
  map.data.forEach(function (feature) {

     // if (feature.getProperty('DISTRICT') != 'Allston-Brighton') {     
     //      map.data.overrideStyle(event.feature, {
     //        fillOpacity: 0,
     //        strokeWeight: 0
     //      });
     //  }
     //  // else if (document.getElementById('allston') == false) {
     //  //   map.data.setStyle({
     //  //       fillColor: 'darkturquoise',
     //  //       strokeWeight: 0
     //  //     });
     //  // }
    
      if (feature.getProperty('DISTRICT') != 'Allston-Brighton') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };

  function dorchester(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'Dorchester') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };
  function backbay(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'Back Bay/Beacon Hill') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };
  function centralboston(feature) {
  map.data.forEach(function (feature) { 
      if (feature.getProperty('DISTRICT') != 'Central Boston') {     
              map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };

  function charlestown(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'Charlestown') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };
  function eastboston(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'East Boston') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };
  function fenway(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'Fenway/Kenmore') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };
  function harborislands(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'Harbor Islands') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };
  function hydepark(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'Hyde Park') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };
  function jamaicaplain(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'Jamaica Plain') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };
  function mattapan(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'Mattapan') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };
  function roslindale(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'Roslindale') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };
  function roxbury(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'Roxbury') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };
  function southboston(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'South Boston') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };
  function southend(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'South End') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };
  function westroxbury(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('DISTRICT') != 'West Roxbury') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };

 function parks(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('TypeLong') != 'Parks, Playgrounds & Athletic Fields') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };

 function urban(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('TypeLong') != 'Urban Wilds & Natural Areas') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };

 function parkways(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('TypeLong') != 'Parkways, Reservations & Beaches') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };

 function community(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('TypeLong') != 'Community Gardens') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };

 function malls(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('TypeLong') != 'Malls, Squares & Plazas') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }
         
    });
  };

 function cemeteries(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('TypeLong') != 'Cemeteries & Burying Grounds') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }  
    });
  };

function residential(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('ZonAgg') != 'Residential District') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }  
    });
  };

function open(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('ZonAgg') != 'Open Space District') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }  
    });
  };

function commercial(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('ZonAgg') != 'Commercial/Office/Business District') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }  
    });
  };

function special(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('ZonAgg') != 'Special District') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }  
    });
  };

// function industrial(feature) {
//   map.data.overrideStyle(feature, {
//     fillOpacity: 0, 
//     strokeWeight: 0}) &
//   map.data.forEach(function (feature) { 
//       if (feature.getProperty('ZonAgg') == 'Industrial District') {     
//           map.data.overrideStyle(feature, {
//                 fillOpacity: 0.8,
//                 fillColor: 'darkturquoise',
//                 strokeWeight: 0
//               });
//           }  
//     });
//   };

// function industrial(feature) {
//   map.data.feature('ZonAgg');
// };

function industrial(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('ZonAgg') != 'Industrial District') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }  
    });
  };

function institutional(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('ZonAgg') != 'Institutional District') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }  
    });
  };

function conservation(feature) {
  map.data.forEach(function (feature) { 
    
      if (feature.getProperty('ZonAgg') != 'Conservation Protection Subdistrict') {     
          map.data.overrideStyle(feature, {
                fillOpacity: 0,
                strokeWeight: 0
              });
          }  
    });
  };

  // function clear(feature) {
  //   // uncheck and clear them
  //   // TO DO


  //   // for each data in the map...
  //   // remove style/blue color
  //   //for (...) {
  //     map.data.forEach(function (feature) { 
  //       // or override style
  //       map.data.remove();
  //     });
  //   //}

  // }

  function clear(feature){
    map.data.setStyle({visible: false});
  }

  // function reset(feature){
  //   map.data.forEach(function (feature) { 
  //     map.data.setStyle({visible: true}) & map.data.overrideStyle(feature, {fillColor: 'darkturquoise',
  //        strokeWeight: 0});
  //   });
  // }

  function reset(feature) {
    // TODO : uncheck all
    map.data.revertStyle();
  }


  initMap.allston = allston;
  initMap.dorchester = dorchester;
  initMap.backbay = backbay;
  initMap.centralboston = centralboston;
  initMap.charlestown = charlestown;
  initMap.eastboston = eastboston;
  initMap.fenway = fenway;
  initMap.harborislands = harborislands;
  initMap.hydepark = hydepark;
  initMap.jamaicaplain = jamaicaplain;
  initMap.mattapan = mattapan;
  initMap.roslindale = roslindale;
  initMap.roxbury = roxbury;
  initMap.southboston = southboston;
  initMap.southend = southend;
  initMap.westroxbury = westroxbury;
  initMap.parks = parks;
  initMap.urban = urban;
  initMap.parkways = parkways;
  initMap.community = community;
  initMap.malls = malls;
  initMap.residential = residential;
  initMap.open = open;
  initMap.commercial = commercial;
  initMap.special = special;
  initMap.industrial = industrial;
  initMap.cemeteries = cemeteries;
  initMap.institutional = institutional;
  initMap.conservation = conservation;

  initMap.clear = clear;
  // initMap.unclear = unclear;
  initMap.reset = reset;

}
