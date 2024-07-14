function washing(callback){

    console.log("washing started");

    setTimeout(() => {
        console.log("washing done");
        callback();
    }, 5000);

}


