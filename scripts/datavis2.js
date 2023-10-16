
// embedding the map
var mapVis = "scripts/map.vg.json";
	vegaEmbed('#mapVis', mapVis).then(function(result) {
		// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// embedding gdp per year
var gdp = "scripts/gdp_per_year.vg.json";
	vegaEmbed('#gdpPerYear', gdp).then(function(result) {
		// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// embedding bmi per year
var bmi = "scripts/bmi_per_year.vg.json";
	vegaEmbed('#bmiPerYear', bmi).then(function(result) {
		// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// total expenditure vs life expectancy
var expenseExpect = "scripts/total_expenditure_vs_life_expectancy.vg.json";
	vegaEmbed('#totExpenseLifeExpect', expenseExpect).then(function(result) {
		// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// // embedding gdp vs life expectancy
// var gdpLE = "scripts/gdp_vs_life_expectancy.vg.json";
// 	vegaEmbed('#gdpLifeExpectancy', gdpLE).then(function(result) {
// 		// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);