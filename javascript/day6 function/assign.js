const maxof=function(arr){
    let max=0;
    for(let i of arr){
        if(i>max){
            max=i;
        }
    }
    return max;
}



let arrf=[1,2,34,5,5,6];
console.log(maxof(arrf));
// /unique
// function un(str){
//     let fg="";
//     for(let i=0;i<str.length;i++){
//         let un=true;
//         for(let j=0;j<str.length;j++){
//             if(str[i]==str[j] && i!=j){
//                 un=false;
//                 break;
//             }
//         }
//         if(un){
//             fg+=str[i];
//         }
    
//     }
//     return fg;
// }
// let str="abcdabcdefgggh";

// console.log(un(str))
function un(str){
    let fg="";
    for(let i=0;i<str.length;i++){
        let c=0;
        let m=true;
        for(let j=0;j<fg.length;j++){
            if(str[i]==fg[j]){
                c++;
                n=false;
                break;
            }

        }
        if(c==0){
            fg=fg+str[i];
        }
    
    }
    return fg;
}
let str="abcdabcdefgggh";

console.log(un(str))