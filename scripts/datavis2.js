
// embedding the map
var mapVis = "script/map.vg.json";
	vegaEmbed('#mapVis', mapVis).then(function(result) {
		// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);