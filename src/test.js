// const { log } = require("console");

// const obj = {
//   name: "Complex Object",
//   info: {
//     description: "This is a complex object with nested levels.",
//     createdBy: {
//       author: "John Doe",
//       year: 2022,
//       contact: {
//         email: "john.doe@example.com",
//         website: "https://example.com",
//       },
//     },
//     stats: {
//       size: "large",
//       version: 2.0,
//       isComplex: true,
//     },
//     tags: ["nested", "object", "javascript"],
//   },
//   additionalData: {
//     meta: {
//       generatedAt: new Date(),
//       contributors: ["Alice", "Bob", "Charlie"],
//     },
//     comments: [
//       {
//         user: "Alice",
//         text: "This object looks great!",
//         date: new Date(2024, 3, 10),
//       },
//       {
//         user: "Bob",
//         text: "Nice work!",
//         date: new Date(2024, 3, 9),
//       },
//     ],
//   },
// };

// // create a function in js where it takes param as string with dot notation and traverses the above nested object based on the provided dot-separated path and retrieves the value located at that path.

// function get(path) {
//   log("---------------------------------------------");
//   const heirarchy = path.split(".");
//   const len = heirarchy.length;
//   log("1111", heirarchy);
//   var final = "";
//   for (let index = 0; index < len; index++) {

//     final =
//       final === ""
//         ? `${heirarchy[index]}`
//         : `${final + "." + heirarchy[index]}`;

//     log("---- ", final);
//     // const element = array[index];
//   }
//   log("++++++ ", final);
//   try {
//     const fnl = `${obj + "." + final}`;
//     log("!!!!! ", fnl);
//   } catch (error) {
//     log("8888 ", error);
//   }
//   const res = `${eval("obj." + final)}`;

//   console.log(res);

//   return res;
// }

// // expected result.
// console.log("2", get("name")); // result => 'Complex Object'
// console.log("3", get("info.createdBy.author")); // result => 'John Doe'
// console.log("4", get("additionalData.meta")); // result =>  {generatedAt: new Date(),contributors: ["Alice", "Bob", "Charlie"]}
// console.log("5", get("additionalData.comments.user")); // result =>  'Alice'
// ======================================================================================

// create a function similar to Array.map in js which takes
// an array and a callback function and returns a new array
// with the results of the callback function applied to each element of the original array.
/**
 * Custom map.
//  *
//  * @param {any[]} array
//  * @param {Function} callback
//  */
// function customMap(array, callback) {
//   let newArray = [];

//   for (const element in array) {
//     console.log("** ", element)
//     const newElement = callback(element);
//     newArray.push(newElement);
//   }

//   return newArray
// }
// // Example usage:
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = customMap(numbers, (num) => num * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// const plusedNumbers = customMap(numbers, (num) => num + 2);
// console.log(doubledNumbers); // Output: [3, 4, 5, 6, 7]
// =======================================================================================

// create higher order components in react
export function DisplayName(user) {
  return `<h1>Hello {{user.name}} </h1>`
  }
  
  
  
  
  //parent component
  export function dashboard() {
  let userDetail = {
    name: "Test"
  }
  return
  <DisplayName user={userDetail} />
  }