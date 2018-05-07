

$(document).ready(function(){
    $('#jenks').hide();
});


$(document).ready(function(){
    $('#logo').mouseover(function(){
        $('#jenks').show(500);
        console.log('show');
    });
    $('#logo').mouseout(function(){
        $('#jenks').hide(500);
        console.log('hide');
    });
});

let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.7900, lng: -122.4194},
        zoom: 12.8,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
    });
    let workInfoWindow = new google.maps.InfoWindow({
        content: '<h5> MWWPR </h5>'
    });
    let MWWPR = {lat: 37.79384,lng: -122.396773};
    let workMarker = new google.maps.Marker({
        position: MWWPR,
        map: map
    });
    workMarker.addListener('click', function() {
        workInfoWindow.open(map, workMarker);
    });
    let aprtmntInfoWindow = new google.maps.InfoWindow({
        content: '<h5> Marina District </h5>'
    });
    let apartment = {lat: 37.8036667,lng: -122.43681509999999};
    let aprtmntMarker = new google.maps.Marker({
        position: apartment,
        map: map
    });
    aprtmntMarker.addListener('click', function() {
        aprtmntInfoWindow.open(map, aprtmntMarker);
    });
    let foodInfoWindow = new google.maps.InfoWindow({
        content: '<h5> Super Duper Burger </h5>'
    });
    let food = {lat: 37.7868545,lng: -122.40390839999998};
    let foodMarker = new google.maps.Marker({
        position: food,
        map: map
    });
    foodMarker.addListener('click', function() {
        foodInfoWindow.open(map, foodMarker);
    });

    

}

