let arr=[1,2,3,4,5];

let print=function (ele){
    console.log(ele);
}
let print2=(ele)=>{
    console.log(ele);
}
arr.forEach(print);
arr.forEach(print2);
//map
let num=[1,2,3,4,5];
let double=num.map((ele)=>{
    return ele*2;
});
console.log(double);
// filter
let num1=[1,4,5,3,6,3,5];
let te=num1.filter((num)=>(num%2==0));
console.log(te);
let m1=num1.filter((num)=>{
    return num<5;
});
console.log(m1);

// every function
let num2=[1,2,3,4];
console.log(num2.every((num)=>(num<5)));
let d=[4,5,6,4,5,4];
// reduce
let x=[1,2,3,4];
let m=x.reduce((res,el)=>(res+el));
console.log(m);


let mt=x.reduce((res,el)=>{return res+el});
console.log(mt);
//find maximum of array
let fg=x.reduce((res,el)=>{
    if(el>res){
        return el;
    }else{
        return res;
    }
});
console.log(fg);
//every
let nume=[5,6,5,3,4,2,3,6,4,4];
let xt=nume.every((num)=> (num%10==0));
// default parameter
function sum(rt,b=3){
    return  rt+b;
};
console.log(sum(7,b));
// console.log(Math.min(...nume));
let df=[6,4,7,3,7];
let dt=[...df];
console.log(dt);
console.log("hello");