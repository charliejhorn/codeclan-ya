![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Express Generator

**Lesson Duration: 60 minutes**

## Learning Objectives
- Know how to use Express Generator to create a server
- Understand the folder structure Express Generator creates
- Understand Routing in express

## Working with JSON

[Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON$hitory) is licensed under [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).

JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments feature the ability to read (parse) and generate JSON.

JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data. This is not a big issue — JavaScript provides a global JSON object that has methods available for converting between the two.

> Note: Converting a string to a native object is called parsing, while converting a native object to a string so it can be transmitted across the network is called stringification.

A JSON object can be stored in its own file, which is basically just a text file with an extension of .json, and a MIME type of application/json.

## JSON structure

> Create a JavaScript file called `play.js` and copy the code below to demonstrate. 

As described above, a JSON is a string whose format very much resembles JavaScript objects. You can include the same basic data types inside JSON as you can in a standard JavaScript object — strings, numbers, arrays, booleans, and other object literals. This allows you to construct a data hierarchy, like so:

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

If we loaded this object into a JavaScript program, saved in a variable called superHeroes, for example, we could then access the data inside it using the same dot/bracket notation we looked at in the JavaScript object basics article. For example:

```js
superHeroes.homeTown;
superHeroes["active"];
```

To access data further down the hierarchy, you simply have to chain the required property names and array indexes together. For example, to access the third superpower of the second hero listed in the members list, you'd do this:

```js
superHeroes["members"][1]["powers"][2];
```

- First we have the variable name — superHeroes.
- Inside that we want to access the members property, so we use ["members"]. Members contains an array populated by objects. We want to access the second object inside the array, so we use [1].
- Inside this object, we want to access the powers property, so we use ["powers"].
- Inside the powers property is an array containing the selected hero's superpowers. We want the third one, so we use [2].


## Arrays as JSON

Above we mentioned that JSON text basically looks like a JavaScript object, and this is mostly right. The reason we said "mostly right" is that an array is also valid JSON, for example:

```json
const superHeroes = [
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

The above is perfectly valid JSON. You'd just have to access array items (in its parsed version) by starting with an array index, for example `superHeroes[0]["powers"][0]`.

## Other notes

- JSON is purely a data format — it contains only properties, no methods.
- JSON requires double quotes to be used around strings and property names. Single quotes are not valid.
- Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use (although computer-generated - JSON is less likely to include errors, as long as the generator program is working correctly). You can validate JSON using an application like JSONLint.
- JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So for example, a single string or number would be a valid JSON object.
- Unlike in JavaScript code in which object properties may be unquoted, in JSON, only quoted strings may be used as properties.

