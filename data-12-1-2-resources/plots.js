// Creates line chart in Plotly with a single line of code
Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);


// Skill Drill:
Plotly.newPlot("plotArea", [{x: [2, 4, 6], y: [8, 10, 12]}]);

// Bar Chart example:
// Creates chart with type, labeled axis, and title
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", [trace], layout);

// Skill Drill - Bar Chart:
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],    
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var layout = {
    title: "Nonalcholic Bar",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of  Drinks Ordered"}
};

Plotly.newPlot("plotArea", [trace], layout);

// Pie Chart:
// In trace, the keys for the data are assigned labels and values, not listed as x and y. 
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);


   // Skill Drill - Scatter Plots:
   var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
  };
  
  var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
  };


  var data = [trace1, trace2, trace3];
  
  Plotly.newPlot("plotArea", data, layout);

// Example - all numbers of an array are doubled
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);


// Skill Drill - add 5 to numbers array:
var numbers = [0,2,4,6,8];
var addition = numbers.map(function(num){
    return num + 5;
});
console.log(addition);


// Using map() to extract a specific property from each object in an array.
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

// Skill Drill - Extract population of each city:
var population = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var population = population.map(function(population){
    return population.population;
});
console.log(population);

// filter()
// will return numbers larger than 1
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

// Skill Drill - Filter the results to include only animals whose species name starts with the letter "s."
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// Arrow functions:
var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);

// Using arrow instead of map()
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);


// slice () Method
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

// Skill Drill - slice() to select first 3 elements
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(0,3)

// slice() Method to get the last 2 in list
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );