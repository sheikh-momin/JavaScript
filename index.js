// 1.
// function liniar(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arry[i] === val) {
//             return i;
//         }
//     }
//     return 'Not Found'
// }
// console.log(liniar(['a', 'b', 'c', 'd', 'c'],'c'));

// 2.
// const sentence = "I am Mominul Islam. I am 23 years old. I am on the way to complite may BSc in CSE"
// const matche = sentence.match(/am/gi);
// const result = matche ? matche.length : 0;
// console.log(matche)

// let position = sentence.search(/am/i);
// position = position => 0 ? position : 'not found';
// console.log(position);

// 3.
// const obj = {
//     a: 'Momin',
//     b: 'Emon',
//     c: undefined,
//     d: false,
//     e: '',
//     f: NaN,

// }
// const type = function(obj) {
//     for (let i in obj) {
//         if (!obj[i]) {
//             delete obj[i];
//         }
//     }
//     return obj;
// }
// console.log(type(obj));



let x = document.getElementById("demo")
x.innerHTML = "Hello World!";