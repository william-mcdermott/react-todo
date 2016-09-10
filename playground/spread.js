// function add(a,b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Steph'];
// var groupB = ['Wayne'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);


var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew, you are 25

var names = ['Mike', 'Ben'];
var final = [...names, 'Bill'];
// Hi Bill

var greeting = (name, age) => {
  console.log('Hi ' + name + ', you are ' + age);
};

var hello = (arr) => {
  arr.forEach((name) => {
    console.log('Hi ' + name);
  });
};

greeting(...person);
greeting(...personTwo);
hello(final);
