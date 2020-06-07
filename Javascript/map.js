
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuYmFiYTI1MjUiLCJhIjoiY2thbXc0MmFsMWl0NDJ2cXo0YzRqanR1ZyJ9.5sTRCYYLe8iSOjPnF84w7w';
    var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding
        .forwardGeocode({
            query: 'Los Angeles,USA',
            autocomplete: false,
            limit: 1
        })
        .send()
        .then(function(response) {
            if (
                response &&
                response.body &&
                response.body.features &&
                response.body.features.length
            ) {
                var feature = response.body.features[0];

                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: feature.center,
                    zoom: 10
                });
                new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
            }
        });





        