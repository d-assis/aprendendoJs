let better =  "truta"

function whoIsBetterCallback(callback,errorCallback){
    if(better == 'fulano' || better == 'cicrano'){
        callback({
            name: better,
            message: 'devs are the best'
        })

    } else{
        errorCallback({
            name: 'this is wrong!',
            message: `${better}, really?`
        })
    }
};

whoIsBetterCallback((result) => {
    console.log(`${result.name}, yeah! ${result.message}`)
}, (err) => {
    console.log(`${err.name} ${err.message}`)
})