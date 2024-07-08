const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("operation successfull")
    } else {
        reject("some error happended")
    }
});
myPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})