require(["esri/Map", "esri/views/MapView", "esri/layers/MapImageLayer"],function(Map, MapView, MapImageLayer) {

        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-111.950684, 39.419220],
          zoom: 6.4
        });

        var layer0 = new MapImageLayer({
          url: "http://geoserver2.byu.edu/arcgis/rest/services/3_Toed_Sloth/Snowmelt/MapServer",
          sublayers: [{id: 0}]
          });

        var layer1 = new MapImageLayer({
          url: "http://geoserver2.byu.edu/arcgis/rest/services/3_Toed_Sloth/Snowmelt/MapServer",
          sublayers: [{id: 1}]
          });

        map.add(layer0);
        map.add(layer1);

      });
