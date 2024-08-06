// let obj='{"activity":"Write a thank you letter to an influential person in your life","type":"social","participants":1,"price":0,"link":"","key":"4101229","accessibility":0.1}';
// console.log(obj);
// let valid=JSON.parse(obj);
// console.log(valid);
// let aoo={
//     nitin:{
//         "name":1,
//         roll:1
//     },
//     patel : {
//         "name":'lr',
//         roll:221099200,

//     }

// };
// let p=JSON.stringify(aoo);
// console.log(p);
// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log(res);

//     res.json().then((data)=>{
//         console.log(data.fact);

//     });
// })
// .catch((err)=>{
//     console.log("error -",err);

// })
// const url = "https://catfact.ninja/fact";

// async function fetchData() {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         return data.fact;
//     } catch (err) {
//         console.log("error -", err);
//         throw err; // rethrowing the error for handling further up the call stack if needed
//     }
// }

// async function processFact() {
//     try {
//         const fact = await fetchData();
//         console.log("Cat fact:", fact);
//         // Call other functions here if needed
//     } catch (err) {
//         // Handle errors if needed
//     }
// }

// // Call the async function
// processFact();
// const axios = require('axios');
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let fact=await getFacts();
    // let p=document.querySelector("#fact");
    // p.innerText=fact;
    console.log(fact);

    console.log("button was clicked");
})
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        // console.log(res.data.fact);
        return res.data.fact;
    } catch (error) {
        // console.log("Error:", error);
        return "no fact found";
    }
}




