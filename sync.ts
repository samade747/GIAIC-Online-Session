console.log('Starting...');

let username = 'samaddeveloper';

console.log(`my username is ${username}`);





let age = 30;

if (age > 30) {
    console.log('I am older than 30');
} else {
    console.log('I am younger than 30');
}



const bestFriends: string[] = ['marya', 'hamza', 'Mubashir', 'afsheen' ];
for(let i = 0; i< bestFriends.length; i++){
    console.log(`my best friend is ${bestFriends[i]}`);
}


// define a type
type TCar = {
    model: string;
    year: number;
    isUsed: boolean;
    brand: string;
}

// defining an object using above type
const car: TCar = {
    brand: "BMW",
    model: "X5",
    year: 2020,
    isUsed: true
}

// accessing the object by its key
console.log(car['brand']);
console.log(car['model']);

// accessing the object by its key using ternary operater
console.log(car['isUsed'] ? 'I am used' : 'I am new');

// accessing the object by its key using dot operator
console.log(car.model);

console.log('Ending...');




