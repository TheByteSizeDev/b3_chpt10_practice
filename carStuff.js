const allCars = [
    {
      model: "Mustang",
      color: "Midnight Blue",
      year: 1976,
      length: 120,
      width: 62,
      height: 47
    },
    {
      model: "Xterra",
      color: "Forest Green",
      year: 2011,
      length: 144,
      width: 71,
      height: 55
    },
    {
      model: "Thunderbird",
      color: "Red",
      year: 2005,
      length: 115,
      width: 58,
      height: 42
    },
    {
      model: "Suburban",
      color: "Grey",
      year: 2015,
      length: 149,
      width: 73,
      height: 58
    }
  ];

  // Since you just need the values of each object, you can use the
// Object.values() method. Here is how you would start.

// Iterate the array of cars with forEach().
// Use Object.values() to iterate the values of each car.

const outputElement = document.querySelector("#app");

allCars.forEach( (car) => {
    for (const value of Object.values(car)) {
        outputElement.innerHTML += `<div>${value}</div>`
    }
})

/*
    Just get a reference to the first object since
    they all have the same properties
*/
const firstCar = allCars[0];

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>";
for (const key of Object.keys(firstCar)) {
  outputElement.innerHTML += `<div>${key}</div>`;
}

// Iterate the array of cars. Individual objects stored in `car`.
outputElement.innerHTML += "<h1>Car List</h1>";
allCars.forEach(car => {
  // Iterate all of the values of the current car
  for (const value of Object.values(car)) {
    outputElement.innerHTML += `<div>${value}</div>`;
  }
});