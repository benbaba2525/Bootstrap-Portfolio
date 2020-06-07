
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuYmFiYTI1MjUiLCJhIjoiY2tiNHVoODBpMHhzdzMybnkxZjI5dWk5bSJ9.8U68YQZA49UsAmThznU1Xw';
    var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding
        .forwardGeocode({
            query: 'CA,USA',
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





        