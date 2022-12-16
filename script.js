const demo = document.getElementById('demo');
demo.innerHTML = 'branch name: js/async/promise';
//------------------------------------------------
//^ ___example-1___
// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)
//   myResolve(); // when successful
//   myReject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     /* code if successful */
//   },
//   function (value) {
//     /* code if some error */
//   }
// );
//^ ___example-2___
// let isQuranLearnedByHeard = true;
// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)
//   if (isQuranLearnedByHeard) {
//     myResolve('vada bajarildi'); // when successful
//   } else {
//     myReject('vada rad etildi'); // when error
//   }
// });
// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     console.log(value);
//   },
//   function (error) {
//     console.log(error);
//   }
// );
//^ ___example-3___
// let isQuranLearnedByHeard = true;
// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)
//   if (isQuranLearnedByHeard) {
//     myResolve('vada is bajarildi'); // when successful
//   } else {
//     myReject('vada is rad etildi'); // when error
//   }
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//^ ___example-4___
// function myDisplayer(params) {
//   console.log(params);
// }
// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)
//   let x = 1;
//   if (x === 0) {
//     myResolve("x o'zgaruvchisi 0 ga teng");
//   } else {
//     myReject("x o'zgaruvchisi 0 ga teng emas");
//   }
// });

// myPromise
//   .then(function (value) {
//     myDisplayer(value);
//   })
//   .catch(function (error) {
//     myDisplayer(error);
//   });
//^ ___example-5___ Example Using Callback
// setTimeout(function () {
//   myFunction("Men 3 sekunddan keyin ko'rinaman");
// }, 3000);

// function myFunction(value) {
//   console.log(value);
// }
//^ ___example-6___ Example Using Promise
// let myPromise = new Promise(function (myResolve, myReject) {
//   setTimeout(function () {
//     myResolve("Men 3 sekunddan keyin ko'rinaman");
//   }, 3000);
// });

// myPromise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//^ ___example-7___ Example Using Callback
// function myDisplayer(params) {
//   console.log(params);
// }

// function getFile(myCallback) {
//   const httpReq = new XMLHttpRequest();
//   httpReq.onload = function () {
//     console.log(httpReq);
//     if (httpReq.status == 200) {
//       myCallback(httpReq.responseText);
//     } else {
//       myCallback('Error: ' + httpReq.status);
//     }
//   };
//   httpReq.open('GET', './mocks/users.json');
//   httpReq.send();
// }

// getFile(myDisplayer);

//^ ___example-8___ Example Using Promise
// function myDisplayer(params) {
//   console.log(params);
// }

// const myPromise = new Promise(function (myResolve, myReject) {
//   const httpReq = new XMLHttpRequest();
//   httpReq.onload = function () {
//     console.log(httpReq);
//     if (httpReq.status == 200) {
//       myResolve(httpReq.responseText);
//     } else {
//       myReject('Error: ' + httpReq.status);
//     }
//   };
//   httpReq.open('GET', './mocks/users.json');
//   httpReq.send();
// });
// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );
