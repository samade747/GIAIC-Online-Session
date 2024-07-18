const numbers = [1, 2, 3, 4, 5]

const doubleNumbers = (arr,callback) => {
    return arr.map(callback)
}

const callback = (num:number) => {
    return num*2
}

const result2 = doubleNumbers(numbers, callback)
console.log(result2)


// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubleNumbers = (arr: number[], callback: (num: number) => number): number[] => {
//     return arr.map(callback);
// };

// const callback = (num: number): number => {
//     return num * 2;
// };

// const result2 = doubleNumbers(numbers, callback);
// console.log(result2);