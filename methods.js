// const name = 'shaun';

//functions

//  const greet = () => 'hello';

//  let resultOne = greet();
//  console.log(resultOne);

//methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// const myFunc = (callbackFunc) => {
//     //do sth
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc (value => {
//     //do sth
//     console.log(value);
// });

// callback $ foreach

let people = ['meek','jerop','karan','gillian','badria'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);