// Concatenar arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const numeros = arr1.concat(arr2, [7, 8]);
console.log(numeros); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// ... spread
const arr3 = [...arr1, ...arr2, ...[7, 8, 9]];
console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
