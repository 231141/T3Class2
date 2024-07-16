//
const numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled);


//filter
let people = [
    {name: 'Alice', age: 20},
    {name: 'Bob', age: 15},
    {name: 'Jack', age: 22},
    {name: 'Emma', age: 16},
];

let adults = people.filter(person => person.age >= 18);
console.log(adults);

//reduce
const num = [1, 2, 3, 4, 5];
let sum = num.reduce((acc, num) => acc + num, 0)
console.log(sum);

//find
const fruits = ['apple', 'banana', 'cherry', 'pear']
let found = fruits.find(fruit => fruit.includes ('r'));
let foundNum = fruits.findIndex(fruit => fruit.includes ('r'));
console.log(found);
console.log(foundNum);

// FlatMap
const nestedArray = [[1,2],[3,4]];
let flatArray = nestedArray.flat();
let mapArray = flatArray.map(num => num * num);
console.log(flatArray);
console.log(mapArray);

// Let's flatMap
let flatMapped = nestedArray.flatMap(arr => arr.map(num => num * num));
//console.log(flatMapped);