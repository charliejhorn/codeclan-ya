/* -------------------------------------------------------------
Recap on objects:

Objects are made up of key-value pairs called 'properties'. Properties are separated by a comma.

Keys are always strings but the value can be of any data type.

For example:

const myCar = {
    make: 'Honda',
    model: 'Civic',
    color: 'red',
    automatic: true,
    extras: ['GPS', 'USB charger', 'cup holder']
}

To access the model we would use the syntax `myCar.model`

To access the 'cup holder' we would use the syntax `myCar.extras[2]`

------------------------------------------------------------- */


/* -------------------------------------------------------------
EXERCISE 1

A common way to structure data is to have an array of objects. 
Given an object representing the United Kingdom, practice accessing and manipulating arrays and objects by writing the code to 
answer the questions below.
------------------------------------------------------------- */

const unitedKingdom = [
  {
    name: "Scotland",
    population: 5295000,
    capital: "Edinburgh"
  },
  {
    name: "Wales",
    population: 3063000,
    capital: "Swansea"
  },
  {
    name: "England",
    population: 53010000,
    capital: "London"
  }
]

// 1. Change the capital of Wales from `"Swansea"` to `"Cardiff"`.
// 2. Create an object for Northern Ireland and add it to the `unitedKingdom` array (The capital is Belfast, and the population is 1,811,000).
// 3. Use a loop to print the names of all the countries in the UK.
// 4. Use a loop to find the total population of the UK.

// Write your code here...
unitedKingdom[1].capital = 'Cardiff';

unitedKingdom.push({
    name: 'Northen Ireland',
    population: 1811000,
    capital: 'Belfast',
})

for(let country of unitedKingdom) {
    console.log(country.name);
}

let ukPopulation = 0;
for(let country of unitedKingdom) {
    ukPopulation += country.population;
}
console.log(ukPopulation);

/* -------------------------------------------------------------
EXERCISE 2

Declare a variable named 'avengers' and assign it the value of an object. 
It should contain keys for "ironman" and "hulk".

Each avenger is represented by an object and has a name (Tony Stark and Bruce Banner respectively) 
and another object containing their attack moves.

Each attack should have a number value of the attack's power.
Iron man can punch (10) and kick (100) and Hulk can smash (1000) and roll (500).

Once you have created the object, retrieve and print out the attack power of Hulks smash move.

------------------------------------------------------------- */

// Write your avengers code here...

let avengers = {
    ironman: {
        name: 'Tony Stark',
        attackMoves: {
            punch: 10,
            kick: 100,
        }
    },
    hulk: {
        name: 'Bruce Banner',
        attackMoves: {
            smash: 1000,
            roll: 500,
        }
    }
}

console.log(avengers.hulk.attackMoves.smash);

/* -------------------------------------------------------------
EXERCISE 3

You've been provided with an object called myGuitar. 
Use a for loop to log out all the previous owners.
-------------------------------------------------------------- */
const myGuitar = {
    make: 'Gretsch',
    model: '6120W',
    year: 1962,
    previousOwners: [ 'Chuck Berry', 'Keith Richards', 'Angus Young' ]
}

// Write your code here...
for (let owner of myGuitar.previousOwners) {
    console.log(owner);
}

/* ------------------------------------------------------------- 
EXERCISE 4

Create an object that represents your favourite band. 
Include any key/value pairs that you think are appropriate but the band members should be an array of objects.  
-------------------------------------------------------------- */

// Write your code here...
let favBand = {
    name: "Wet Leg",
    noOfAlbums: 1,
    yearOfFirstRelease: 2021,
    noOfMembers: 5,
    members: [
        {
            name: 'Rhian Teasdale',
            instrument: 'Vocals'
        },
        {
            name: 'Hester Chambers',
            instrument: 'Guitar'},
        {
            name: 'Joshua Omead Mobaraki',
            instrument: 'Guitar'
        },
        {
            name: 'Henry Holmes',
            instrument: 'Drums'
        },
        {
            name: 'Ellis Durand',
            instrument: 'Bass',
        },
    ]
}

/* ------------------------------------------------------------- 
EXERCISE 5

Add a function to your favourite band object called getDetails that returns some details of the band.
Log out the details.

-------------------------------------------------------------- */

// Write your code here...
favBand.getDetails = function() {
    let detailString = detail;
    for(let detail in this) {
        console.log(detail);
    }
}

favBand.getDetails()

/* ------------------------------------------------------------- 
EXERCISE 6

You've been provided with an array of user objects.

------------------------------------------------------------- */

const users = [
    {
        name: "Jonathan",
        twitter: "jonnyt",
        lotteryNumbers: [6, 12, 49, 33, 45, 20],
        homeTown: "Stirling",
        pets: [
            {
                name: "fluffy",
                species: "cat"
            },
            {
                name: "fido",
                species: "dog"
            },
            {
                name: "spike",
                species: "dog"
            }
        ]
    },

    {
        name: "Erik",
        twitter: "eriksf",
        lotteryNumbers: [18, 34, 8, 11, 24],
        homeTown: "Linlithgow",
        pets: [
            {
                name: "nemo",
                species: "fish"
            },
            {
                name: "kevin",
                species: "fish"
            },
            {
                name: "spike",
                species: "dog"
            },
            {
                name: "rupert",
                species: "parrot"
            }
        ]
    },

    {
        name: "Avril",
        twitter: "bridgpally",
        lotteryNumbers: [12, 14, 33, 38, 9, 25],
        homeTown: "Dunbar",
        pets: [
            {
                name: "monty",
                species: "snake"
            }
        ]
    }
]

// 1. Log out Jonathan's Twitter handle (i.e. the string `"jonnyt"`)
// 2. Log out Erik's hometown
// 3. Log out Avril's first lottery number
// 4. Log out the species of Avril's pet Monty
// 5. Log out the smallest of Erik's lottery numbers
// 6. Log out a list of Avril's lottery numbers that are even
// 7. Erik is one lottery number short! Add the number `7` to be included in his lottery numbers
// 8. Change Erik's hometown to Edinburgh
// 9. Add a pet dog to Erik called "Sparky"
// 10. Add another person to the beginning of the users array using unshift()

// Write your code here...
