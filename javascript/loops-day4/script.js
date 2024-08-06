// loop method

// let n=prompt("enter the number ");
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);

// }
// nested loop

for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}
let fav="krish";
let c=true;

while(c){
    let guess=prompt("enter your guess : ");
    if(guess==fav){
        alert("wohho you got a right");

        c=false;
    }else{
        alert("wrong ans");
        let a=prompt("enter 1 for continue else 0");
        a=parseInt(a);
        if(a==0){
            c=false;
        }else{
            continue;
        }
    }
        
   

    
}