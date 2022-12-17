const demo = document.getElementById('demo');
demo.innerHTML = 'branch name: js/async/async/await ';
//^ ___example-1___ Async Syntax
// async function myFunction() {
//   return "Hello";
// }
// // Is the same as:
// function myFunction() {
//   return Promise.resolve("Hello");
// }

//^ ___example-2___
// function myDisplayer(param) {
//   console.log(param);
// }

// function myFunction() {
//   return Promise.resolve('hello');
// }

// myFunction().then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );
//^ ___example-3___
// function myDisplayer(param) {
//   console.log(param);
// }

// async function myFunction() {
//   return 'hello';
// }

// myFunction().then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );
//^ ___example-4___
// function myDisplayer(param) {
//   console.log(param);
// }

// async function myFunction() {
//   return 'hello';
// }

// myFunction().then(function (value) {
//   myDisplayer(value);
// });
//^ ___example-5___
// function myDisplayer(param) {
//   console.log(param);
// }

// async function myFunction() {
//   throw 'hello';
// }
// myFunction().catch(function (value) {
//   myDisplayer(value);
// });
//^ ___example-6___ Await Syntax
// async function myFunction() {
//   const value = await promise;
// }
// myFunction();

//^ ___example-7___
// async function myDisplay() {
//   let promise = new Promise(function (resolve) {
//     resolve('Hello World');
//   });
//   const value = await promise;
//   console.log(value);
// }
// myDisplay();

//^ ___example-7___
// async function myDisplay() {
//   let myPromise = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve("Men 5 sekunddan keyin ko'rinaman");
//     }, 3000);
//   });
//   const value = await myPromise;
//   console.log(value);
// }
// myDisplay();

//^ ___example-7___
async function getFile() {
  let myPromise = new Promise(function (resolve) {
    let req = new XMLHttpRequest();
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve('File not Found');
      }
    };
    req.open('GET', './mocks/books.json');
    req.send();
  }).catch((error) => {
    throw error;
  });
  const value = await myPromise;
  console.log(value);
}

getFile();
