let milks = [
    {name:'cow', introduced: 1840, cafesThatUse: 435, vegan: false},
    {name:'soy', introduced: 1993, cafesThatUse: 432, vegan: true},
    {name:'almond', introduced: 2012, cafesThatUse: 143, vegan: true},
    {name:'coconut', introduced: 2016, cafesThatUse: 101, vegan: true},
    {name:'macadamia', introduced: 2018, cafesThatUse: 32, vegan: true},
    {name:'seed', introduced: 2019, cafesThatUse: 2, vegan: true},
    {name:'goat', introduced: 2021, cafesThatUse: 56, vegan: false}
]

let numCafesInCity = 441; //This is the number of cafes in the city


/// PRINT RESULTS TO CONSOLE ///

// Use map method to create:

// 1. An array of milk names
// 2. An array containing the relative percentage use of the milks given the number of cafes in the city.

//Use filter method to:

// 3. Filter out the milks that are used by over half the cafes in the city
// 4. Filter the milks array buy milks that are vegan that were introduced after 2015