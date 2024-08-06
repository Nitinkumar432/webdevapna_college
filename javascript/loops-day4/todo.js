console.log("thank you");
let rt=[];

while(true){
    let ask=prompt("enter your request");
    if(ask=='quit'){
        alert("quit the game");
        break;
    }

    else if(ask=='list'){
        console.log("--------------");
        for(let i=0;i<rt.length;i++){
            console.log(i,rt[i]);
      
        }
        console.log("--------------");

    }else if(ask=='add'){
        let c=prompt("enter your task : ");
        rt.push(c);
        console.log("successfully added");
    }
    else if(ask=='delete'){
        if(rt.length>0){
            let t=prompt("enter your index to remove");
            rt.splice(t,1);
            console.log("success fully deleted");
        }else{
            console.log("your database is empty")
        }
    }else{
        console.log("wrong input");
    }
}