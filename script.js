 require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer"
    ], (Map, MapView, FeatureLayer) => {

      // Create the feature layers
            // Create the feature layers using portalItem IDs
            const featureLayer1 = new FeatureLayer({
                portalItem: {
                    id: "e017f094bd114153b368298aa2f1e39d" 
                }
            });

            const featureLayer2 = new FeatureLayer({
                portalItem: {
                    id: "3d3a4eec008e467f97d58405fc7722a3" 
                }
            });

      // Create a Map instance with a dark basemap
      const map = new Map({
        basemap: "dark-gray-vector",
        layers: [featureLayer1, featureLayer2]
      });

      // Create a MapView instance
      const view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 10,
        center: [-90.07, 29.95] // Longitude, Latitude
      });
    });
