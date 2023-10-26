async function typingSpeed(didPractice) {
    return new Promise((resolve, reject) => {
        let speed = 80;
        setTimeout(() => {
            if(didPractice){
                resolve(80);
            } else {
                reject (new Error("I failed"));
            }
        }, 2000);
    });
}

typingSpeed(false).then((result) => {
    console.log("I can type at a speed of ${result} wpm");
}).catch((err) => {
    console.log(err);
})