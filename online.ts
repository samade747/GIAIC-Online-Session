// functions CallBacks



// expect number
// data type is number
// primitive data type
function add(a: number, b: number): number {
    return a + b;
}

// expect string
// data type is string
// primitive data type
function great(name: string): string {
    return `Hello ${name}`;
}

// expect Boolen 
// data type is boolean
// primitive data type
function powerOutage(Light: boolean): void  {
    if(Light) {
        console.log("Light is on");
    } else {
        console.log("Light is off");
    }
}

// expect array 
// data type is array
// 
function customfind(arr: string[], element: string): boolean | void {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            return true;}
    }

}

// expect Object 
// data type is Object
// 
function logPersonName(person: TPerson): void {
    console.log(person.name);
}


type TPerson = {
    name: string;
    age: number;
}

const person: TPerson = {
    name: "John",
    age: 30
}

console.log(logPersonName(person));




