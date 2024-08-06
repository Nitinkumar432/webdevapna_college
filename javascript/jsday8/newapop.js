console.log("hello");
let arr=[4,5,6,6,5];
let x=[...arr];
console.log(x);


function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
        
    }
}
arrm=[6,5,3,5,3,5];
sum(arrm);