function prRint(){
    console.log("hello ji");

}
prrint();

//age check vote for 
function checkvote(){
    let a=67;
    if(a>=18){
        console.log("bhai vote kar sakta hai");
    }else{
        console.log("you can't vote");
    }

}
checkvote();


//chexk dice guess 1to 6;
// function guess(){
//     let guess=prompt("enter you guess between 1 to 6");
//     let rand=(Math.floor(Math.random()*6+1));
//     if(guess==rand){
//         console.log("right ");
//         return 1;
//     }else{
//         console.log("wrong");
    
//     }


// }
// while(guess());
function pr(name,age){
    console.log(name,age);
    console.log(`hello your name is ${name} and age is ${age}`);
}
let a='nitin';
let d=23;
pr(a,d);


function avgofth(a,b,c){
    let m=(a+b+c)/3;
    console.log(`av of three is ${m}  `);
}
let rt=5,b=6,c=7;
avgofth(rt,b,c);
// let m=[1,2,3];
// m.push(5);
// m.unshift(45);
// m.shift();
// console.log(m);


// table print
function printm(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);
    }
}


rtt = 10; // Convert input to integer
printm(rtt);
function sumoftwo(a1,b1){
    return a1+b1;

}
console.log(sumoftwo(10,20));
function hello(e,fg){
    console.log("hello");

    console.log("done");
    return e+fg;

}
let e=56,fg=67;
console.log(hello(e,fg));
// concate all strings in array
function arrc(arr) {
    let result = '';  
    for (let i of arr) {
        if (typeof i !== 'number') {
            result+=i;
       }
    }
    return result; 
}

let arr = [1, 2, 3, 'nitin', 'patel'];
console.log(arrc(arr)); // Output will be 'nitinpatel'
// function expression

const sum=function(a,b){
    return a+b;
}


console.log(sum(10,15));
///method
const calc={
    add : function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;

    }
}
console.log(calc.add(12,44));

