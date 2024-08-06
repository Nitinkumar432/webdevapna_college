let user=prompt("enter your max number ");
user=parseInt(user);

while(true){
    let x=prompt(`enter your guess number between  ${1} to ${user}`);
    console.log(`enter your guess number between  ${1} to ${user}`);
    let rand=(Math.floor(Math.random()*user+1));
    if(rand==x){
        console.log(`congratulation you are right number was ${rand} and you guess ${x} `);
        let p=prompt("do you play game if yes then 1 else 0");
        p=parseInt(p);
        if(p==1){
            continue;
        }else{
            break;
        }
    }else{
        console.log("you guessed wrong Digit");
       
        console.log(`number was ${rand}`);
        let p=prompt("do you play game if yes then 1 else 0");
        p=parseInt(p);
        if(p==1){
            continue;
        }else{
            break;
        }
        // let test=prompt("do you want to change max value if yes then eter 1 else 0");
        // if(test==1){
        //     user=prompt("enter your max number ");
        // }else{
        //     continue;
            
        // }

    }
}