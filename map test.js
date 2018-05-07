let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.7900, lng: -122.4194},
        zoom: 12.8
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

