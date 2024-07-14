function washing(callback){

    console.log("washing started");

    setTimeout(() => {
        console.log("washing done");
        callback();
    }, 5000);

}


function soaking(callback){
    console.log("soaking started");
    setTimeout(() => {
        console.log("soaking done");
        callback();
    }, 5000);
}

// function ironing(callback){
//     console.log("ironing started"); 
//     setTimeout(() => {
//         console.log("ironing done");
//         callback();
//     }, 3000);
// }

function drying(callback){
    console.log("drying started");
    setTimeout(() => {
        console.log("drying done");
        callback();
    }, 3000);
}

