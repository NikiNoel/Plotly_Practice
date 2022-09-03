// The actual API call to SpaceX is made in these two lines of code:

// In the first line, the URL to the SpaceX is defined.
const url = "https://api.spacexdata.com/v2/launchpads";

// In the second line, d3.json() method places a call to SpaceX's API, retrieves the data, and prints it to the browser console.
d3.json(url).then(receivedData => console.log(receivedData));

// code to retrieve the full_nameof the Vandenberg Air Force Base:
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));


// Skill Drill - use map() to print only the latitude and longitude coordinates of each SpaceX launch station.
