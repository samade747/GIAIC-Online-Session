// promises

const returnMoney = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100);
    }, 5000);
});

returnMoney
    .then((value) => {
    console.log(value)
    console.log(`mehrbani bhai pasie dene ke liye thanks for returning money`)    
}) .catch(()=> {
    console.log("something went wrong try again later sorry no money for you pisa khtan")
})
