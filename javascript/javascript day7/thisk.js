const student={
    name : 'nitin',
    age:20,
    eng:34,
    hindi:96,
    math:56,
    getavg(){
        let avg=(this.eng+this.hindi+this.math)/3 ;               ;
        console.log(avg);


    }
}

console.log(student.getavg());
//try catch
try{
console.log(a);
}catch{
    console.log("a not defined");
};
// explict function
const sum=(a,b)=>{
    return a+b;
};
console.log(sum(10,20));

const mul=(a,b)=>a*b;{
     
};

console.log(mul(10,20));
setTimeout(()=>{
    console.log("nitin patel")
},4000);
console.log("done");
//pass with arguments
function printSum(a, b) {
    console.log(a + b);
}

let a = 10;
let b = 20;
setTimeout(printSum, 4000, a, b);

// setinterval
setInterval(()=>{
    console.log("hello we present");
},5000);

function printsum(a,b){
    console.log(a+b);
}
setInterval(printsum,4000,30,50);



// let arrf=[1,2,34,5,5,6];
// console.log(maxof(arr));
let id=setInterval(()=>{
    console.log("hello");
},4000);
console.log(id);
// clearInterval(id);
const sur=(a,b)=>{
    return a+b;
}

console.log(sur(29,45));