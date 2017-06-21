/* Képhren/Projet
*
* /src/js/script.js - Main script for projet
*
* coded by Képhren SIMONIS
* started at 22/02/2017
*/

// GMap key: AIzaSyCpVxnkxmiDZIfxgiO8-3TMP17jyzo2w4c

function fInitMap() {
    
    var url = '';
    if (document.title.substring(0, 7) == "Accueil"){
        url = './assets/img/pint-nds.png'; 
    }else{
        url = '../img/pint-nds.png';
    }

    var myLatLng = {lat: 50.413471, lng: 4.43500};
        image = {
            // Adresse de l'icône personnalisée
            url: url,
            // Taille de l'icône personnalisée
            size: new google.maps.Size(250,512),
            // taille scaled
            scaledSize: new google.maps.Size(100, 100),
            // Origine de l'image, souvent (0, 0)
            origin: new google.maps.Point(0,0),
            // L'ancre de l'image. Correspond au point de l'image que l'on raccroche à la carte.
            // Par exemple, si votre îcone est un drapeau, cela correspond à son mâts
            anchor: new google.maps.Point(50, 100)
        };

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        "center": myLatLng,
        "disableDefaultUI": true,
        "scrollwheel": false,
        "zoomControl": true,
        "zoom": 15
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker( {
        map: map,
        "position": myLatLng,
        "title": 'Palais des Beaux-Arts',
        icon: image,
    } );
}