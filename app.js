console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(num) {
  return function (plusNumber) {
    return num + plusNumber;
  }
}

const plus2 = plus(2);

//console.log(plus2(2)); Output = 4
//console.log(plus2(100)); Output = 102

const plus100 = plus(100);

//console.log(plus100(100)); Output = 200
//console.log(plus100(5)); Output = 105

// Exercise 2: forEach

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((user) => console.log(user.name));

// Exercise 3: map

let newUsers = users.map((user) => {
  return { name: user.name, score: user.score };
});

console.log(newUsers);

// Exercise 4: filter

let activeUsers = users.filter((user) => user.isActive);

console.log(activeUsers);

// Exercise 5: sort

users.sort((a, b) => b.name - a.name); // b.score > a.score => swap order

console.log(users);

// Exercise 6: reduce

let avgScore = users.reduce((sum, user) => sum + user.score, 0) / user.length;

console.log(avgScore);