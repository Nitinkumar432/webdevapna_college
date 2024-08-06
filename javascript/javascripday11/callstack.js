// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans =two() + one();
//     console.log(ans);
// }
// three();
console.log("hello pehla ");
setTimeout(() => {
    console.log("hello");
}, 2000);
h1=document.querySelector("h1");
// setTimeout(()=>{
//    h1.style.color='red';
// },2000);
// setTimeout(()=>{
//     h1.style.color='green';
//  },3000);
//  setTimeout(()=>{
//     h1.style.color='blue';
//  },4000);
 //better
 function chage(color,delay,nextcolor){
    setTimeout(()=>{
        h1.style.color=color;
        nextcolor();

    },delay);
    
 }
chage("red",1000,()=>{
    chage("green",2000);
});

chage("blue",3000);
//promises
function save(data, success, failure) {
    let isSuccess = Math.floor(Math.random() * 10) + 1;
    if (isSuccess > 4) {
        success(data);
    } else {
        failure();
    }
}

save("hello",
    (data) => {
        console.log("Data saved:", data);
        // Nested save function call
        save("world",
            (data) => {
                console.log("Second data saved:", data);
                // Nested save function call
                save("!",
                    (data) => {
                        console.log("Third data saved:", data);
                    },
                    () => {
                        console.log("Weak connection, third data not saved");
                    }
                );
            },
            () => {
                console.log("Weak connection, second data not saved");
            }
        );
    },
    () => {
        console.log("Weak connection, first data not saved");
    }
);
//promises then cath
const fs = require('fs');

function saveDataToFile(data, filename) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (error) => {
            if (error) {
                reject(error); // Reject the promise with an error if writing fails
            } else {
                resolve(filename); // Resolve the promise with the filename if writing is successful
            }
        });
    });
}

// Example usage
const dataToSave = "This is some data to save to a file.";
const filename = "saved_data.txt";

saveDataToFile(dataToSave, filename)
    .then((filename) => {
        console.log(`Data saved to ${filename}`);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


