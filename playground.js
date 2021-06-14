// const myName = "Jayson";

// console.log(myName);

// let age = 100;
// const hasFriends = false;
// age = 30;

// const summarizeUser = (userName, userAge, userFriends) => {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has friends? " +
//     userFriends
//   );
// };

// // const add = (a, b) => a + b;
// // const addOne = (a) => a + 1;
// const addRandom = () => 1 + 2;

// // console.log(addOne(2));
// console.log(addRandom());

// console.log(summarizeUser(myName, age, hasFriends));

//METHOD CALLED OFF OBJECT
const person = {
  name: "Jayson",
  age: "30",
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const printName = ({ name }) => {
  console.log(name)
}

printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);



// person.greet();

// const copiedPerson = { ...person };
// console.log(copiedPerson);

// const hobbies = ["Sports", "Cooking"];
// // for (let hobby of hobbies) {
// //   console.log(hobby);
// // }
// // console.log(hobbies.map((hobby) => "Hobby: " + hobby));
// // console.log(hobbies);
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1, 2, 3, 4));

