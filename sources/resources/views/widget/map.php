<!DOCTYPE html>
<html>
<head>
    <style>
        html,body {
            height: 100vh;
            width: 100vw;
            padding: 0;
            margin: 0;
        }
        /* Set the size of the div element that contains the map */
        #map {
            height: 100%;  /* The height is 400 pixels */
            width: 100%;  /* The width is the width of the web page */
        }
    </style>
</head>
<body>
<!--The div element for the map -->
<div id="map"></div>
<script>
    function initMap() {
        var map = new google.maps.Map(
            document.getElementById('map'), {});
        var markers = [];
        var markerMap = <?php echo $markers; ?>;
        markerMap.forEach((markerObj) => {
            var marker = new google.maps.Marker({position: {lat: +markerObj.lat, lng: +markerObj.lng },  map: map});
            marker.info = new google.maps.InfoWindow({
                content: markerObj.text + '<div><a target="_blank" href="https://www.google.com/maps/dir/<?php echo e($location); ?>/'+markerObj.lat+','+markerObj.lng+'">directions</a></div>'
            });

            if(markerMap.length === 1) {
                marker.info.open(map, marker)
            }

            marker.addListener('click', function(a) {

                this.info.open(map, this);
            });

            markers.push(marker);
        })


        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }

        map.fitBounds(bounds)
    }
</script>
<!--Load the API from the specified URL
* The async attribute allows the browser to render the page while the API loads
* The key parameter will contain your own API key (which is not needed for this tutorial)
* The callback parameter executes the initMap() function
-->
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=<?php echo e(config('app.google_map_key')); ?>&callback=initMap">
</script>
</body>
</html>